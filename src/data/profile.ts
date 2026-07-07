export const profile = {
  name: 'Carlos Monti',
  title: 'Senior Frontend Engineer',
  location: 'Buenos Aires, Argentina',
  tagline: 'Building polished web experiences with a passion for clean code and continuous learning',
  bio: 'Frontend developer with 10+ years of experience crafting web applications. Currently focused on TypeScript, React, and Next.js, building scalable solutions for large-scale products.',
  experience: [
    'Despegar.com — Senior Software Engineer (2023–now), AI chatbot & post-booking experiences',
    'Blockchain.com — Senior Frontend (2022), non-custodial crypto wallet',
    'Elementum — Senior Frontend (2017–2022), React app from scratch, cross-team reviews',
    'Globant — Disney, Deloitte, Thomas Cook (2011–2017)',
  ],
  stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Three.js'],
  philosophy: [
    'Content first — design serves the content, never competes with it.',
    'Quiet confidence — professional polish without excess.',
    'Small, verifiable changes over big rewrites.',
    'DX matters: good tools make good software.',
  ],
} as const;

export type LinkItem = { name: string; url: string };

export const links: readonly LinkItem[] = [
  { name: 'GitHub', url: 'https://github.com/testacode' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/carlosmonti/' },
  { name: 'Website', url: 'https://carlosmonti.com' },
  { name: 'Resume', url: 'https://carlosmonti.com/carlos-monti-cv.pdf' },
] as const;

export const quickLinks = {
  github: 'https://github.com/testacode',
  website: 'https://carlosmonti.com',
} as const;
