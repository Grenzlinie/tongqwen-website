'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const CollaboratorGrid = () => {
  const collaborators = [
    {
      name: "Prof. Example Name",
      title: "Professor",
      institution: "Stanford University",
      image: "/api/placeholder/150/150",
      website: "https://example.com",
      research: "Machine Learning, Computer Vision"
    },
    // Add more collaborators here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collaborators.map((collaborator, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={collaborator.image}
                alt={collaborator.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900 group">
                <a 
                  href={collaborator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sky-500 transition-colors"
                >
                  {collaborator.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                {collaborator.title}
              </p>
              <p className="text-slate-600 text-sm">
                {collaborator.institution}
              </p>
              <p className="text-slate-500 text-sm mt-2">
                {collaborator.research}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollaboratorGrid;