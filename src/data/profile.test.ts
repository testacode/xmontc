import { describe, expect, it } from 'vitest';
import { experienceLines, profile } from './profile.js';
import resume from './resume.json' with { type: 'json' };

describe('profile', () => {
  it('comes from the synced resume.json', () => {
    expect(profile.name).toBe(resume.personal.name);
    expect(profile.title).toBe(resume.personal.title);
    expect(resume.personal.bio.startsWith(profile.bio)).toBe(true);
  });

  it('formats direct roles with a year span and the first sentence', () => {
    const [line] = experienceLines([
      { company: 'Acme', title: 'Dev', startDate: '2020-01', endDate: null, description: 'Built X. Then Y.' },
    ]);
    expect(line).toBe('Acme — Dev (2020–now), Built X.');
  });

  it('collapses contractor gigs into one line per agency', () => {
    const lines = experienceLines([
      { company: 'B', title: 'Dev', startDate: '2016-02', endDate: '2017-07', description: '.', contractorCompany: 'Agency' },
      { company: 'A', title: 'Dev', startDate: '2011-05', endDate: '2015-12', description: '.', contractorCompany: 'Agency' },
    ]);
    expect(lines).toEqual(['Agency — B, A (2011–2017)']);
  });
});
