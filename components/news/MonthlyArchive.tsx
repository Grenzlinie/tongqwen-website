'use client';

import React, { useEffect, useState } from 'react';
import { NewsItem } from '@/types';
import NewsCard from './NewsCard';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const MonthlyArchive = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [selectedYearMonth, setSelectedYearMonth] = useState<string | null>(null);
  const [yearMonths, setYearMonths] = useState<{year: string, months: string[]}[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news_data.json');
        const data = await response.json();
        setNewsList(data);
        
        // Group by year and month
        const yearMonthsMap = new Map<string, Set<string>>();
        data.forEach((news: NewsItem) => {
          const date = new Date(news.date);
          const year = date.getFullYear().toString();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          
          if (!yearMonthsMap.has(year)) {
            yearMonthsMap.set(year, new Set<string>());
          }
          yearMonthsMap.get(year)!.add(month);
        });
        
        // Convert to the format needed by the component
        const formattedYearMonths = Array.from(yearMonthsMap.entries())
          .map(([year, monthsSet]) => ({
            year,
            months: Array.from(monthsSet).sort((a, b) => b.localeCompare(a)) // Sort in descending order
          }))
          .sort((a, b) => b.year.localeCompare(a.year)); // Sort years in descending order
        
        setYearMonths(formattedYearMonths);
        
        // Default to expand the latest year
        if (formattedYearMonths.length > 0) {
          setExpandedYears(new Set([formattedYearMonths[0].year]));
        }
        
        // Default to select the latest year and month
        if (formattedYearMonths.length > 0 && formattedYearMonths[0].months.length > 0 && !selectedYearMonth) {
          setSelectedYearMonth(`${formattedYearMonths[0].year}-${formattedYearMonths[0].months[0]}`);
        }
      } catch (error) {
        console.error('Failed to load news data:', error);
      }
    };

    fetchNews();
  }, [selectedYearMonth]);

  const filteredNews = selectedYearMonth
    ? newsList.filter(news => {
        const date = new Date(news.date);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${year}-${month}` === selectedYearMonth;
      })
    : newsList;
    
  // Month name mapping
  const monthNames: {[key: string]: string} = {
    '01': 'January', '02': 'February', '03': 'March', '04': 'April',
    '05': 'May', '06': 'June', '07': 'July', '08': 'August',
    '09': 'September', '10': 'October', '11': 'November', '12': 'December'
  };

  // Toggle year expand/collapse state
  const toggleYearExpand = (year: string) => {
    const newExpandedYears = new Set(expandedYears);
    if (expandedYears.has(year)) {
      newExpandedYears.delete(year);
    } else {
      newExpandedYears.add(year);
    }
    setExpandedYears(newExpandedYears);
  };

  // Get the display text for the currently selected year and month
  const getSelectedYearMonthText = () => {
    if (!selectedYearMonth) return 'All';
    const [year, month] = selectedYearMonth.split('-');
    return `${year} ${monthNames[month]}`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Dropdown menu for mobile devices */}
      <div className="md:hidden w-full mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm text-slate-800"
        >
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-sky-500" />
            <span>{getSelectedYearMonthText()}</span>
          </div>
          {isMobileMenuOpen ? 
            <ChevronUp className="w-4 h-4" /> : 
            <ChevronDown className="w-4 h-4" />
          }
        </button>
        
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white rounded-lg shadow-md p-4 max-h-80 overflow-y-auto">
            {yearMonths.map(({ year, months }) => (
              <div key={year} className="mb-3">
                <button
                  onClick={() => toggleYearExpand(year)}
                  className="w-full flex items-center justify-between text-slate-800 font-medium py-1"
                >
                  <span>{year}</span>
                  {expandedYears.has(year) ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
                
                {expandedYears.has(year) && (
                  <ul className="mt-1 pl-4 space-y-1">
                    {months.map(month => (
                      <li key={`${year}-${month}`}>
                        <button
                          onClick={() => {
                            setSelectedYearMonth(`${year}-${month}`);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`text-sm py-1 px-2 rounded-md w-full text-left ${
                            selectedYearMonth === `${year}-${month}`
                              ? 'bg-sky-100 text-sky-600 font-medium'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {monthNames[month]}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar for desktop devices */}
      <div className="hidden md:block md:w-64 flex-shrink-0">
        <div className="bg-white p-4 rounded-lg shadow-sm sticky top-20">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Monthly Archive</h3>
          <div className="space-y-4">
            {yearMonths.map(({ year, months }) => (
              <div key={year}>
                <button
                  onClick={() => toggleYearExpand(year)}
                  className="flex items-center justify-between w-full text-md font-medium text-slate-800 mb-2"
                >
                  <span>{year}</span>
                  {expandedYears.has(year) ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
                
                {expandedYears.has(year) && (
                  <ul className="space-y-1 pl-4">
                    {months.map(month => (
                      <li key={`${year}-${month}`}>
                        <button
                          onClick={() => setSelectedYearMonth(`${year}-${month}`)}
                          className={`text-sm py-1 px-2 rounded-md w-full text-left ${
                            selectedYearMonth === `${year}-${month}`
                              ? 'bg-sky-100 text-sky-600 font-medium'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {monthNames[month]}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-slate-900">
            News for {getSelectedYearMonthText()}
          </h3>
          <span className="text-sm text-slate-500">
            Total {filteredNews.length} items
          </span>
        </div>
        
        <div className="space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded-lg shadow-sm">
              No news for this month
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlyArchive;