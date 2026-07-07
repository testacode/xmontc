# cmonti

Interactive terminal portfolio for Carlos Monti, built with [Ink](https://github.com/vadimdemedes/ink) (React for CLIs).

```bash
npx cmonti
```

Navigate with the keyboard: `↑↓` move, `enter` open, `esc` back, `g` GitHub, `w` website, `q` quit.

## Development

```bash
npm install
npm run dev      # tsup watch build
npm start        # run the built CLI
npm test         # vitest
npm run check    # typecheck + tests + build
```

## Stack

- Node.js ≥22, TypeScript, ESM
- React 19 + Ink 7
- tsup (build), vitest + ink-testing-library (tests)

## License

MIT
