import React from 'react';
import type { Page } from '../App';
import { Button } from './Button';

interface HeaderProps {
  setPage: (page: Page) => void;
  isAdmin: boolean;
  handleLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary transition-colors duration-300 font-medium">
    {children}
  </button>
);

const ThemeToggleButton: React.FC<{ theme: 'light' | 'dark'; onClick: () => void }> = ({ theme, onClick }) => (
    <button onClick={onClick} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary transition-colors duration-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary" aria-label="Toggle theme">
        {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        )}
    </button>
);


export const Header: React.FC<HeaderProps> = ({ setPage, isAdmin, handleLogout, theme, toggleTheme }) => {
  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 shadow-md dark:shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage('home')}>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              FF <span className="text-brand-primary">Battle Arena</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => setPage('home')}>Home</NavLink>
            <NavLink onClick={() => setPage('tournaments')}>Tournaments</NavLink>
            <NavLink onClick={() => setPage('leaderboard')}>Leaderboard</NavLink>
            <NavLink onClick={() => setPage('ai-tips')}>AI Pro Tips</NavLink>
            {isAdmin && <NavLink onClick={() => setPage('admin')}>Admin</NavLink>}
          </div>
          <div className="flex items-center space-x-4">
             <ThemeToggleButton theme={theme} onClick={toggleTheme} />
            {isAdmin ? (
              <>
                <NavLink onClick={() => setPage('profile')}>Profile</NavLink>
                <Button variant="primary" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button variant="primary" onClick={() => setPage('login')}>Login</Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};