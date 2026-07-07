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

export const projects: readonly Project[] = [
  {
    id: 'blockout',
    name: 'Blockout',
    description:
      '3D Tetris clone built with Three.js. 19 levels, visual and sound effects, high score tracking.',
    url: 'https://blockout.xmontc.xyz/',
    technologies: ['Three.js', 'TypeScript'],
    status: 'live',
    featured: true,
  },
  {
    id: 'favicon-generator',
    name: 'Favicon Generator',
    description:
      'Web app to create favicons from images or text. Crop, zoom, background removal, multi-format export.',
    url: 'https://favicon.xmontc.xyz/',
    technologies: ['Next.js', 'Mantine', 'TypeScript'],
    status: 'live',
    featured: true,
  },
  {
    id: 'meli-trends',
    name: 'MeLi Trends',
    description:
      'Real-time dashboard showing top 50 trending products on MercadoLibre across 7 LATAM countries.',
    url: 'https://meli-trends.xmontc.xyz',
    technologies: ['Next.js', 'Mantine', 'TypeScript'],
    status: 'live',
    featured: true,
  },
  {
    id: 'eyesaver',
    name: 'EyeSaver',
    description:
      'Browser screensaver with SomaFM ambient music and MilkDrop-inspired WebGL visualizations.',
    url: 'https://eyesaver.vercel.app',
    technologies: ['Next.js', 'Three.js', 'Mantine'],
    status: 'live',
    featured: true,
  },
  {
    id: 'header-editor-pro-free',
    name: 'Header Editor Pro Free',
    description: 'Chrome/Firefox extension to modify HTTP headers, for developers and QA engineers.',
    url: 'https://testacode.github.io/header-editor-pro-free/',
    githubUrl: 'https://github.com/testacode/header-editor-pro-free',
    technologies: ['JavaScript', 'Chrome API'],
    status: 'live',
    featured: true,
  },
  {
    id: 'sound-buttons',
    name: 'Sound Buttons',
    description: 'Web soundboard with customizable sound buttons.',
    url: 'https://sound-buttons.xmontc.xyz/',
    technologies: ['Next.js', 'TypeScript'],
    status: 'live',
  },
  {
    id: 'gastos',
    name: 'Gastos',
    description:
      'Personal expense tracker with multi-currency support, investment monitoring, and financial analytics.',
    url: 'https://gastos.xmontc.xyz',
    technologies: ['Next.js', 'Tailwind CSS', 'Three.js'],
    status: 'live',
  },
  {
    id: 'llm-toolkit',
    name: 'LLM Toolkit',
    description: 'Claude Code plugin with skills, commands, and agents to boost developer productivity.',
    technologies: ['Claude Code', 'Markdown'],
    status: 'coming-soon',
  },
  {
    id: 'cocos-capital-client',
    name: 'Cocos Capital Client',
    description: 'Unofficial Python client for the Cocos Capital API.',
    technologies: ['Python'],
    status: 'coming-soon',
  },
];

// Curated list shown on the Home screen.
export const featuredProjects = projects.filter((p) => p.featured);
