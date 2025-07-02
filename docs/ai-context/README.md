# AI Context Documentation

This directory contains comprehensive documentation designed to provide AI coding assistants with deep understanding of the JoeKarow.dev codebase.

## Repository Overview

**JoeKarow.dev** is a personal portfolio website built with modern web technologies, showcasing Joe Karow's work as a Full Stack Software Engineer. The site features a clean, responsive design with sections for professional experience, featured projects, and personal information.

### Core Architecture
- **Static Site Generation**: Built with Astro 5.x for optimal performance
- **Type-Safe Development**: Full TypeScript integration with strict configuration
- **Modern Styling**: Tailwind CSS 4.x with utility-first approach
- **Performance-First**: Vercel deployment with built-in analytics

### Technology Stack
- **Framework**: Astro 5.10.2 (component-based static site generator)
- **Language**: TypeScript 5.8.3 with strict mode
- **Styling**: Tailwind CSS 4.1.11 with Vite integration
- **Runtime**: Bun 1.2.10 (fast JavaScript runtime and package manager)
- **Deployment**: Vercel with @astrojs/vercel adapter
- **Analytics**: Vercel Analytics and Speed Insights

## Key Concepts

### Component Architecture
The site uses Astro's component system with clear separation of concerns:
- **Layout System**: Single main layout with global styles and SEO
- **Section Components**: Modular components for each page section
- **Type Safety**: All components have defined TypeScript interfaces
- **Path Aliases**: Clean imports using @components, @types, @config patterns

### Configuration-Driven Design
- **Centralized Config**: All site content and settings in `src/config/index.ts`
- **Type Definitions**: Comprehensive interfaces in `src/types/index.ts`
- **Environment Management**: mise.toml for consistent development environments

### Development Patterns
- **Static-First**: No server-side logic, all content pre-generated
- **Performance-Focused**: Minimal JavaScript, optimized loading
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **SEO Optimized**: Meta tags, structured data, proper semantics

## Semantic Code Structure

### Entry Points
- `src/pages/index.astro` - Main homepage route
- `src/layouts/Layout.astro` - Primary layout wrapper
- `src/config/index.ts` - Site configuration and content

### Core Domain Objects
- **SiteConfig**: Main configuration interface (title, description, links)
- **SiteContent**: Content data structure for dynamic sections
- **Component Props**: Typed interfaces for all components (HeroProps, AboutProps, etc.)

### Service Layer
- **Configuration**: Centralized in `src/config/` with exported constants
- **Types**: All TypeScript definitions in `src/types/index.ts`
- **Styles**: Global CSS with Tailwind directives in `src/styles/global.css`

### External Integrations
- **Vercel Analytics**: Integrated via @vercel/analytics
- **Speed Insights**: Performance monitoring via @vercel/speed-insights
- **Font Loading**: @fontsource packages for custom typography
- **Icons**: astro-iconify for social media and UI icons

## Getting Started

For setup instructions, see [@docs/ai-context/setup-guide.md](./setup-guide.md)

For architectural details, see [@docs/ai-context/architecture-overview.md](./architecture-overview.md)

For symbol-level code reference, see [@docs/ai-context/symbol-reference.md](./symbol-reference.md)

## Tool-Specific Setup

### Claude Code Users
See [CLAUDE.md](../../CLAUDE.md) - includes Serena MCP integration and session initialization
**Important**: Always start sessions with "Read the initial instructions"

### Gemini CLI Users
Use this documentation as your primary context source, starting with this README.

### Other AI Tools
Use this documentation as your primary context source, starting with this README.

## Development Guidelines

1. **Type Safety First**: All new components must have proper TypeScript interfaces
2. **Configuration-Driven**: Site content changes should update `src/config/index.ts`
3. **Component Isolation**: Each component should have a single, clear responsibility
4. **Performance Awareness**: Minimize JavaScript, optimize images, use static generation
5. **Code Quality**: Run `bun run build` before committing (includes type checking)

## Memory System Integration

For Claude Code users with Serena MCP, additional semantic analysis is available in `.serena/memories/`:
- `project_overview` - High-level project summary
- `tech_stack_details` - Detailed technology information
- `code_structure` - File organization and patterns
- `code_style_conventions` - Formatting and style rules
- `suggested_commands` - Essential development commands
- `task_completion_checklist` - Quality assurance steps

These memories complement this documentation with deeper semantic insights from automated code analysis.