# A11y Reviewer — Project Memory

## Color Tokens & Contrast Ratios

Computed precisely from `src/styles/global.css` `@theme` block:

- `--color-primary` #2563eb on `--color-black` #0e141b: **3.58:1** — passes 3:1 large text only (>=24px normal or >=18.67px bold). FAILS 4.5:1 for normal text.
- `--color-primary` #2563eb on `--color-white` #e2e8f0: **4.19:1** — FAILS 4.5:1 for normal text. Passes 3:1 for large text only.
- `--color-white` #e2e8f0 on `--color-black` #0e141b: **15.01:1** — PASSES AAA
- `--color-neutral` #94a3b8 on `--color-black` #0e141b: **7.22:1** — PASSES AA
- `--color-neutral` #94a3b8 on `--color-white` #e2e8f0: **2.08:1** — FAILS AA
- `--color-white`/70 effective #a2a8b0 on #0e141b: **7.72:1** — PASSES AA (Experience dates)
- Primary on primary/15 bg (effective #11203a): **3.15:1** — FAILS 4.5:1 (Skills badges, 16px normal)
- White on white/10 bg (effective #232930): **11.90:1** — PASSES (Projects tech badges)
- Pure #ffffff on primary #2563eb: **5.17:1** — PASSES AA
- Primary on card bg #1c232d/85 (effective #1a212a): **3.14:1** — just passes 3:1 for large text
- Footer hover (primary on black, 14px normal): **3.58:1** — FAILS 4.5:1
- Skip link text (#e2e8f0 on primary): **4.19:1** — FAILS 4.5:1

## Heading Hierarchy (full page)

h1 (Hero: name) → h2 (Section: About/Experience/Projects/Skills) → h3 (Experience: company, Projects: name, Skills: category) → h4 (Experience: position). No skips. Valid.

## Post-Second-Audit Status (2026-03-17)

All first-audit issues confirmed fixed in commit 583861a. See remaining issues below.

### Remaining Issues After Second Audit

**Critical (WCAG fail):**

1. Skills badges: primary text on primary/15 bg = 3.15:1 FAILS 4.5:1 (1.4.3) — `src/components/Skills.astro` L20
2. Skip link focused text: #e2e8f0 on primary = 4.19:1 FAILS 4.5:1 (1.4.3) — `src/layouts/Layout.astro` L49 (fix: use text-[#fff])
3. Skip link focus ring: primary outline on primary bg = invisible (1.4.11) — `src/styles/global.css` (fix: add focus:outline-white or focus:outline-[#fff] on skip link)

**Major:** 4. Footer hover: primary on black = 3.58:1 at 14px normal FAILS 4.5:1 (1.4.3) — `src/components/Footer.astro` L23 5. Hero social link `<a>` has no padding — touch target is 32px icon only, under 44x44px (2.5.5) — `src/components/Hero.astro` L33-41 6. Mobile menu button: px-1.5 only, no py — height ~24px under 44px (2.5.5) — `src/components/Header.astro` L18-27 7. Email icon in Hero `<a>` not aria-hidden — SR may announce icon name (1.1.1) — `src/components/Hero.astro` L28 8. No aria-current on active nav item — scroll observer adds CSS class only (4.1.2) — `src/components/Header.astro` 9. Projects card: h-[680px] fixed height mobile — content may clip at 320px (1.4.10 Reflow)

**Minor:** 10. About image alt={name} — memoji, could be more descriptive (1.1.1) 11. og:type meta missing from Layout.astro (not WCAG) 12. CSS pseudo-element SVG filenames (/check.svg, /external.svg) may be read by some SRs 13. `ProjectProps` and `AboutProps` have no `alt` field in type — alt derived from other props

## Component Structure Notes

- `Section.astro`: renders `<section id={href} aria-labelledby={href+'-heading'}>` + `<h2 id={href+'-heading'}>`. Clean pattern.
- `Header.astro`: sticky, animate-slide-in with proper reduced-motion guard. Menu toggle uses aria-expanded + aria-controls correctly.
- `Hero.astro`: social links have aria-label + sr-only "(opens in new tab)". Email icon NOT aria-hidden. Social `<a>` tags lack padding (touch target issue).
- `Footer.astro`: wrapped in `<nav aria-label='Social links'>`. Links have rel + sr-only.
- `About.astro`: image alt={name} (person's name only; memoji image).
- `Experience.astro`: ul.list-none has role="list". Date uses text-white/70 (7.72:1 passes).
- `Projects.astro`: sticky cards with fixed heights. Tech badges use white/10 bg (11.90:1 passes).
- `Skills.astro`: badges use bg-primary/15 with text-primary — 3.15:1 FAILS AA.

## Formatting Conventions

Prettier: tabs, single quotes, no semicolons. Use `bunx prettier --write <file>` after edits.

## Type System Notes

- `ProjectProps.image` is `string` — no `alt` field — alt derived from `name` in component
- `AboutProps.image` is `string` — no `alt` field — alt derived from `name` prop passed separately
- `SocialLinksProps.icon.name` is used as the iconify icon identifier
