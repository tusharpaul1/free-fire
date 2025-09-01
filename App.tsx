import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TournamentsPage } from './pages/TournamentsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { AITipsPage } from './pages/AITipsPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';

export type Page = 'home' | 'tournaments' | 'leaderboard' | 'profile' | 'ai-tips' | 'login' | 'admin';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSetPage = (newPage: Page) => {
    // Protect admin and profile pages
    if ((newPage === 'admin' || newPage === 'profile') && !isAdmin) {
      setPage('login');
    } else {
      setPage(newPage);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setPage('admin');
  }

  const handleLogout = () => {
    setIsAdmin(false);
    setPage('home');
  }

  const renderPage = () => {
    switch (page) {
      case 'tournaments':
        return <TournamentsPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'profile':
        return isAdmin ? <ProfilePage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'ai-tips':
        return <AITipsPage />;
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'admin':
        return isAdmin ? <AdminPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'home':
      default:
        return <HomePage setPage={handleSetPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header setPage={handleSetPage} isAdmin={isAdmin} handleLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
