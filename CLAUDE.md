# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — Start dev server
- `bun run build` — Type-check (`astro check`) then build
- `bun preview` — Preview production build
- `bun run format` — Format all files with Prettier
- `bun run lint` — Check formatting and run type-checking
- `bunx prettier --write <file>` — Format a single file

No test suite is configured.

## Architecture

Single-page Astro 5 portfolio site deployed to Vercel. One route (`/`), no content collections, no client-side framework.

### Data flow

All site content lives in `src/config/index.ts` as typed TypeScript objects (`SITE_CONFIG` for metadata/nav, `SITE_CONTENT` for page sections). `src/pages/index.astro` imports these and spreads them as props into section components. To update any content, edit `src/config/index.ts`.

### Components

All components are pure `.astro` files in `src/components/`. Each declares typed props (interfaces from `src/types/index.ts`) and uses Tailwind classes directly. `Section.astro` is a reusable wrapper used by every content section. There is no React, Vue, or other UI framework.

### Layout

Single layout at `src/layouts/Layout.astro` — handles the HTML shell, meta tags, fonts, header, footer, and Vercel analytics. It reads config directly from `@config` (not via props).

## Path Aliases

Always use these (defined in `tsconfig.json`):

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@icons/*` → `src/icons/*`
- `@types` → `src/types/index.ts`
- `@config` → `src/config/index.ts`

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS). All design tokens (colors, fonts, animations) are defined in `src/styles/global.css` using the `@theme` block. No separate Tailwind config file.

Key tokens: `--color-primary` (blue), `--color-black` (dark bg), `--color-white` (off-white text), `--color-neutral` (slate). Fonts: Be Vietnam Pro (sans), Gabarito Variable (serif/headings).

## Formatting

Prettier with tabs, single quotes, no semicolons. Plugins: `@prettier/plugin-oxc`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`. Tailwind class sorting uses `src/styles/global.css` as the stylesheet reference.

## Tooling

- **Package manager**: Bun (pinned in `package.json` and `mise.toml`)
- **Runtime versions**: Managed by mise (`bun 1.3.9`, `node 22.22.0`)
- **Dependency pinning**: `bunfig.toml` sets `exact = true` — no version ranges
- **Dependency updates**: Renovate (config extends `github>JoeKarow/renovate-config`)
