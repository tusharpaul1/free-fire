import React, { useState } from 'react';
import { Button } from '../components/Button';

interface LoginPageProps {
    onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded credentials for demonstration
        if (username === 'admin' && password === 'password') {
            setError('');
            onLoginSuccess();
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Admin Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600 dark:text-gray-400">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 rounded-md px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            placeholder="admin"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-400">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 rounded-md px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            placeholder="password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
                    <div>
                        <Button type="submit" className="w-full text-lg">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
