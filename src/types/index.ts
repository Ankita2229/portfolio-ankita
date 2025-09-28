export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  featured: boolean;
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  gpa?: string;
  description?: string;
}

export interface ExpertiseArea {
  title: string;
  icon: string;
  description: string;
}