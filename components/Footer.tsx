import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-primary transition-colors duration-300" aria-label={ariaLabel}>
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; 2024 FF Battle Arena. All rights reserved.</p>
          <div className="flex space-x-6">
            <SocialIcon href="#" aria-label="Facebook page">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon href="#" aria-label="Twitter page">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Discord server">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.36982C18.995 3.89482 17.625 3.55982 16.228 3.37582C16.142 3.59382 16.052 3.85682 15.972 4.13582C14.639 3.89482 13.323 3.89482 12.003 4.13582C11.921 3.85682 11.833 3.59382 11.745 3.37582C10.348 3.55982 8.978 3.89482 7.656 4.36982C4.162 9.47982 4.133 14.4538 7.749 18.5098C9.349 19.6458 11.233 20.2798 13.204 20.4358C13.232 20.2228 13.256 20.0078 13.279 19.7938C13.018 19.7528 12.759 19.6968 12.504 19.6238C12.083 19.4938 11.674 19.3328 11.277 19.1418C11.275 19.1418 11.273 19.1408 11.271 19.1398C10.129 18.5778 9.227 17.6978 8.573 16.5888C8.525 16.5058 8.482 16.4218 8.441 16.3368C8.439 16.3328 8.438 16.3298 8.436 16.3258C6.512 14.5458 5.861 12.3838 6.435 10.1508C7.452 10.5988 8.441 10.9638 9.4 11.2398C9.401 11.2398 9.401 11.2388 9.402 11.2388C9.844 11.3788 10.293 11.4938 10.745 11.5808C11.222 11.6608 11.706 11.7178 12.195 11.7518L12.253 11.7558C12.753 11.7178 13.249 11.6568 13.737 11.5728C14.195 11.4878 14.649 11.3708 15.093 11.2298C15.094 11.2298 15.095 11.2288 15.095 11.2288C16.054 10.9608 17.043 10.5968 18.06 10.1488C18.637 12.3838 17.985 14.5458 16.062 16.3258C16.06 16.3298 16.059 16.3328 16.057 16.3368C16.016 16.4218 15.973 16.5058 15.925 16.5888C15.271 17.6978 14.369 18.5778 13.228 19.1398C13.226 19.1408 13.224 19.1418 13.223 19.1418C12.825 19.3328 12.416 19.4938 11.995 19.6238C11.741 19.6968 11.482 19.7528 11.22 19.7938C11.243 20.0078 11.267 20.2228 11.295 20.4358C13.266 20.2798 15.15 19.6458 16.75 18.5098C20.338 14.4538 20.313 9.47982 20.317 4.36982ZM10.229 14.4368C9.364 14.4368 8.653 13.7368 8.653 12.8888C8.653 12.0398 9.364 11.3398 10.229 11.3398C11.093 11.3398 11.804 12.0398 11.804 12.8888C11.804 13.7368 11.093 14.4368 10.229 14.4368ZM14.272 14.4368C13.407 14.4368 12.696 13.7368 12.696 12.8888C12.696 12.0398 13.407 11.3398 14.272 11.3398C15.136 11.3398 15.847 12.0398 15.847 12.8888C15.847 13.7368 15.136 14.4368 14.272 14.4368Z" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="YouTube channel">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM9.545 15.568V8.432L15.818 12 9.545 15.568z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};
