# Claude Code Development Guide

**Essential**: Always start Claude Code sessions with "Read the initial instructions"

## Project Context

**JoeKarow.dev** is a personal portfolio website built with Astro, TypeScript, and Tailwind CSS. The site showcases professional experience, featured projects, and personal information through a modern, performant static site architecture.

**Quick Reference**: [@docs/ai-context/README.md](./docs/ai-context/README.md)

## Session Initialization

### 1. Start Every Session
```
Read the initial instructions
```
This activates Serena MCP integration and loads semantic understanding of the codebase.

### 2. Verify Serena Setup
After initial instructions, Serena provides:
- Semantic code analysis capabilities
- Memory system with project insights
- Symbol-level understanding tools

## Serena MCP Integration

### Memory System
Serena automatically created memories in `.serena/memories/`:
- **project_overview**: High-level project summary and purpose
- **tech_stack_details**: Complete technology stack information
- **code_structure**: File organization and component relationships  
- **code_style_conventions**: Formatting rules and coding standards
- **suggested_commands**: Essential development commands
- **task_completion_checklist**: Quality assurance steps

### Access Memories
```bash
# List available memories
list_memories

# Read specific memory
read_memory "project_overview"
```

### Semantic Analysis Tools

#### Symbol Discovery
```bash
# Find configuration constants
find_symbol "SITE_CONFIG" --relative-path src/config/index.ts --include-body

# Get TypeScript interfaces overview
get_symbols_overview src/types/

# Find component props
find_symbol "HeroProps" --relative-path src/types/index.ts --include-body
```

#### Cross-Reference Analysis
```bash  
# Find where SITE_CONFIG is used
find_referencing_symbols "SITE_CONFIG" --relative-path src/config/index.ts

# Search for component patterns
search_for_pattern "interface.*Props" --include-glob "*.ts"
```

#### Code Structure Exploration
```bash
# Directory overview
get_symbols_overview src/components/

# Find specific components
find_file "*.astro" --relative-path src/components/
```

## Development Guidelines

### Session Startup Workflow
1. **Always**: "Read the initial instructions"
2. **Review**: Current task context with `read_memory` if needed
3. **Understand**: Use `get_symbols_overview` for code exploration
4. **Plan**: Use TodoWrite for complex tasks
5. **Implement**: Use symbol-level tools for precise changes

### Tool Usage Patterns

#### For New Features
1. `get_symbols_overview` to understand existing structure
2. `find_symbol` to examine related components
3. `find_referencing_symbols` to understand dependencies
4. Use symbol editing tools for clean implementation

#### For Bug Fixes
1. `search_for_pattern` to locate issue area
2. `find_symbol` to examine specific functions/components
3. `find_referencing_symbols` to assess impact
4. Use regex editing for targeted fixes

#### For Refactoring
1. `find_referencing_symbols` to map all usages
2. Plan changes with TodoWrite
3. Use symbol replacement tools for consistency
4. Validate with `find_referencing_symbols` after changes

### Context Management

#### Smart Context Loading
- Use `@docs/ai-context/README.md` for project overview
- Reference specific memories for detailed information
- Use symbol tools to load only necessary code sections

#### Avoid Context Waste
- Don't read entire files unless absolutely necessary
- Use symbol-level understanding instead of full file reads
- Reference existing memories rather than re-analyzing

## Reference Documentation

### Quick Access
- **Architecture**: [@docs/ai-context/architecture-overview.md](./docs/ai-context/architecture-overview.md)
- **Symbols**: [@docs/ai-context/symbol-reference.md](./docs/ai-context/symbol-reference.md)  
- **Setup**: [@docs/ai-context/setup-guide.md](./docs/ai-context/setup-guide.md)

### Key Commands (from memory: suggested_commands)
```bash
# Development
bun run dev          # Start development server
bun run build        # Build with type checking
bun run preview      # Preview production build

# Quality Checks  
bunx astro check     # TypeScript validation
bunx prettier --write .  # Code formatting
```

### Essential File Locations
- **Configuration**: `src/config/index.ts` (SITE_CONFIG, SITE_CONTENT)
- **Types**: `src/types/index.ts` (all interfaces)
- **Components**: `src/components/` (.astro components)
- **Main Page**: `src/pages/index.astro`
- **Layout**: `src/layouts/Layout.astro`

## Task Completion Standards

### Before Committing (from memory: task_completion_checklist)
- [ ] Run `bun run build` (includes type checking)
- [ ] Verify all new components have TypeScript interfaces
- [ ] Ensure path aliases are used correctly
- [ ] Apply Prettier formatting
- [ ] Test development server functionality

### Component Development
- [ ] Add props interface to `src/types/index.ts`
- [ ] Use semantic HTML and Tailwind classes
- [ ] Ensure responsive design
- [ ] Maintain accessibility standards

## Symbol-Level Navigation

### Component Props System
```typescript
// All component props defined in src/types/index.ts
interface HeroProps { /* ... */ }
interface AboutProps { /* ... */ }
interface ExperienceProps { /* ... */ }
interface ProjectProps { /* ... */ }
```

### Configuration System
```typescript
// src/config/index.ts:1-32
const SITE_CONFIG: SiteConfig = {
  title: 'Joe Karow — Full Stack Software Engineer',
  // ... complete configuration
}
```

### Path Aliases (tsconfig.json)
```typescript
import Header from '@components/Header.astro'
import { SITE_CONFIG } from '@config'
import type { HeroProps } from '@types'
```

## Serena Best Practices

### Efficient Symbol Usage
1. **Overview First**: Use `get_symbols_overview` before deep dives
2. **Targeted Reading**: Use `find_symbol` with `include_body=true` only when needed
3. **Cross-Reference**: Use `find_referencing_symbols` to understand impact
4. **Pattern Search**: Use `search_for_pattern` for flexible discovery

### Memory Integration
- Reference memories for context instead of re-analyzing
- Update memories when making significant architectural changes
- Use memory system to maintain session continuity

### Quality Assurance
- Always run `bun run build` before completing tasks
- Use symbol tools to verify changes don't break references
- Reference task completion checklist memory for consistency

This guide ensures optimal use of Claude Code with Serena MCP for efficient, high-quality development on the JoeKarow.dev project.