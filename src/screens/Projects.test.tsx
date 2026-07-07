import { describe, expect, it, vi } from 'vitest';
import { render } from 'ink-testing-library';
import { Projects } from './Projects.js';
import { projects } from '../data/projects.js';
import open from 'open';

vi.mock('open', () => ({ default: vi.fn().mockResolvedValue(undefined) }));

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('Projects', () => {
  it('lists every project with a status indicator', () => {
    const { lastFrame } = render(<Projects />);
    const frame = lastFrame();

    for (const project of projects) {
      expect(frame).toContain(project.name);
    }
    expect(frame).toContain('●');
    expect(frame).toContain('○');
  });

  it('opens the selected project url on enter', async () => {
    const { stdin } = render(<Projects />);

    stdin.write('\r');
    await tick();

    expect(open).toHaveBeenCalledWith(projects[0]?.url);
  });

  it('shows a coming soon hint for projects without links', async () => {
    const comingSoonIndex = projects.findIndex((p) => !p.url && !p.githubUrl);
    const { lastFrame, stdin } = render(<Projects />);

    for (let i = 0; i < comingSoonIndex; i++) {
      stdin.write('[B');
      await tick();
    }

    expect(lastFrame()).toContain('coming soon');
  });
});
