import React from 'react';
import { Button } from '../components/Button';
import type { Page } from '../App';

interface HomePageProps {
  setPage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div 
      className="relative rounded-lg overflow-hidden text-center animate-fade-in bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Enter the <span className="text-brand-primary">Battle Arena</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Join weekly Free Fire tournaments, compete against the best, and win exclusive prizes. Are you ready for the challenge?
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={() => setPage('tournaments')} variant="primary" className="text-lg w-full sm:w-auto">View Tournaments</Button>
          <Button variant="outline" className="text-lg w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-black">Register Now</Button>
        </div>
      </div>
    </div>
  );
};
