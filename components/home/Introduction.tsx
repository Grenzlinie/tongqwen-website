// components/home/Introduction.tsx

import React from 'react';

const Introduction = () => {
  return (
    <div className="py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-slate-600">
            Hello! I'm Tongqi Wen, a lively and driven researcher, passionate about making meaningful contributions to the exciting fields of Artificial Intelligence and Materials Science. Currently, I’m a Research Assistant Professor in the Department of Mechanical Engineering at the University of Hong Kong (HKU). My journey in science has been full of exciting opportunities and collaborations, and I’m always looking forward to the next challenge.
        </p>
        <p className="text-slate-600 mt-4">
            My research combines machine learning with atomistic simulations to explore fascinating materials, including high-entropy alloys, glass, and defect properties. I'm driven by the belief that technology and innovation can create breakthroughs that shape a brighter future, and I’m always excited to push the boundaries of what we know. Let's explore, discover, and innovate together!
        </p>
        <p className="text-slate-600 mt-4">
            Before joining HKU, I had the honor of conducting research at renowned institutions like Ames National Laboratory, Iowa State University (USA), and City University of Hong Kong. Along the way, I was humbled to receive the Ross Coffin Purdy Award from the American Ceramic Society in 2021.
        </p>
        </div>
    </div>
  );
};

export default Introduction;