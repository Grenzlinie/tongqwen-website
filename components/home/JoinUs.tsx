// components/home/JoinUs.tsx

import React from 'react';

const JoinUs = () => {
  return (
  <div className="py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Join Us</h2>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-slate-600">
        We are looking for passionate and motivated individuals to join our team! If you are interested in contributing to cutting-edge research in AI and Materials Science, feel free to reach out.
      </p>
      <div className="mt-4">
        <a 
          href="mailto:tongqwen@hku.hk" 
          className="text-sky-500 hover:text-sky-600 transition-colors"
        >
          Contact us: tongqwen@hku.hk
        </a>
      </div>
    </div>
  </div>
  );
};

export default JoinUs;
