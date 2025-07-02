# Task Completion Checklist

## Code Quality Checks (Always Run)
1. **Type Checking**: `bun run build` (includes `astro check`)
2. **Code Formatting**: `bunx prettier --write .` (if changes made)
3. **Manual Review**: Verify component props and TypeScript interfaces

## Before Committing
- [ ] Run `bun run build` to ensure no TypeScript errors
- [ ] Check that all new components have proper TypeScript interfaces
- [ ] Verify path aliases are used correctly (@components, @types, etc.)
- [ ] Ensure Prettier formatting is applied
- [ ] Test development server with `bun run dev`

## Deployment Verification
- [ ] Production build succeeds (`bun run build`)
- [ ] Preview build works (`bun run preview`)
- [ ] No console errors in browser
- [ ] All links and navigation work correctly

## Component Development Standards
- [ ] Component has proper TypeScript props interface
- [ ] Props interface is exported from `src/types/index.ts`
- [ ] Component uses Astro frontmatter for logic
- [ ] Tailwind classes are properly organized
- [ ] Component is responsive and accessible

## Configuration Changes
- [ ] Update `SITE_CONFIG` in `src/config/index.ts` if needed
- [ ] Update TypeScript interfaces in `src/types/index.ts`
- [ ] Test configuration changes with development server

## Performance Considerations
- [ ] Minimize bundle size impact
- [ ] Optimize images and assets
- [ ] Ensure proper lazy loading for components
- [ ] Verify Vercel Analytics integration still works

## Important Notes
- This is a static site - no server-side logic
- All content is configured in `src/config/index.ts`
- Components are primarily presentational with minimal logic
- Focus on performance and accessibility
- Vercel deployment is automatic on main branch pushes