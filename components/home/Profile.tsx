import React from 'react';
import Image from 'next/image';
import { Mail, Github, Twitter, Linkedin, GraduationCap } from 'lucide-react';

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
        <p className="text-lg text-slate-600 mb-4">
          Research Assistant Professor
          <br />
          Ph.D. in Materials Science
          <br />
          Department of Mechanical Engineering
          <br />
          The University of Hong Kong
        </p>
        
        {/* Research Interests */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Research Interests</h2>
          <p className="text-slate-600">
          AI for science, Machine learning potentials,
          </p>
          <p className="text-slate-600">
          Atomistic simulations of defect properties, High-entropy materials, Liquid and glass.
          </p>
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