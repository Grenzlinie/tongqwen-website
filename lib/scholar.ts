// lib/scholar.ts

import { Paper } from '@/types';

export async function fetchGoogleScholar(): Promise<Paper[]> {
  // 这里实现Google Scholar数据获取逻辑
  // 可以使用第三方API或网页抓取
  return [];
}

export async function fetchPapersByYear(): Promise<Record<number, Paper[]>> {
  const papers = await fetchGoogleScholar();
  return papers.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<number, Paper[]>);
}