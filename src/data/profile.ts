import resumeJson from './resume.json' with { type: 'json' };

// resume.json is synced from the resume site (npm run sync) — edit content there, not here.
type Experience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  description: string;
  contractorCompany?: string;
};

type Resume = {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    address: { city: string; country: string };
  };
  experience: Experience[];
};

const resume = resumeJson as Resume;

const year = (date: string | null) => (date ? date.slice(0, 4) : 'now');

const span = (from: string, to: string | null) => {
  const [a, b] = [year(from), year(to)];
  return a === b ? a : `${a}–${b}`;
};

const sentences = (text: string, count: number) =>
  text.split(/(?<=\.)\s+/).slice(0, count).join(' ');

// Contractor gigs collapse into one line per agency (Globant — Disney, Deloitte…).
export function experienceLines(list: readonly Experience[]): string[] {
  const direct: string[] = [];
  const agencies = new Map<string, Experience[]>();

  for (const e of list) {
    if (e.contractorCompany) {
      agencies.set(e.contractorCompany, [...(agencies.get(e.contractorCompany) ?? []), e]);
    } else {
      direct.push(`${e.company} — ${e.title} (${span(e.startDate, e.endDate)}), ${sentences(e.description, 1)}`);
    }
  }

  const grouped = [...agencies].map(([agency, gigs]) => {
    const clients = gigs.map((g) => g.company).join(', ');
    return `${agency} — ${clients} (${span(gigs.at(-1)!.startDate, gigs[0]!.endDate)})`;
  });

  return [...direct, ...grouped];
}

export const profile = {
  name: resume.personal.name,
  title: resume.personal.title,
  location: `${resume.personal.address.city}, ${resume.personal.address.country}`,
  tagline: resume.personal.tagline,
  bio: sentences(resume.personal.bio, 2),
  experience: experienceLines(resume.experience),
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
