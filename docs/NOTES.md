# Notas técnicas

## Historial de nombre

`monti` ya existe en npm (un scaffolder ajeno). Se publicó primero como `cmonti`, pero npm lo rechazó al publicar por similitud con `cfonts` (protección anti-typosquatting) → se renombró a `xmontc`. El logo ASCII del TUI sigue diciendo MONTI.

## Publicar en npm

- La cuenta usa 2FA, o un token granular con bypass de 2FA (guardado en el gestor de secretos, nunca en el repo ni en el `~/.npmrc` global). Los tokens granulares vencen: revisar la fecha antes de publicar.
- Patrón usado: armar un `.npmrc` temporal fuera del repo con el token, `npm publish --userconfig <ese archivo>` y borrarlo después.
- `prepublishOnly` corre `npm run check` (typecheck + tests + build).
- **npm expone el email del maintainer en el packument.** Si no querés que se vea el personal, usá un alias dedicado como email de la cuenta. Cada publish congela el email vigente: cambiar el email después no purga las versiones ya publicadas, y despublicar una versión quema ese número (la `0.1.0` se despublicó por esto; la versión viva arranca en `0.1.1`).

## Stack y datos

Ink 7 + React 19 + TypeScript (ESM), tsup, vitest + ink-testing-library, Node ≥22. Los datos del perfil salen de `src/data/resume.json`, que se sincroniza desde `https://carlosmonti.com/resume.json` (repo `resume` = fuente única) con `npm run sync`; `prepublishOnly` lo corre antes de publicar. `profile.ts` solo deriva (stack y philosophy son locales). `projects.ts` también deriva de `resume.json` (`resume.projects`); solo el orden y el set de featured son locales.

## Gotchas

- Ink retiene un ESC solitario 20 ms (`pendingInputFlushDelayMilliseconds`): en los tests, esperar ≥30 ms después de enviar ESC.
- El tool de Bash de Claude Code rechaza caracteres de control literales: usar la secuencia de escape en vez del carácter literal.
- `npx <pkg>` bajo un PTY de `script` se cuelga si el input llega antes de que Ink enganche stdin: `sleep 1` antes del `printf`.

## Roadmap pendiente (v1.1)

GitHub API, stats, preview del README.
