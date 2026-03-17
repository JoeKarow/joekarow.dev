# A11y Reviewer — Project Memory

## Color Tokens & Contrast Ratios

Computed from `src/styles/global.css` `@theme` block:

- `--color-primary` #2563eb on `--color-black` #0e141b: ~3.1:1 — FAILS AA for normal text, borderline PASS for large text (18px+ or 14px+ bold)
- `--color-primary` #2563eb on `--color-white` #e2e8f0: ~2.4:1 — FAILS AA
- `--color-white` #e2e8f0 on `--color-black` #0e141b: ~14.5:1 — PASSES AAA
- `--color-neutral` #94a3b8 on `--color-black` #0e141b: ~6.1:1 — PASSES AA

Primary blue as _body text_ fails contrast. Primary blue is used on headings (large/bold) in Hero specialty, Experience position h4, Projects h3 — those qualify as large text so they pass at 3:1. Watch for any normal-weight, smaller primary-colored text.

## Heading Hierarchy (full page)

h1 (Hero: name) → h2 (Section: About/Experience/Projects/Skills) → h3 (Experience: company, Projects: name, Skills: category) → h4 (Experience: position). No skips. Valid.

## Known Issues (first audit pass, 2026-02-18)

See detailed report. Key recurring patterns:

- External links missing `rel="noopener noreferrer"` and `target="_blank"` screen reader notice (Hero, Projects, Footer)
- `dark:` variant Tailwind classes used in Skills + Projects badge spans will NEVER activate — site has a fixed dark bg, not OS-driven dark mode. Those badges currently render with LIGHT background + dark text, which IS readable, but the intent was dark mode variants.
- No skip-to-content link in Layout.astro
- Menu button (`#menu-button`) has no `aria-label`; the SVG icon inside (`src/icons/Menu.astro`) has no `aria-hidden` or label
- Hero `<section id='#hero'>` — id contains a hash character (bug); should be `id='hero'`
- `list-none` on `<ul>` in Experience.astro strips list role in Safari/VoiceOver — add `role="list"`
- No `prefers-reduced-motion` guard on `slide-in` animation or `animation-timeline: scroll()` in Header

## Component Structure Notes

- `Section.astro` is a shared wrapper: renders `<section id={href}>` + `<h2>{text}</h2>` + `<slot />`. The `href` prop doubles as the section id AND anchor target.
- All external links (Hero social, Projects links, Footer social) use `target="_blank"` without `rel` or screen reader disclosure.
- `astro-iconify` `<Icon>` component: when given a `title` prop it renders an accessible title inside the SVG. Verify this actually works at runtime vs relying on it.
- Footer has no `<nav>` wrapping its social links list.

## Formatting Conventions

Prettier: tabs, single quotes, no semicolons. Use `bunx prettier --write <file>` after edits.
