# Code Structure and Organization

## Directory Structure
```
src/
├── components/        # Astro components
│   ├── About.astro
│   ├── Experience.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Projects.astro
│   └── Section.astro
├── config/           # Site configuration
│   └── index.ts      # SITE_CONFIG and SITE_CONTENT constants
├── icons/            # Icon components
│   └── Menu.astro
├── layouts/          # Layout components
│   └── Layout.astro  # Main layout wrapper
├── pages/            # Astro pages (routes)
│   └── index.astro   # Homepage
├── styles/           # Global styles
│   └── global.css    # Tailwind directives and custom styles
├── types/            # TypeScript definitions
│   └── index.ts      # All interface definitions
└── env.d.ts          # Environment type definitions
```

## Key Components
- **Layout.astro**: Main wrapper with SEO meta tags, fonts, and analytics
- **Hero.astro**: Landing section with name and introduction
- **Experience.astro**: Professional experience timeline
- **Projects.astro**: Featured work showcase
- **About.astro**: Personal information and skills
- **Header.astro**: Navigation with social links
- **Footer.astro**: Site footer

## Type System
- **SiteConfig**: Main site configuration interface
- **SiteContent**: Content data structure
- **Component Props**: Typed props for each component (AboutProps, HeroProps, etc.)

## Path Aliases
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@icons/*` → `src/icons/*`
- `@types` → `src/types/index.ts`
- `@config` → `src/config/index.ts`