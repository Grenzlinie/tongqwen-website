'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const PaperList = () => {
  const [papers, setPapers] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the papers data from the JSON file
    const fetchPapersFromJson = async () => {
      try {
        const response = await fetch('/papers_info.json'); // Adjust the path if needed
        const data = await response.json();

        // Process the data to organize papers by year
        const processedPapers = processPapersData(data);
        setPapers(processedPapers);
      } catch (error) {
        console.error('Failed to load papers from JSON:', error);
      }
    };

    fetchPapersFromJson();
  }, []);

  const processPapersData = (data: any[]) => {
    // Organize papers by year
    const papersByYear: any[] = [];

    data.forEach((paper: any) => {
      const { Year, Title, Author, Journal, FirstAuthor } = paper;
      if (!Year || !Title || !Author) return;

      let yearGroup = papersByYear.find((group) => group.year === Year);
      if (!yearGroup) {
        yearGroup = { year: Year, papers: [] };
        papersByYear.push(yearGroup);
      }

      yearGroup.papers.push({
        title: Title,
        authors: Author,
        venue: Journal,
        firstAuthor: FirstAuthor,
      });
    });

    // Sort the years in descending order
    papersByYear.sort((a, b) => b.year - a.year);

    return papersByYear;
  };

  const years = papers.map((group) => group.year);

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
        {years.map((year) => (
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
          .filter((group) => !selectedYear || group.year === selectedYear)
          .map((group) => (
            <div key={group.year}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{group.year}</h2>
              <div className="space-y-6">
                {group.papers.map((paper: { title: string; authors: string; venue: string }, index: number) => (
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
                        <p className="text-sm text-slate-500 mt-2">{paper.venue}</p>
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
