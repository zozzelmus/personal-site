export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  skills: string[];
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "web-link-shortener",
    title: "Web Link Shortener",
    year: 2025,
    description: "Basic Web APIs using REST APIs to shorten links for the requester.",
    skills: ["Entity Framework Core", "C#", "ASP.NET", "PostgreSQL"],
    githubUrl: "https://github.com/zozzelmus/WebLinkShortener",
    featured: true,
  },
  {
    id: "calculator-compiler",
    title: "Calculator Compiler",
    year: 2025,
    description: "A basic compiler written in C#. Functions as a calculator but shares concepts with tokenizing string to actions.",
    skills: ["C#", "Lexers", "Compilers"],
    githubUrl: "https://github.com/zozzelmus/LiteralCompiler",
    featured: true,
  },
  {
    id: "longnight",
    title: "Longnight",
    year: 2024,
    description: "Half finished project using Unity. Longnight was my biggest video game project which was a Silent Hill style game.",
    skills: ["C#", "Unity", "Data Structures"],
    githubUrl: "https://github.com/zozzelmus/longnight",
    featured: false,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    year: 2025,
    description: "Contains several smaller template and POC style code things I work on for demo purposes for work.",
    skills: ["C#", "WebApis", "Clean Architecture", "Mass Transit"],
    githubUrl: "https://github.com/zozzelmus/Portfolio",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllSkills(): string[] {
  const skillSet = new Set<string>();
  projects.forEach((project) => {
    project.skills.forEach((skill) => skillSet.add(skill));
  });
  return Array.from(skillSet).sort();
}

export function getSkillsWithCount(): { skill: string; count: number }[] {
  const skillMap = new Map<string, number>();
  projects.forEach((project) => {
    project.skills.forEach((skill) => {
      skillMap.set(skill, (skillMap.get(skill) || 0) + 1);
    });
  });
  return Array.from(skillMap.entries())
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count || a.skill.localeCompare(b.skill));
}
