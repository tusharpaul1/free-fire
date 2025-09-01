import React from 'react';
import { MOCK_PLAYER } from '../constants';
import { Button } from '../components/Button';

export const ProfilePage: React.FC = () => {
    const player = MOCK_PLAYER;

    return (
        <div className="animate-fade-in">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center animate-slide-in-up">
                    <img src={player.avatarUrl} alt={player.username} className="w-32 h-32 rounded-full mx-auto border-4 border-brand-primary" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{player.username}</h1>
                    <p className="text-gray-500 dark:text-gray-400">Game ID: {player.gameId}</p>
                    <Button variant="outline" className="mt-4 w-full">Edit Profile</Button>
                </div>

                {/* Stats and History */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Stats */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Player Stats</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                                <p className="text-3xl font-bold text-brand-primary">{player.stats.kdRatio.toFixed(2)}</p>
                                <p className="text-gray-500 dark:text-gray-400">K/D Ratio</p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                                <p className="text-3xl font-bold text-brand-primary">{player.stats.winRate}%</p>
                                <p className="text-gray-500 dark:text-gray-400">Win Rate</p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                                <p className="text-3xl font-bold text-brand-primary">{player.stats.matchesPlayed}</p>
                                <p className="text-gray-500 dark:text-gray-400">Matches Played</p>
                            </div>
                        </div>
                    </div>

                    {/* Match History */}
                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-slide-in-up" style={{animationDelay: '0.4s'}}>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white p-6">Match History</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100 dark:bg-gray-700/50">
                                    <tr>
                                        <th className="p-4 font-semibold">Tournament</th>
                                        <th className="p-4 font-semibold text-center">Rank</th>
                                        <th className="p-4 font-semibold text-center">Kills</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {player.matchHistory.map((match, index) => (
                                        <tr key={index} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                            <td className="p-4">{match.tournamentName}</td>
                                            <td className="p-4 text-center font-semibold">#{match.rank}</td>
                                            <td className="p-4 text-center">{match.kills}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
