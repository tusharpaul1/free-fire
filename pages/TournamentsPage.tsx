import React from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import { Tournament, TournamentStatus } from '../types';
import { Button } from '../components/Button';

const TournamentCard: React.FC<{ tournament: Tournament }> = ({ tournament }) => {
    const statusColor = {
        [TournamentStatus.UPCOMING]: 'border-blue-500',
        [TournamentStatus.ONGOING]: 'border-green-500 animate-pulse',
        [TournamentStatus.COMPLETED]: 'border-gray-500 dark:border-gray-600',
    };

    const statusBgColor = {
        [TournamentStatus.UPCOMING]: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
        [TournamentStatus.ONGOING]: 'bg-green-500/10 text-green-500 dark:text-green-400',
        [TournamentStatus.COMPLETED]: 'bg-gray-500/10 text-gray-500 dark:text-gray-400',
    }

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-l-4 ${statusColor[tournament.status]} transition-transform duration-300 hover:transform hover:-translate-y-1`}>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tournament.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tournament.date} @ {tournament.time}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusBgColor[tournament.status]}`}>
                        {tournament.status}
                    </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div><strong>Prize Pool:</strong><br/><span className="text-brand-primary font-semibold">{tournament.prizePool}</span></div>
                    <div><strong>Format:</strong><br/>{tournament.format}</div>
                    <div><strong>Players:</strong><br/>{tournament.registeredPlayers} / {tournament.maxPlayers}</div>
                </div>
                <div className="mt-6">
                    <Button className="w-full">
                        {tournament.status === TournamentStatus.UPCOMING ? 'Register Now' : 'View Details'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

const TournamentList: React.FC<{ title: string; tournaments: Tournament[] }> = ({ title, tournaments }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-brand-primary pl-4">{title}</h2>
        {tournaments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tournaments.map(t => <TournamentCard key={t.id} tournament={t} />)}
            </div>
        ) : (
             <p className="text-gray-500 dark:text-gray-400">No tournaments in this category right now. Check back soon!</p>
        )}
    </section>
);


export const TournamentsPage: React.FC = () => {
    const ongoing = MOCK_TOURNAMENTS.filter(t => t.status === TournamentStatus.ONGOING);
    const upcoming = MOCK_TOURNAMENTS.filter(t => t.status === TournamentStatus.UPCOMING);
    const completed = MOCK_TOURNAMENTS.filter(t => t.status === TournamentStatus.COMPLETED);

    return (
        <div className="animate-fade-in">
            <TournamentList title="Ongoing Tournaments" tournaments={ongoing} />
            <TournamentList title="Upcoming Tournaments" tournaments={upcoming} />
            <TournamentList title="Completed Tournaments" tournaments={completed} />
        </div>
    );
};
