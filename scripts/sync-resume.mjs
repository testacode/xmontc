// Pulls resume.json (single source: the resume site) into src/data/resume.json.
// Usage: node scripts/sync-resume.mjs [url-or-path]  (default: RESUME_JSON_URL or carlosmonti.com)
import { readFile, writeFile } from 'node:fs/promises';

const source =
  process.argv[2] ?? process.env.RESUME_JSON_URL ?? 'https://carlosmonti.com/resume.json';

const raw = /^https?:\/\//.test(source)
  ? await fetch(source).then((res) => {
      if (!res.ok) throw new Error(`${source} → HTTP ${res.status}`);
      return res.text();
    })
  : await readFile(source, 'utf8');

const data = JSON.parse(raw);
if (!data.personal?.name || !Array.isArray(data.experience)) {
  throw new Error(`${source} does not look like resume.json`);
}

await writeFile(new URL('../src/data/resume.json', import.meta.url), `${JSON.stringify(data, null, 2)}\n`);
console.log(`✓ src/data/resume.json ← ${source}`);
