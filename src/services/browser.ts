import open from 'open';

export function openUrl(url: string): void {
  void open(url).catch(() => {
    // Opening the browser is best-effort; a failure shouldn't crash the TUI.
  });
}
