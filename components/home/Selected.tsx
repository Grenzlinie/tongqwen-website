import React from 'react';
import { FileText } from 'lucide-react';
import Image from 'next/image';

const SelectedPapers = () => {
  // 定义领域到颜色的映射
  const areaColors: { [key: string]: string } = {
    'AI4S': 'bg-red-50 text-red-700 ring-red-600/10',
    'Materials Laws': 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    'Other Area': 'bg-blue-50 text-blue-700 ring-blue-700/10',
    // 添加更多领域和对应的颜色类
  };

  const papers = [
    {
      title: "A Multi-agent Framework for Materials Laws Discovery",
      authors: "Bo Hu, Siyu Liu, Beilin Ye, Yun Hao, Tongqi Wen",
      conference: "arXiv",
      link: "https://arxiv.org/abs/2411.16416",
      area: ["AI4S", "Materials Laws"],
      date: "November 25, 2024",
      abstract: "This paper introduces a multi-agent framework based on large language models (LLMs) specifically designed for symbolic regression in materials science. The framework was applied to derive an interpretable formula for the glass-forming ability of metallic glasses, achieving a correlation coefficient of up to 0.948 with low formula complexity.",
      question: "🚀 Does AI possess the intelligence to autonomously discover materials laws?",
      image: "/hubo1.png", // 替换为实际的图片路径
    },
    {
      title: "A prompt-engineered large language model, deep learning workflow for materials classification",
      authors: "Siyu Liu, Tongqi Wen, A.S.L. Subrahmanyam Pattamatta, David J. Srolovitz",
      conference: "Materials Today",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1369702124002001",
      area: ["AI4S", "Materials Laws"],
      date: "September 19, 2024",
      abstract: "This paper introduces a prompt-engineered large language model (LLM) and deep learning workflow for materials classification. By integrating LLMs with prompt engineering and deep learning techniques, the proposed approach effectively extracts and utilizes the vast materials knowledge embedded within LLMs. Using a dataset of metallic glasses as a case study, the method significantly outperforms conventional classification models, achieving up to a 463% improvement in prediction accuracy. These results highlight the potential of LLM-generated textual knowledge in addressing materials classification challenges, particularly in scenarios with limited datasets, thereby advancing materials discovery and design.",
      question: "🧀 Can the materials knowledge stored in LLMs help us classify materials?",
      image: "/siyu1.jpg", // 替换为实际的图片路径
    }
    // 添加更多选定的论文
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Selected Papers</h2>
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1"
              >
                <FileText />
              </a>
              <div>
                <a
                  href={paper.link}
                  className="text-lg font-medium text-slate-900 hover:text-sky-500 transition-colors"
                >
                  {paper.title}
                </a>
                <p className="text-slate-600 mt-1">{paper.authors}</p>
                <p className="text-slate-500 text-sm mt-1">{paper.date}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-slate-500">{paper.conference}</span>
                  {paper.area && (
                    <div className="flex gap-2">
                      {paper.area.map((area, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${areaColors[area] || 'bg-gray-50 text-gray-600 ring-gray-500/10'}`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {paper.question && (
                  <p className="text-[#667eea] mt-2 text-base font-bold">
                    <span className="text-[#667eea]">{paper.question}</span>
                  </p>
                )}
                <p className="text-slate-600 mt-2 text-sm">{paper.abstract}</p>
                {paper.image && (
                  <Image
                    src={paper.image}
                    alt={`Illustration for ${paper.title}`}
                    width={500} // Set the width
                    height={300} // Set the heigh
                    className="mt-4 w-3/5 ml-0 rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPapers;