import React from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 py-8">
      {/* Profile Image */}
      <div className="w-48 h-48 relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/personal-photo.png"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Tongqi Wen
        </h1>
        <p className="text-base text-slate-600 mb-4">
          Research Assistant Professor
          <br />
          Ph.D. in Materials Science
          <br />
          Department of Mechanical Engineering
          <br />
          The University of Hong Kong
        </p>
        
        {/* Research Interests */}
        <div className="mb-4 text-base">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Research Interests</h2>
          <div className="space-x-2">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 bg-red-50 rounded-full ring-1 ring-red-500/20 mr-2">
              AI for Science
            </span>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 bg-yellow-50 rounded-full ring-1 ring-yellow-500/20 mr-2">
              Machine Learning Potentials
            </span>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 bg-blue-50 rounded-full ring-1 ring-blue-500/20 mr-2">
              Atomistic Simulations
            </span>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 bg-green-50 rounded-full ring-1 ring-green-500/20 mr-2">
              High-entropy Materials
            </span>
          </div>
          <div className="space-x-2 mt-2">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 bg-purple-50 rounded-full ring-1 ring-purple-500/20">
              Liquid and Glass
            </span>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:tongqwen@hku.hk"
            className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a 
            href="https://github.com/kevinwenminion"
            className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/tongqi-wen-b99240220/"
            className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://scholar.google.com/citations?user=dxz_N2AAAAAJ&hl=zh-CN&oi=ao"
            className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition-colors"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Google Scholar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;