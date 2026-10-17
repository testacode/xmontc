import { describe, expect, it } from 'vitest';
import { featuredProjects, orderProjects, projects, type Project } from './projects.js';
import resume from './resume.json' with { type: 'json' };

const p = (id: string): Project => ({ id, name: id.toUpperCase(), description: '.', technologies: [], status: 'live' });

describe('orderProjects', () => {
  it('follows the curated order', () => {
    const result = orderProjects([p('b'), p('a'), p('c')], ['a', 'b', 'c'], []);
    expect(result.map((x) => x.id)).toEqual(['a', 'b', 'c']);
  });

  it('puts unknown projects last, keeping source order', () => {
    const result = orderProjects([p('x'), p('b'), p('y'), p('a')], ['a', 'b'], []);
    expect(result.map((x) => x.id)).toEqual(['a', 'b', 'x', 'y']);
  });

  it('ignores ordered ids that do not exist', () => {
    const result = orderProjects([p('a')], ['ghost', 'a'], []);
    expect(result.map((x) => x.id)).toEqual(['a']);
  });

  it('marks only the featured ids', () => {
    const result = orderProjects([p('a'), p('b')], ['a', 'b'], ['b']);
    expect(result.map((x) => Boolean(x.featured))).toEqual([false, true]);
  });
});

describe('projects', () => {
  it('takes name and url from resume.json', () => {
    for (const source of resume.projects) {
      const found = projects.find((x) => x.id === source.id);
      expect(found?.name).toBe(source.name);
      expect(found?.url).toBe((source as { url?: string }).url);
    }
  });

  it('features the five curated projects, first in order', () => {
    expect(featuredProjects.map((x) => x.id)).toEqual([
      'blockout',
      'favicon-generator',
      'meli-trends',
      'eyesaver',
      'header-editor-pro-free',
    ]);
    expect(projects[0]?.id).toBe('blockout');
  });
});
