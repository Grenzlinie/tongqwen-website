'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const CollaboratorGrid = () => {
  const collaborators = [
    {
      name: "David Srolovitz",
      title: "Group member",
      institution: "The University of Hong Kong",
      image: "/david-srolovitz.png",
      website: "https://scholar.google.com/citations?hl=zh-CN&user=nC95Zy0AAAAJ&view_op=list_works&sortby=pubdate",
      research: "Materials theory, Simulations of defects, Microstructure, Deformation, and Film growth"
    },
    {
      name: "Linfeng Zhang",
      title: "Researcher",
      institution: "DP Technology; AI for Science Institute",
      image: "/linfengzhang.png",
      website: "https://scholar.google.com/citations?user=jk7qwmcAAAAJ&hl=zh-CN",
      research: "AI for Science, Multi-scale modeling, Molecular simulation, Materials design"
    },
    {
      name: "Zhuoyuan Li",
      title: "Group member",
      institution: "The University of Hong Kong",
      image: "/zhuoyuanli.png",
      website: "https://github.com/ZLI-afk",
      research: "Inverse design, Automatic workflow, Density functional theory, Machine learning potential"
    },
    {
      name: "Beilin Ye",
      title: "Group member",
      institution: "The University of Hong Kong",
      image: "/beilinye.png",
      website: "https://scholar.google.com/citations?user=_rt5FgUAAAAJ&hl=en",
      research: "AI for ceramic materials, high entropy alloys"
    },
    {
      name: "Yuewen Yang",
      title: "Group member",
      institution: "The University of Hong Kong",
      image: "/yuewenyang.png",
      website: "https://scholar.google.com/citations?user=DfBqZBkAAAAJ&hl=zh-TW",
      research: "AI for catalyst materials, Density functional theory"
    },
    {
      name: "Siyu Liu",
      title: "Group member",
      institution: "The University of Hong Kong",
      image: "/siyuliu.png",
      website: "https://grenzlinie.github.io/",
      research: "Large language model, Machine learning, Deep learning for materials"
    },
    {
      name: "Sun Yang",
      title: "Researcher",
      institution: "Columbia University",
      image: "/sunyang.png",
      website: "https://scholar.google.com/citations?user=91yBLrMAAAAJ&hl=zh-CN",
      research: ""
    }
    // Add more collaborators here
  ];

  // Separate collaborators based on title
  const groupMembers = collaborators.filter(c => c.title === "Group member");
  const researchers = collaborators.filter(c => c.title === "Researcher");

  return (
    <div>
      {/* Group members section */}
      <div className="text-xl font-semibold mb-4">Members</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupMembers.map((collaborator, index) => (
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
                <p className="text-slate-600 text-sm">{collaborator.institution}</p>
                <p className="text-slate-500 text-sm mt-2">{collaborator.research}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Researchers section */}
      <div className="text-xl font-semibold mt-8 mb-4">Researchers</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchers.map((collaborator, index) => (
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
                <p className="text-slate-600 text-sm">{collaborator.institution}</p>
                <p className="text-slate-500 text-sm mt-2">{collaborator.research}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorGrid;