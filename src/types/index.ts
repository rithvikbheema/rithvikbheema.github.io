export type PortfolioMode = 'data-ai' | 'core-eng';

export type SkillProficiencyLevel = 'Practical Application' | 'Academic Knowledge' | 'Active Exploration';

export interface SkillItem {
  name: string;
  level: SkillProficiencyLevel;
  iconName?: string;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  categoryMode: 'data-ai' | 'core-eng' | 'both';
  featuredIn: 'data-ai' | 'core-eng' | 'both';
  isFlagship?: boolean;
  tagline: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  keyHighlights: string[];
  systemHighlights?: { title: string; detail: string }[];
  githubUrl?: string;
  demoUrl?: string;
  statusBadge: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationItem {
  institution: string;
  shortInstitution: string;
  degree: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
  highlights: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  highlightAuthor: string;
  venue: string;
  details: string;
  published: string;
  type: string;
  doi: string;
  url: string;
  pdfUrl?: string;
  summary: string;
  keywords: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  field: string;
  description: string;
  verifiedStatus: string;
}
