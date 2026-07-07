import { describe, expect, it, vi } from 'vitest';
import { render } from 'ink-testing-library';
import { App } from './App.js';
import open from 'open';

vi.mock('open', () => ({ default: vi.fn().mockResolvedValue(undefined) }));

const tick = (ms = 10) => new Promise((resolve) => setTimeout(resolve, ms));
const ESC = '';
const DOWN = '[B';
const ENTER = '\r';

describe('App', () => {
  it('renders the home screen', () => {
    const { lastFrame } = render(<App />);
    const frame = lastFrame();

    expect(frame).toContain('Carlos Monti');
    expect(frame).toContain('Recent Projects');
    expect(frame).toContain('▶ Blockout');
    expect(frame).toContain('quit');
    expect(frame).toContain('cmonti v');
  });

  it('moves the selection with arrow keys', async () => {
    const { lastFrame, stdin } = render(<App />);

    stdin.write(DOWN);
    await tick();

    expect(lastFrame()).toContain('▶ Favicon Generator');
  });

  it('navigates to About and back with escape', async () => {
    const { lastFrame, stdin } = render(<App />);

    for (let i = 0; i < 5; i++) {
      stdin.write(DOWN);
      await tick();
    }
    stdin.write(ENTER);
    await tick();
    expect(lastFrame()).toContain('Philosophy');

    stdin.write(ESC);
    // Ink holds a solitary ESC for 20ms waiting for a possible escape
    // sequence continuation before flushing it as a lone escape key.
    await tick(30);
    expect(lastFrame()).toContain('Recent Projects');
  });

  it('opens a featured project url directly on enter', async () => {
    const { lastFrame, stdin } = render(<App />);

    stdin.write(ENTER);
    await tick();

    expect(open).toHaveBeenCalledWith('https://blockout.xmontc.xyz/');
    expect(lastFrame()).toContain('Recent Projects');
  });

  it('navigates to the Projects screen from the sections list', async () => {
    const { lastFrame, stdin } = render(<App />);

    for (let i = 0; i < 6; i++) {
      stdin.write(DOWN);
      await tick();
    }
    stdin.write(ENTER);
    await tick();

    expect(lastFrame()).toContain('Gastos');
  });
});
