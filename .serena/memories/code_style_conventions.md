# Code Style and Conventions

## Prettier Configuration
- **Tabs**: Use tabs for indentation (not spaces)
- **Tab Width**: 2 spaces per tab
- **Quotes**: Single quotes for JavaScript/TypeScript
- **Semicolons**: No semicolons
- **JSX**: Single quotes in JSX
- **Quote Props**: Only quote object properties when needed

## File Naming
- **Components**: PascalCase (e.g., `Hero.astro`, `Section.astro`)
- **Types**: PascalCase interfaces (e.g., `SiteConfig`, `HeroProps`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `SITE_CONFIG`)
- **Files**: kebab-case or camelCase depending on context

## TypeScript Standards
- **Strict Mode**: Enabled with strict TypeScript configuration
- **Interfaces**: Used for all component props and data structures
- **Type Safety**: All props and data are properly typed
- **Path Aliases**: Used consistently for clean imports

## Component Structure
- **Astro Components**: Use `.astro` extension
- **TypeScript**: Frontmatter script with proper typing
- **Props**: Define interfaces for all component props
- **Imports**: Use path aliases (@components, @types, etc.)

## Formatting Plugins
- `@prettier/plugin-oxc`: Enhanced JavaScript/TypeScript formatting
- `prettier-plugin-astro`: Astro component formatting
- `prettier-plugin-tailwindcss`: Tailwind class sorting

## Code Organization
- **Single Responsibility**: Each component has a clear purpose
- **Configuration Centralization**: Site config in dedicated files
- **Type Definitions**: Centralized in `src/types/index.ts`
- **Clean Imports**: Utilize path aliases for better readability