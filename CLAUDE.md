# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start dev server**: `bun dev` or `npm run dev`
- **Build**: `bun run build` or `npm run build` (includes Astro type checking)
- **Preview**: `bun run preview` or `npm run preview`
- **Type check**: `astro check`

## Architecture Overview

This is a personal portfolio site built with **Astro** and **Tailwind CSS**, deployed on **Vercel**.

### Key Architecture Patterns

- **Static Site Generation**: Single-page portfolio with component-based architecture
- **Centralized Configuration**: All site content and configuration is managed in `src/config/index.ts`
- **TypeScript Path Aliases**: Configured in `tsconfig.json` for clean imports:
  - `@components/*` → `src/components/*`
  - `@layouts/*` → `src/layouts/*`
  - `@icons/*` → `src/icons/*`
  - `@types` → `src/types/index.ts`
  - `@config` → `src/config/index.ts`

### Content Management

The site uses a data-driven approach where all content is defined in `src/config/index.ts`:

- `SITE_CONFIG`: Meta information, navigation, social links
- `SITE_CONTENT`: Hero, experience, projects, and about sections

### Component Structure

- **Layout.astro**: Base layout with SEO meta tags, analytics integration
- **Section components**: Hero, Experience, Projects, About (each consumes data from config)
- **Header/Footer**: Navigation and social links

### Styling

- **Tailwind CSS**: Utility-first styling with custom configuration via Vite plugin
- **Fonts**: Be Vietnam Pro and Gabarito variable fonts via Fontsource
- **Dark theme**: Black background with careful contrast considerations

### Development Notes

- Uses Bun as package manager (see `packageManager` in package.json)
- Vercel adapter configured for deployment
- Analytics and speed insights integrated via Vercel
- All content changes should be made in `src/config/index.ts` rather than individual components
