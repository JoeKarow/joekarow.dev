# CLAUDE.md

Single-page Astro portfolio (`/` only) deployed to Vercel. Pure `.astro` components styled with Tailwind; no UI framework, no content collections, no test suite. `bun run lint` (Prettier check + `astro check`) is the verification step.

## Where things live

- **Content**: all site copy is in `src/config/index.ts` (`SITE_CONFIG` for metadata/nav, `SITE_CONTENT` for page sections). Edit content there; `src/pages/index.astro` spreads it into section components as props.
- **Components**: `src/components/*.astro`, props typed by interfaces in `src/types/index.ts`. Wrap each content section in `Section.astro`.
- **Layout**: `src/layouts/Layout.astro` owns the HTML shell, meta, fonts, header, footer and Vercel analytics, importing `SITE_CONFIG` from `@config` directly.
- **Design tokens**: the `@theme` block in `src/styles/global.css` is the entire Tailwind v4 config (loaded via `@tailwindcss/vite`); add colors, fonts and animations there.

## Conventions

- Import through the `tsconfig.json` path aliases (`@components/*`, `@config`, …).
- Add dependencies at exact versions (`bunfig.toml` sets `exact = true`); Renovate owns upgrades.

## Agent skills

### Issue tracker

GitHub Issues via `gh`. Read `docs/agents/issue-tracker.md` before creating, reading, labelling or closing an issue.

### Triage labels

Read `docs/agents/triage-labels.md` before applying a triage label.

### Domain docs

Single-context. Read `docs/agents/domain.md` before exploring the codebase for a spec, design or refactor.
