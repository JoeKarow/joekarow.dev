---
name: update-content
description: Update site content in src/config/index.ts with type validation
disable-model-invocation: true
---

# Update Site Content

All site content lives in `src/config/index.ts` as typed TypeScript objects. This skill guides safe content updates.

## Usage

`/update-content`

## Steps

1. **Read current types** from `src/types/index.ts` to understand the data shape:
   - `SiteConfig` — metadata, nav links, social links
   - `SiteContent` — hero, skills, experience, projects, about sections

2. **Read current content** from `src/config/index.ts`

3. **Make the requested changes** in `src/config/index.ts`:
   - Ensure all changes conform to the TypeScript interfaces
   - `SITE_CONFIG` controls metadata, navigation, and social links
   - `SITE_CONTENT` controls all page section content
   - `SITE_CONTENT.hero.summary` references `SITE_CONFIG.description` — update both if changing the site description

4. **If new fields are needed**, update the interface in `src/types/index.ts` first, then update the config

5. **Validate**: Run `bunx astro check` to confirm no type errors

## Content Structure

| Export | Interface | Controls |
|--------|-----------|----------|
| `SITE_CONFIG` | `SiteConfig` | Page title, author, description, lang, logo, nav links, social links, OG image, canonical URL |
| `SITE_CONTENT.hero` | `HeroProps` | Hero section: name, specialty, summary, email, social links |
| `SITE_CONTENT.skills` | `SkillsProps` | Skills section: title, categorized skill lists |
| `SITE_CONTENT.experience` | `ExperienceProps[]` | Experience entries: company, position, dates, summary bullets |
| `SITE_CONTENT.projects` | `ProjectProps[]` | Project cards: name, summary, image, technologies, links |
| `SITE_CONTENT.about` | `AboutProps` | About section: description paragraphs, image |
