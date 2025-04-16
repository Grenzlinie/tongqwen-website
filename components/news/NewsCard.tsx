import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
}

// Tag color mapping
const tagColors: { [key: string]: string } = {
  'Paper': 'bg-blue-50 text-blue-700 ring-blue-600/20',
  'Conference': 'bg-green-50 text-green-700 ring-green-600/20',
  'Report': 'bg-teal-50 text-teal-700 ring-teal-600/20',
  'Grant': 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
  'Recruitment': 'bg-red-50 text-red-700 ring-red-600/20',
  'Collaboration': 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
  'Visit': 'bg-cyan-50 text-cyan-700 ring-cyan-600/20',
  'Award': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  'Workshop': 'bg-violet-50 text-violet-700 ring-violet-600/20',
  'Education': 'bg-pink-50 text-pink-700 ring-pink-600/20',
  'Industry': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  // Format ISO date to YYYY-MM-DD
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${year}-${month}-${day}`;
  };

  // Get the numeric part of the date for visual effect
  const getDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getMonth = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[date.getMonth()];
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-sky-500">
      <div className="flex items-start gap-4">
        {/* Date marker */}
        <div className="flex-shrink-0 w-14 h-14 bg-sky-50 rounded-lg flex flex-col items-center justify-center border border-sky-100">
          <span className="text-2xl font-bold text-sky-600">{getDay(news.date)}</span>
          <span className="text-xs text-sky-500">{getMonth(news.date)}</span>
        </div>
        
        <div className="flex-1">
          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="flex gap-2 mb-2 flex-wrap">
              {news.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${tagColors[tag] || 'bg-sky-50 text-sky-700 ring-sky-600/20'}`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Content */}
          <div 
            className="text-slate-600 prose-sm"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
          
          {/* Full date (small text) */}
          <div className="mt-2 text-xs text-slate-400 flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(news.date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;