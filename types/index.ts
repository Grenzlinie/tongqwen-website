// types/index.ts

export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations: number;
  links: {
    pdf?: string;
    code?: string;
    project?: string;
  };
}
  
export interface Collaborator {
  name: string;
  title: string;
  institution: string;
  image: string;
  website: string;
  research: string;
}
  
export interface NewsItem {
  date: string;
  content: string;
  tags?: string[];
}