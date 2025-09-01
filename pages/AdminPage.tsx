import React, { useState, useEffect } from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import { Tournament, TournamentFormat, TournamentStatus } from '../types';
import { Button } from '../components/Button';

const initialTournamentState: Omit<Tournament, 'id'> = {
    name: '',
    date: '',
    time: '',
    prizePool: '',
    format: TournamentFormat.SQUAD,
    status: TournamentStatus.UPCOMING,
    registeredPlayers: 0,
    maxPlayers: 100,
    rules: [],
    schedule: [],
};

const inputClasses = "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md w-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary";

const TournamentForm: React.FC<{
    onSubmit: (tournament: Omit<Tournament, 'id'>) => void;
    onCancel: () => void;
    initialData?: Tournament | null;
}> = ({ onSubmit, onCancel, initialData }) => {
    const [tournament, setTournament] = useState(initialData || initialTournamentState);

    useEffect(() => {
        setTournament(initialData || initialTournamentState);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTournament(prev => ({ ...prev, [name]: name === 'maxPlayers' ? parseInt(value, 10) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(tournament);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8 space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{initialData ? 'Edit Tournament' : 'Create New Tournament'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={tournament.name} onChange={handleChange} placeholder="Tournament Name" className={inputClasses} required />
                <input name="date" type="date" value={tournament.date} onChange={handleChange} className={inputClasses} required />
                <input name="time" type="time" value={tournament.time} onChange={handleChange} className={inputClasses} required />
                <input name="prizePool" value={tournament.prizePool} onChange={handleChange} placeholder="Prize Pool" className={inputClasses} required />
                <input name="maxPlayers" type="number" value={tournament.maxPlayers} onChange={handleChange} placeholder="Max Players" className={inputClasses} required />
                <select name="format" value={tournament.format} onChange={handleChange} className={inputClasses}>
                    {Object.values(TournamentFormat).map(f => <option key={f} value={f}>{f}</option>)}
                </select>
                <select name="status" value={tournament.status} onChange={handleChange} className={inputClasses}>
                    {Object.values(TournamentStatus).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
                <Button type="submit">{initialData ? 'Save Changes' : 'Create Tournament'}</Button>
            </div>
        </form>
    );
};


export const AdminPage: React.FC = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>(MOCK_TOURNAMENTS);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingTournament, setEditingTournament] = useState<Tournament | null>(null);

    const handleCreate = (newTournamentData: Omit<Tournament, 'id'>) => {
        const newTournament: Tournament = {
            ...newTournamentData,
            id: `t${Date.now()}`, // simple unique id
        };
        setTournaments(prev => [newTournament, ...prev]);
        setIsFormVisible(false);
    };

    const handleUpdate = (updatedTournamentData: Omit<Tournament, 'id'>) => {
        if (!editingTournament) return;
        setTournaments(prev => prev.map(t => t.id === editingTournament.id ? { ...t, ...updatedTournamentData } : t));
        setEditingTournament(null);
        setIsFormVisible(false);
    };
    
    const handleEdit = (tournament: Tournament) => {
        setEditingTournament(tournament);
        setIsFormVisible(true);
    };
    
    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this tournament?')) {
            setTournaments(prev => prev.filter(t => t.id !== id));
        }
    };

    const handleCancel = () => {
        setIsFormVisible(false);
        setEditingTournament(null);
    }

    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
                {!isFormVisible && (
                    <Button onClick={() => { setIsFormVisible(true); setEditingTournament(null); }}>Create Tournament</Button>
                )}
            </div>

            {isFormVisible && (
                <TournamentForm 
                    onSubmit={editingTournament ? handleUpdate : handleCreate}
                    onCancel={handleCancel}
                    initialData={editingTournament}
                />
            )}

            <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 dark:bg-gray-700/50">
                        <tr>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Format</th>
                            <th className="p-4 font-semibold">Status</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tournaments.map(t => (
                            <tr key={t.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-4 font-semibold">{t.name}</td>
                                <td className="p-4">{t.date}</td>
                                <td className="p-4">{t.format}</td>
                                <td className="p-4">{t.status}</td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="secondary" onClick={() => handleEdit(t)} className="px-3 py-1 text-sm">Edit</Button>
                                        <Button variant="outline" onClick={() => handleDelete(t.id)} className="px-3 py-1 text-sm !border-red-500 !text-red-500 hover:!bg-red-500 hover:!text-white">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
