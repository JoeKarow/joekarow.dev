---
name: new-component
description: Scaffold a new Astro component following project conventions
disable-model-invocation: true
---

# New Astro Component

Create a new `.astro` component in `src/components/` following project conventions.

## Usage

`/new-component <ComponentName>`

## Steps

1. **Define the interface** in `src/types/index.ts`:
   - Add a `<ComponentName>Props` interface with the required props
   - Export it from the file

2. **Create the component** at `src/components/<ComponentName>.astro`:
   - Import the props type: `import type { <ComponentName>Props } from '@types'`
   - Destructure props: `const { prop1, prop2 } = Astro.props as <ComponentName>Props`
   - Use Tailwind classes directly (no CSS modules or styled-components)
   - If this is a page section, wrap content with the `Section.astro` component

3. **Wire up data** in `src/config/index.ts`:
   - Add the content data matching the new interface
   - Import the new type if needed

4. **Add to the page** in `src/pages/index.astro`:
   - Import the component: `import <ComponentName> from '@components/<ComponentName>.astro'`
   - Pass props from `SITE_CONTENT`

5. **Validate**: Run `bunx astro check` to confirm no type errors.

## Component Template

```astro
---
import type { <ComponentName>Props } from '@types'
import Section from '@components/Section.astro'

const { prop1, prop2 } = Astro.props as <ComponentName>Props
---

<Section title="Section Title" id="section-id">
	<!-- Component markup with Tailwind classes -->
</Section>
```

## Conventions

- Use path aliases: `@components/*`, `@types`, `@config`, `@icons/*`, `@layouts/*`
- Design tokens are in `src/styles/global.css` (`--color-primary`, `--color-black`, `--color-white`, `--color-neutral`)
- Fonts: Be Vietnam Pro (sans), Gabarito Variable (serif/headings)
- No client-side JavaScript frameworks — pure `.astro` components only
- Format with Prettier after creation: `bunx prettier --write <file>`
