'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NewsItem } from '@/types';

const RecentNews = () => {
  const [recentNews, setRecentNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/news_data.json');
        const data = await response.json();
        
        // Sort by date in descending order and take the latest 3
        const sortedNews = data.sort((a: NewsItem, b: NewsItem) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        ).slice(0, 3);
        
        setRecentNews(sortedNews);
      } catch (error) {
        console.error('Failed to load news data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Format date to "YYYY-MM-DD" format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-slate-900">Recent News</h2>
        <Link 
          href="/news" 
          className="flex items-center text-sky-500 hover:text-sky-600 transition-colors text-sm"
        >
          View all news
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-pulse text-slate-400">Loading news...</div>
          </div>
        ) : recentNews.length > 0 ? (
          <div className="space-y-6">
            {recentNews.map((news, index) => (
              <div key={index} className={`${index !== recentNews.length - 1 ? 'border-b border-slate-200 pb-6' : ''}`}>
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(news.date)}</span>
                  
                  {/* Tags */}
                  {news.tags && news.tags.length > 0 && (
                    <div className="ml-4 flex gap-2">
                      {news.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div 
                  className="text-slate-600"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-slate-500">
            No recent news available
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentNews;