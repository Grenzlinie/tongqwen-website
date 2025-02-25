import React from 'react';
import { FileText } from 'lucide-react';
import Image from 'next/image';

const SelectedPapers = () => {
  // 定义领域到颜色的映射
  const areaColors: { [key: string]: string } = {
    'AI4S': 'bg-red-50 text-red-700 ring-red-600/10',
    'Materials Laws': 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    'Materials Properties': 'bg-green-50 text-green-800 ring-green-600/20',
    "Atomic Models": "bg-purple-50 text-purple-700 ring-purple-700/10",
    'Other Area': 'bg-blue-50 text-blue-700 ring-blue-700/10',
    // 添加更多领域和对应的颜色类
  };

  const papers = [
    {
      title: "Active Learning for Conditional Inverse Design with Crystal Generation and Foundation Atomic Models",
      authors: "Zhuoyuan Li, Siyu Liu, Beilin Ye, David J. Srolovitz, Tongqi Wen",
      conference: "arXiv",
      link: "https://arxiv.org/abs/2502.16984",
      area: ["AI4S", "Materials Inverse Design", "Atomic Models"],
      date: "February 24, 2025",
      abstract: "Artificial intelligence (AI) is transforming materials science, enabling both theoretical advancements and accelerated materials discovery. Recent progress in crystal generation models, which design crystal structures for targeted properties, and foundation atomic models (FAMs), which capture interatomic interactions across the periodic table, has significantly improved inverse materials design. However, an efficient integration of these two approaches remains an open challenge. Here, we present an active learning framework that combines crystal generation models and foundation atomic models to enhance the accuracy and efficiency of inverse design. As a case study, we employ Con-CDVAE to generate candidate crystal structures and MACE-MP-0 FAM as one of the high-throughput screeners for bulk modulus evaluation. Through iterative active learning, we demonstrate that Con-CDVAE progressively improves its accuracy in generating crystals with target properties, highlighting the effectiveness of a property-driven fine-tuning process. Our framework is general to accommodate different crystal generation and foundation atomic models, and establishes a scalable approach for AI-driven materials discovery. By bridging generative modeling with atomic-scale simulations, this work paves the way for more accurate and efficient inverse materials design.",
      question: "\u269B\uFE0F Can AI automatically help us discover new materials with given properties?",
      image: "/zhuoyuan1.png", // 替换为实际的图片路径
    },
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
      title: "Large Language Models for Material Property Predictions: elastic constant tensor prediction and materials design",
      authors: "Siyu Liu, Tongqi Wen, Beilin Ye, Zhuoyuan Li, David J. Srolovitz",
      conference: "arXiv",
      link: "https://arxiv.org/pdf/2411.12280",
      area: ["AI4S", "Materials Properties"],
      date: "November 19, 2024",
      abstract: "Efficient and accurate prediction of material properties is critical for advancing materials design and applications. The rapid-evolution of large language models (LLMs) presents a new opportunity for material property predictions, complementing experimental measurements and multi-scale computational methods. We focus on predicting the elastic constant tensor, as a case study, and develop domain-specific LLMs for predicting elastic constants and for materials discovery. The proposed ElaTBot LLM enables simultaneous prediction of elastic constant tensors, bulk modulus at finite temperatures, and the generation of new materials with targeted properties. Moreover, the capabilities of ElaTBot are further enhanced by integrating with general LLMs (GPT-4o) and Retrieval-Augmented Generation (RAG) for prediction. A specialized variant, ElaTBot-DFT, designed for 0 K elastic constant tensor prediction, reduces the prediction errors by 33.1% compared with domain-specific, material science LLMs (Darwin) trained on the same dataset. This natural language-based approach lowers the barriers to computational materials science and highlights the broader potential of LLMs for material property predictions and inverse design.",
      question: "🧀 Can the materials knowledge stored in LLMs help us predict material properties?",
      image: "/siyu1.png", // 替换为实际的图片路径
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