'use client';

import React, { useState } from 'react';
import { FileText, Link as LinkIcon, Download } from 'lucide-react';

const PaperList = () => {
  // 这里模拟Google Scholar数据，实际使用时需要通过API获取
  const papers = [
    {
      year: 2024,
      papers: [
        {
          title: "Paper Title 1",
          authors: "Your Name, Co-author 1, Co-author 2",
          venue: "CVPR 2024",
          citations: 10,
          links: {
            pdf: "https://paper1.pdf",
            code: "https://github.com/paper1",
            project: "https://project1.com"
          }
        },
        // More papers from 2024
      ]
    },
    {
      year: 2023,
      papers: [
        // Papers from 2023
      ]
    }
  ];

  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = [...new Set(papers.map(group => group.year))];

  return (
    <div className="space-y-8">
      {/* Year filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedYear(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${!selectedYear ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
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

      {/* Papers list */}
      <div className="space-y-12">
        {papers
          .filter(group => !selectedYear || group.year === selectedYear)
          .map(group => (
            <div key={group.year}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{group.year}</h2>
              <div className="space-y-6">
                {group.papers.map((paper, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-slate-900">
                          {paper.title}
                        </h3>
                        <p className="text-slate-600 mt-1">{paper.authors}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-slate-500">{paper.venue}</span>
                          <span className="text-sm text-slate-500">Citations: {paper.citations}</span>
                        </div>
                        
                        {/* Paper links */}
                        <div className="flex gap-4 mt-4">
                          {paper.links.pdf && (
                            <a 
                              href={paper.links.pdf}
                              className="flex items-center gap-1 text-sm text-slate-600 hover:text-sky-500 transition-colors"
                            >
                              <Download className="w-4 h-4" />
                              <span>PDF</span>
                            </a>
                          )}
                          {paper.links.code && (
                            <a 
                              href={paper.links.code}
                              className="flex items-center gap-1 text-sm text-slate-600 hover:text-sky-500 transition-colors"
                            >
                              <LinkIcon className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          )}
                          {paper.links.project && (
                            <a 
                              href={paper.links.project}
                              className="flex items-center gap-1 text-sm text-slate-600 hover:text-sky-500 transition-colors"
                            >
                              <LinkIcon className="w-4 h-4" />
                              <span>Project</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PaperList;