import React from 'react';

const News = () => {
  const newsItems = [
    {
      date: '2024-02',
      content: 'Paper accepted to CVPR 2024!',
    },
    {
      date: '2024-01',
      content: 'Joining XYZ Lab as a Postdoctoral Researcher',
    },
    {
      date: '2023-12',
      content: 'Successfully defended my Ph.D. thesis',
    },
    // Add more news items here
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent News</h2>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-sm font-medium text-sky-500 whitespace-nowrap">
              {item.date}
            </div>
            <div className="text-slate-700">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;