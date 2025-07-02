# Project Overview

## Purpose
JoeKarow.dev is a personal portfolio website showcasing Joe Karow's work as a Full Stack Software Engineer based in Washington, DC. The site features sections for experience, featured work/projects, and personal information.

## Tech Stack
- **Framework**: Astro 5.10.2 (static site generator with component-based architecture)
- **Styling**: Tailwind CSS 4.1.11 with custom configuration
- **Runtime**: Bun 1.2.10 (JavaScript runtime and package manager)
- **Language**: TypeScript with strict configuration
- **Deployment**: Vercel with @astrojs/vercel adapter
- **Analytics**: Vercel Analytics and Speed Insights

## Core Architecture
- **Site Configuration**: Centralized in `src/config/index.ts` with SITE_CONFIG and SITE_CONTENT
- **Type Definitions**: Well-structured TypeScript interfaces in `src/types/index.ts`
- **Component Structure**: Astro components for Hero, About, Experience, Projects, Header, Footer
- **Layout System**: Single Layout.astro with global styles
- **Path Aliases**: Configured for clean imports (@components, @layouts, @icons, @types, @config)

## Key Features
- Static site generation for performance
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Modern tooling with Bun runtime
- Automated deployments via Vercel