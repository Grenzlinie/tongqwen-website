import React from 'react';
import { FileText } from 'lucide-react';

const SelectedPapers = () => {
  const papers = [
    {
      title: "Your Paper Title Here",
      authors: "Your Name, Co-author 1, Co-author 2",
      conference: "CVPR 2024",
      link: "https://paper-url.com",
      highlight: "Best Paper Award"
    },
    // Add more selected papers
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Selected Publications</h2>
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
              <div>
                <a 
                  href={paper.link}
                  className="text-lg font-medium text-slate-900 hover:text-sky-500 transition-colors"
                >
                  {paper.title}
                </a>
                <p className="text-slate-600 mt-1">{paper.authors}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-slate-500">{paper.conference}</span>
                  {paper.highlight && (
                    <span className="text-sm font-medium text-sky-500">
                      {paper.highlight}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPapers;