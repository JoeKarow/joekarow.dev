# Suggested Development Commands

## Primary Development Commands
```bash
# Start development server
bun run dev
# or
bun run start

# Build for production (includes type checking)
bun run build

# Preview production build
bun run preview

# Run Astro CLI directly
bun run astro
```

## Environment Management (mise)
```bash
# Development server via mise
mise run dev

# Build via mise
mise run build

# Preview via mise
mise run preview
```

## Package Management (Bun)
```bash
# Install dependencies
bun install

# Add dependency
bun add <package>

# Add dev dependency
bun add -d <package>

# Remove dependency
bun remove <package>

# Update dependencies
bun update
```

## Code Quality Commands
```bash
# Format code with Prettier
bunx prettier --write .

# Check TypeScript (via Astro)
bunx astro check

# Astro development commands
bunx astro add <integration>  # Add Astro integration
bunx astro info              # Show environment info
bunx astro sync              # Generate TypeScript types
```

## Git Commands (macOS)
```bash
# Standard Git operations
git status
git add .
git commit -m "message"
git push
git pull

# Check git configuration
git config --list
```

## System Utilities (Darwin/macOS)
```bash
# File operations
ls -la          # List files with details
find . -name    # Find files by name
grep -r         # Recursive text search

# Process management
ps aux          # List running processes
top             # System monitor
```

## Important Notes
- Use `bun` instead of `npm` or `yarn` for all package operations
- `bun run build` automatically runs type checking before building
- The project uses mise for environment management (alternative to nvm/nodenv)