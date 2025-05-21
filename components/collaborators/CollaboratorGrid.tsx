'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const CollaboratorGrid = () => {
  const collaborators = [
    {
      name: "David Srolovitz",
      institution: "The University of Hong Kong",
      image: "/david-srolovitz.png",
      website: "https://scholar.google.com/citations?user=nC95Zy0AAAAJ&hl=en",
      research: "Materials theory, Simulations of defects, Microstructure, Deformation, and Film growth"
    },
    {
      name: "Linfeng Zhang",
      institution: "DP Technology; AI for Science Institute",
      image: "/linfengzhang.png",
      website: "https://scholar.google.com/citations?user=jk7qwmcAAAAJ&hl=en",
      research: "AI for Science, Multi-scale modeling, Molecular simulation, Materials design"
    },
    {
      name: "Zhuoyuan Li",
      institution: "The University of Hong Kong",
      image: "/zhuoyuanli.png",
      website: "https://github.com/ZLI-afk",
      research: "Inverse design, Automatic workflow, Density functional theory, Machine learning potential"
    },
    {
      name: "Beilin Ye",
      institution: "The University of Hong Kong",
      image: "/beilinye.png",
      website: "https://scholar.google.com/citations?user=_rt5FgUAAAAJ&hl=en",
      research: "AI for ceramic materials, high entropy alloys"
    },
    {
      name: "Siyu Liu",
      institution: "The University of Hong Kong",
      image: "/siyuliu.png",
      website: "https://grenzlinie.github.io/",
      research: "Large language model, Machine learning, Deep learning for materials"
    },
    {
      name: "Yang Sun",
      institution: "Columbia University",
      image: "/sunyang.png",
      website: "https://scholar.google.com/citations?user=91yBLrMAAAAJ&hl=en",
      research: ""
    },
    {
      name: "Weinan E",
      institution: "Peking University",
      image: "/default.png",
      website: "https://scholar.google.com/citations?user=i2mOt14AAAAJ&hl=en",
      research: "Applied mathematics"
    },
    {
      name: "Han Wang",
      institution: "Institute of Applied Physics and Computational Mathematics",
      image: "/han-wang.png",
      website: "https://scholar.google.com/citations?user=BZsn3tcAAAAJ&hl=en",
      research: "Molecular dynamics, Machine learning, Rare events, Multiscale simulation"
    },
    {
      name: "Cai-Zhuang Wang",
      institution: "Ames National Laboratory",
      image: "/default.png",
      website: "https://scholar.google.com/citations?user=9r-VpcgAAAAJ&hl=en",
      research: "Condensed Matter Physics"
    },
    {
      name: "Kai-Ming Ho",
      institution: "Iowa State University",
      image: "/default.png",
      website: "https://scholar.google.com/citations?user=cGlRoOAAAAAJ&hl=en",
      research: "Condensed Matter"
    },
    {
      name: "Yanhui Liu",
      institution: "Institute of Physics, CAS",
      image: "/yanhui-liu.png",
      website: "https://scholar.google.com/citations?user=KKWzFUwAAAAJ&hl=en",
      research: "Combinatorial alloy development, Metallic glasses"
    },
    {
      name: "Jian Han",
      institution: "City University of Hong Kong",
      image: "/default.png",
      website: "https://scholar.google.com/citations?user=7qgSoLYAAAAJ&hl=en",
      research: "Materials Science and Engineering"
    },
    {
      name: "Zhaoxuan Wu",
      institution: "City University of Hong Kong",
      image: "/default.png",
      website: "https://scholar.google.com/citations?user=NwUDGc4AAAAJ&hl=en",
      research: "Multiscale Modeling and Simulation, Plasticity Theory, HCP Metals, Alloy Design"
    },
    {
      name: "Mohan Chen",
      institution: "Peking University",
      image: "/mohan-chen.png",
      website: "https://scholar.google.com/citations?user=enNUSlcAAAAJ&hl=en",
      research: "Density Functional Theory, Molecular Dynamics"
    },
    {
      name: "Jianqiu Liu",
      institution: "The University of Hong Kong",
      image: "/jianqiu_liu.jpeg",
      website: "https://scholar.google.com/citations?user=YNh6ecMAAAAJ&hl=zh-CN&oi=ao",
      research: "CPFEM and MD simulations of void evolution in metallic materials"
    },
    {
      name: "Bo Hu",
      institution: "The University of Hong Kong",
      image: "/hubo.png",
      website: "https://scholar.google.com/citations?user=ES_BMfsAAAAJ&hl=en",
      research: "LLM for materials, AI for grain boundaries"
    },
    {
      name: "A. S. L. Subrahmanyam Pattamatta",
      institution: "The University of Hong Kong",
      image: "/subrahmanyam_pattamatta.jpeg",
      website: "https://mech.hku.hk/academic-staff/pattamatta-subrahmanyam---",
      research: "Computational mechanics, materials science and high performance computing"
    },
    {
      name: "Xiaoguo Gong",
      institution: "The University of Hong Kong",
      image: "/xiaoguo_gong.jpeg",
      website: "https://scholar.google.com/citations?user=QWOZgRoAAAAJ&hl=zh-CN&oi=ao",
      research: "Machine learning potentials and grain boundary simulations in fcc metals"
    },
    {
      name: "Yuewen Yang",
      title: "Researcher",
      institution: "The University of Hong Kong",
      image: "/yuewenyang.jpeg",
      website: "https://scholar.google.com/citations?user=DfBqZBkAAAAJ&hl=en",
      research: "MDFT, TD-DFT and MD for energy conversion"
    },
    {
      name: "Caihao Qiu",
      title: "Researcher",
      institution: "City University of Hong Kong",
      image: "/caihaoqiu.png",
      website: "https://scholar.google.com/citations?user=B7N1cSMAAAAJ&hl=en",
      research: "Grain boundary kinetics and microstructure evolution of polycrystals; front-tracking modelling, phase field simulation, molecular dynamics simulation"
    },
    {
      name: "Han Liu",
      title: "Researcher",
      institution: "City University of Hong Kong",
      image: "/default.png",
      website: "https://scholars.cityu.edu.hk/en/persons/han-liu(af9de0bd-deb1-407c-9747-85d623c536d1)/publications.html",
      research: "Lithium-ion battery materials"
    },
    {
      name: "Yang Ren",
      title: "Researcher",
      institution: "City University of Hong Kong",
      image: "/renyang.jpeg",
      website: "https://scholar.google.com/citations?user=yAdAxusAAAAJ&hl=en",
      research: "Condensed Matter Physics, Materials Physics, Phase transition, Synchrotron X-ray, Neutron scattering"
    }
    // Add more collaborators here
  ];

  return (
    <div>
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