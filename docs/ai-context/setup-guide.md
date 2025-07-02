# Setup Guide

Enhanced with semantic code analysis insights.

## Prerequisites

### Required Tools
- **Node.js**: 22.17.0 (managed via mise)
- **Bun**: 1.2.10+ (JavaScript runtime and package manager)
- **mise**: Development environment manager (optional but recommended)

### Verification Commands
```bash
# Check current versions
node --version    # Should be 22.17.0
bun --version     # Should be 1.2.10+
mise --version    # For environment management
```

## Environment Setup

### Option 1: Using mise (Recommended)
```bash
# Install mise if not already available
curl https://mise.jdx.dev/install.sh | sh

# Install project dependencies (reads mise.toml)
mise install

# Verify environment
mise current
```

### Option 2: Manual Setup
```bash
# Install Node.js 22.17.0 (via your preferred method)
# Install Bun 1.2.10+
curl -fsSL https://bun.sh/install | bash
```

## Project Setup

### 1. Clone and Install
```bash
# Clone repository
git clone https://github.com/JoeKarow/joekarow.dev.git
cd joekarow.dev

# Install dependencies
bun install
```

### 2. Verify Installation
```bash
# Check package.json scripts are available
bun run

# Expected output shows 5 scripts:
# - dev: astro dev
# - start: astro dev  
# - build: astro check && astro build
# - preview: astro preview
# - astro: astro
```

### 3. Development Server
```bash
# Start development server
bun run dev

# Alternative command
bun run start

# Server will be available at http://localhost:4321
```

## Build Process

### Development Build
```bash
# Run with type checking
bun run build

# This executes: astro check && astro build
# - astro check: TypeScript validation
# - astro build: Static site generation
```

### Preview Production Build
```bash
# Build then preview
bun run build
bun run preview

# Preview server typically runs on http://localhost:4322
```

## Code Quality Setup

### Prettier Configuration
The project uses comprehensive Prettier setup:

```bash
# Format all files
bunx prettier --write .

# Check formatting
bunx prettier --check .
```

**Prettier Configuration** (from `.prettierrc.mjs`):
- Tabs for indentation (not spaces)
- Single quotes
- No semicolons
- Plugins: @prettier/plugin-oxc, prettier-plugin-astro, prettier-plugin-tailwindcss

### TypeScript Configuration
- **Strict mode**: Enabled for maximum type safety
- **Path aliases**: Configured for clean imports
- **Astro integration**: Full TypeScript support for .astro files

## Development Workflow

### 1. Start Session
```bash
# Navigate to project
cd /path/to/joekarow.dev

# Ensure correct environment
mise current  # (if using mise)

# Start development server
bun run dev
```

### 2. Make Changes
- Edit files in `src/` directory
- Components auto-reload in development
- TypeScript errors shown in terminal

### 3. Quality Checks
```bash
# Type checking (included in build)
bunx astro check

# Code formatting
bunx prettier --write .

# Full build test
bun run build
```

### 4. Preview Changes
```bash
# Build and preview
bun run build
bun run preview
```

## Configuration Details

### Key Configuration Files

#### package.json
- **Package Manager**: Bun 1.2.10
- **Scripts**: dev, build, preview, astro commands
- **Dependencies**: Astro, TypeScript, Tailwind CSS
- **Dev Dependencies**: Prettier with plugins

#### astro.config.mjs  
- **Adapter**: @astrojs/vercel for deployment
- **Vite Plugins**: Tailwind CSS integration
- **Site URL**: https://joekarow.dev

#### tsconfig.json
- **Base**: astro/tsconfigs/strict
- **Path Aliases**: @components, @layouts, @icons, @types, @config
- **Target**: ES2020 with modern module resolution

#### mise.toml
- **Node**: 22.17.0
- **Bun**: 1.2.17
- **Tasks**: dev, build, preview shortcuts
- **Environment**: Node modules in PATH

### Path Aliases
Configured in `tsconfig.json` for clean imports:
```typescript
// Instead of: import Layout from '../../layouts/Layout.astro'
import Layout from '@layouts/Layout.astro'

// Available aliases:
// @components/* → src/components/*
// @layouts/* → src/layouts/*  
// @icons/* → src/icons/*
// @types → src/types/index.ts
// @config → src/config/index.ts
```

## Troubleshooting

### Common Issues

#### Bun Installation Issues
```bash
# Reinstall Bun
curl -fsSL https://bun.sh/install.sh | bash
source ~/.bashrc  # or ~/.zshrc
```

#### TypeScript Errors
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install

# Regenerate types
bunx astro sync
```

#### Build Failures
```bash
# Check for TypeScript errors
bunx astro check

# Common fixes:
# 1. Ensure all imports use path aliases correctly
# 2. Verify component props match their interfaces
# 3. Check that SITE_CONFIG structure matches SiteConfig interface
```

#### Port Conflicts
```bash
# Development server (default: 4321)
bun run dev --port 3000

# Preview server (default: 4322)  
bun run preview --port 3001
```

### Environment Verification
```bash
# Complete environment check
echo "Node: $(node --version)"
echo "Bun: $(bun --version)"
echo "mise: $(mise --version)"

# Project-specific verification
bun run build  # Should complete without errors
```

## Integration with AI Tools

### Claude Code Setup
1. Ensure Serena MCP is configured
2. Always start sessions with "Read the initial instructions"
3. Reference `CLAUDE.md` for specific guidelines

### General AI Tool Setup
1. Reference `@docs/ai-context/README.md` as primary context
2. Use semantic analysis from `.serena/memories/` if available
3. Follow development workflow above for consistency

This setup ensures a consistent, high-quality development environment optimized for the project's architecture and tooling choices.