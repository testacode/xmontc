import resumeJson from './resume.json' with { type: 'json' };

// Project data comes from resume.json (npm run sync); only order and featured are TUI-local.
export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: readonly string[];
  status: 'live' | 'coming-soon';
  url?: string;
  githubUrl?: string;
  featured?: boolean;
};

type Resume = { projects: Project[] };

const resume = resumeJson as Resume;

const order = [
  'blockout',
  'favicon-generator',
  'meli-trends',
  'eyesaver',
  'header-editor-pro-free',
  'sound-buttons',
  'gastos',
  'llm-toolkit',
  'cocos-capital-client',
];

const featured = ['blockout', 'favicon-generator', 'meli-trends', 'eyesaver', 'header-editor-pro-free'];

// Ids in `order` come first (in that order); the rest keep their source order at the end.
export function orderProjects(
  list: readonly Project[],
  ids: readonly string[],
  featuredIds: readonly string[],
): Project[] {
  const rank = (p: Project) => {
    const i = ids.indexOf(p.id);
    return i === -1 ? ids.length : i;
  };

  return list
    .map((p) => ({ ...p, featured: featuredIds.includes(p.id) || undefined }))
    .sort((a, b) => rank(a) - rank(b));
}

export const projects: readonly Project[] = orderProjects(resume.projects, order, featured);

// Curated list shown on the Home screen.
export const featuredProjects = projects.filter((p) => p.featured);
