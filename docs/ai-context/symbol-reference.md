# Symbol Reference Guide

*Generated from semantic code analysis - update as codebase evolves*

This guide provides symbol-level understanding of the codebase, enabling precise code navigation and modification.

## Core Domain Objects

### Configuration Constants

#### SITE_CONFIG `src/config/index.ts:1-32`
**Type**: `SiteConfig`  
**Purpose**: Central site configuration object containing all metadata, navigation, and social links

Key Properties:
- `title`: Main site title for SEO and branding
- `description`: Site description for meta tags
- `navLinks`: Array of navigation items with text and href
- `socialLinks`: Array of social media links with icons
- `canonicalURL`: Primary site URL for SEO

#### SITE_CONTENT `src/config/index.ts`
**Type**: `SiteContent`  
**Purpose**: Dynamic content structure for sections that may change

## Type Definitions Hub

### Primary Interfaces `src/types/index.ts`

#### SiteConfig `src/types/index.ts:0-8`
**Kind**: Interface  
**Extends**: HeaderProps  
**Purpose**: Root configuration interface

```typescript
interface SiteConfig extends HeaderProps {
    title: string
    description: string
    lang: string
    author: string
    socialLinks: SocialLinksProps[]
    socialImage: string
    canonicalURL?: string
}
```

#### Component Props Interfaces

| Interface | Purpose | Key Properties |
|-----------|---------|----------------|
| **HeaderProps** | Navigation header configuration | `navLinks`, `siteLogo` |
| **HeroProps** | Landing section content | Name, tagline, introduction |
| **AboutProps** | Personal information structure | Bio, skills, interests |
| **ExperienceProps** | Professional experience data | Jobs, roles, achievements |
| **ProjectProps** | Portfolio project structure | Title, description, tech stack |
| **SocialLinksProps** | Social media links | `text`, `href`, `icon` |

## Component System

### Layout Components

#### Layout.astro `src/layouts/Layout.astro`
**Purpose**: Root layout wrapper providing SEO, fonts, analytics, and global structure  
**Dependencies**: 
- `@config` (SITE_CONFIG)
- `@vercel/analytics` 
- `@vercel/speed-insights`
- Global CSS

### Section Components `src/components/`

#### Header.astro `src/components/Header.astro`
**Props**: `HeaderProps`  
**Purpose**: Site navigation with logo and social links  
**Features**: Responsive navigation, social media integration

#### Hero.astro `src/components/Hero.astro` 
**Props**: `HeroProps`  
**Purpose**: Landing section with name, tagline, and introduction  
**Features**: Primary call-to-action, hero imagery

#### Experience.astro `src/components/Experience.astro`
**Props**: `ExperienceProps`  
**Purpose**: Professional experience timeline  
**Features**: Job history, role descriptions, achievements

#### Projects.astro `src/components/Projects.astro`
**Props**: `ProjectProps`  
**Purpose**: Featured work showcase  
**Features**: Project cards, technology stacks, links

#### About.astro `src/components/About.astro`
**Props**: `AboutProps`  
**Purpose**: Personal information and skills  
**Features**: Biography, skill lists, interests

#### Footer.astro `src/components/Footer.astro`
**Purpose**: Site footer with additional links and information

#### Section.astro `src/components/Section.astro`
**Purpose**: Reusable section wrapper component  
**Features**: Consistent spacing, semantic HTML structure

### Utility Components

#### Menu.astro `src/icons/Menu.astro`
**Purpose**: Mobile menu icon for responsive navigation

## Entry Points

### Primary Route
#### index.astro `src/pages/index.astro`
**Type**: Astro page component  
**Purpose**: Main homepage orchestrating all components  
**Dependencies**: All section components, Layout.astro, configuration

**Component Flow**:
```astro
Layout
├── Header
├── Hero  
├── Experience
├── Projects
├── About
└── Footer
```

## Service Layer

### Configuration Services
- **Location**: `src/config/index.ts`
- **Exports**: `SITE_CONFIG`, `SITE_CONTENT`
- **Purpose**: Centralized configuration management

### Type Services
- **Location**: `src/types/index.ts`
- **Exports**: All TypeScript interfaces
- **Purpose**: Type safety across component system

### Style Services
- **Location**: `src/styles/global.css`
- **Purpose**: Global CSS with Tailwind directives
- **Content**: Base styles, component styles, utility classes

## Integration Points

### External Dependencies

#### Analytics Integration
- **@vercel/analytics**: Usage tracking in Layout.astro
- **@vercel/speed-insights**: Performance monitoring in Layout.astro

#### Font System
- **@fontsource-variable/gabarito**: Variable font for headings
- **@fontsource/be-vietnam-pro**: Body text font

#### Icon System
- **astro-iconify**: Icon components for social links and UI elements

### Build Integration Points

#### TypeScript Configuration
- **Path Aliases**: `@components/*`, `@layouts/*`, `@icons/*`, `@types`, `@config`
- **Strict Mode**: Enabled for type safety
- **Astro Integration**: Custom `.astro` file support

#### Styling Integration
- **Tailwind CSS**: Vite plugin integration
- **Prettier**: Tailwind class sorting and formatting

## Symbol Discovery Commands

For Claude Code users with Serena MCP:

```bash
# Find specific symbols
find_symbol "SITE_CONFIG" --relative-path src/config/index.ts --include-body

# Get overview of component props
get_symbols_overview src/types/

# Find references to configuration
find_referencing_symbols "SITE_CONFIG" --relative-path src/config/index.ts

# Search for specific patterns
search_for_pattern "interface.*Props" --include-glob "*.ts"
```

## Maintenance Notes

- **Interface Changes**: Update both `src/types/index.ts` and consuming components
- **Configuration Updates**: Modify `SITE_CONFIG` in `src/config/index.ts`
- **New Components**: Add props interface to `src/types/index.ts`
- **Symbol Verification**: Use `find_symbol` to verify documented symbols exist

This reference enables precise navigation and modification of the codebase through semantic understanding of its structure and relationships.