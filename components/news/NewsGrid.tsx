'use client';

import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { NewsItem } from '@/types';

const NewsGrid = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [years, setYears] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/news_data.json');
        const data = await response.json();
        setNewsList(data);
        
        // 提取所有年份
        const yearsSet = new Set<string>();
        data.forEach((news: NewsItem) => {
          const year = new Date(news.date).getFullYear().toString();
          yearsSet.add(year);
        });
        const yearsArray = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a));
        setYears(yearsArray);
        
        // 提取所有标签
        const tagsSet = new Set<string>();
        data.forEach((news: NewsItem) => {
          if (news.tags) {
            news.tags.forEach(tag => tagsSet.add(tag));
          }
        });
        const tagsArray = Array.from(tagsSet).sort();
        setTags(tagsArray);
        
        // 默认选择最新的年份（如果 selectedYear 为 null，则不设置默认值）
        if (yearsArray.length > 0 && selectedYear === undefined) {
          setSelectedYear(yearsArray[0]);
        }
      } catch (error) {
        console.error('Failed to load news data:', error);
      }
    };

    fetchNews();
  }, []); // 移除 selectedYear 依赖，避免循环重新加载

  // 根据年份和标签过滤新闻
  const filteredNews = newsList.filter(news => {
    const yearMatch = selectedYear === null || new Date(news.date).getFullYear().toString() === selectedYear;
    const tagMatch = selectedTag === null || (news.tags && news.tags.includes(selectedTag));
    return yearMatch && tagMatch;
  });

  return (
    <div className="space-y-8">
      {/* 年份筛选 */}
      <div>
        <h3 className="text-lg font-medium text-slate-900 mb-3">Filter by year</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${selectedYear === null ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            All
          </button>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedYear === year ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* 标签筛选 */}
      <div>
        <h3 className="text-lg font-medium text-slate-900 mb-3">Filter by category</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${selectedTag === null ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            All
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedTag === tag ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 结果计数 */}
      <div className="text-sm text-slate-500">
        Found {filteredNews.length} news items
      </div>

      {/* 新闻列表 */}
      <div className="space-y-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))
        ) : (
          <div className="text-center py-12 text-slate-500">
            No news found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsGrid;