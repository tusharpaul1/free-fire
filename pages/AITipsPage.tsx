import React, { useState } from 'react';
import { getGameTips } from '../services/geminiService';
import { Button } from '../components/Button';

export const AITipsPage: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [tips, setTips] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGetTips = async () => {
        if (!topic.trim()) {
            setError('Please enter a topic.');
            return;
        }
        setIsLoading(true);
        setError('');
        setTips('');
        try {
            const result = await getGameTips(topic);
            setTips(result);
        } catch (err) {
            setError('Failed to fetch tips. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const renderTips = (tipsText: string) => {
        const elements = tipsText.split('\n').map((line, index) => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            return <li key={index} className="text-gray-700 dark:text-gray-300">{trimmedLine.substring(2)}</li>;
          }
          if (trimmedLine.length > 0 && (trimmedLine.endsWith(':') || !trimmedLine.includes(' '))) {
            return <h4 key={index} className="font-bold text-lg text-gray-900 dark:text-white mt-4">{trimmedLine}</h4>
          }
          if (trimmedLine) {
            return <p key={index} className="text-gray-600 dark:text-gray-400">{line}</p>;
          }
          return null;
        }).filter(Boolean);


        const groupedElements: React.ReactNode[] = [];
        let listItems: React.ReactElement[] = [];

        elements.forEach((el, index) => {
            if (el && el.type === 'li') {
                listItems.push(el);
            } else {
                if (listItems.length > 0) {
                    groupedElements.push(<ul key={`ul-${index}`} className="list-disc space-y-2 pl-5 mt-2">{listItems}</ul>);
                    listItems = [];
                }
                groupedElements.push(el);
            }
        });

        if (listItems.length > 0) {
            groupedElements.push(<ul key="ul-last" className="list-disc space-y-2 pl-5 mt-2">{listItems}</ul>);
        }

        return groupedElements;
      };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">AI Pro Tips</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Get expert advice from our AI coach on any Free Fire topic.</p>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'Squad rotation in Bermuda'"
                        className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 rounded-md px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        aria-label="Game Tip Topic"
                    />
                    <Button onClick={handleGetTips} disabled={isLoading} className="w-full sm:w-auto">
                        {isLoading ? 'Getting Tips...' : 'Get Tips'}
                    </Button>
                </div>
                 {error && <p className="text-red-500 dark:text-red-400 mt-2">{error}</p>}
            </div>

            {tips && (
                 <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Here are some tips on "{topic}":</h3>
                    <div className="prose prose-lg dark:prose-invert max-w-none">{renderTips(tips)}</div>
                </div>
            )}
        </div>
    );
};
