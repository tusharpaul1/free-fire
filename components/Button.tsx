import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-orange-600 focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-purple-700 focus:ring-brand-secondary',
    outline: 'bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
