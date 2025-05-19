'use client';

import { useState, useEffect } from 'react';
import NewsGrid from '@/components/news/NewsGrid';
import MonthlyArchive from '@/components/news/MonthlyArchive';
import { CalendarRange, Grid3X3 } from 'lucide-react';

export default function NewsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'archive'>('grid');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check device size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window size changes
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">News Updates</h1>
        <p className="mt-2 text-slate-600">
        This section showcases the latest research achievements, academic activities, and other important updates.
        </p>
      </div>
      
      {/* View switch */}
      <div className="flex space-x-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2
            ${viewMode === 'grid' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          <Grid3X3 className="w-4 h-4" />
          <span>{isMobile ? "" : "Annual View"}</span>
        </button>
        <button
          onClick={() => setViewMode('archive')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2
            ${viewMode === 'archive' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          <CalendarRange className="w-4 h-4" />
          <span>{isMobile ? "" : "Monthly Archive"}</span>
        </button>
      </div>
      
      {/* Content area */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        {viewMode === 'grid' ? <NewsGrid /> : <MonthlyArchive />}
      </div>
    </div>
  );
}