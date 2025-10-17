# Agent Guidelines for Teach Repository

## Project Vision
**Teach** is a full-stack application featuring:
- **Backend**: Elysia.js server with ORPC for type-safe API communication
- **Frontend**: React application with TanStack Start, ORPC client, Clerk authentication, Shadcn UI, and Tailwind CSS
- **Architecture**: Clean separation between backend and frontend communicating via ORPC
- **API Documentation**: OpenAPI integration for backend API visualization

## Architecture Overview
```
Backend (Elysia.js + ORPC)
    ↓ ORPC calls
Frontend (React + TanStack Start)
    ↓ Clerk auth
User Interface (Shadcn UI + Tailwind)
```

## Build/Lint/Test Commands
- **Development**: `bun run dev` (runs backend + web concurrently)
- **Backend dev**: `bun run dev:backend` (watches src/index.ts)
- **Web dev**: `bun run dev:web` (vite dev on port 3001)
- **Build**: `bun run build` (web only)
- **Test**: `bun run test` (vitest run, web only)
- **Single test**: `bun run test -- <test-file>` or `bun run test -- --run <test-name>`
- **Lint**: `bun run lint` (biome lint)
- **Format**: `bun run format` (biome format)
- **Check**: `bun run check` (biome check)

## Development Workflow
- Always run `bun run lint` and `bun run check` before committing
- Fix all linting errors and warnings
- Use `bun run format` to auto-format code
- Run tests with `bun run test` before pushing changes

## Code Organization
### Backend (`/app/backend/`)
- **Framework**: Elysia.js with ORPC server
- **API**: Define ORPC procedures in `src/router/`
- **OpenAPI**: Automatic API documentation generation
- **Purpose**: Business logic, data processing, external API calls

### Frontend (`/app/web/`)
- **Framework**: TanStack Start with React 19
- **Routing**: TanStack Router (file-based routing)
- **State**: TanStack Store for client state
- **Data**: TanStack Query for server state
- **Auth**: Clerk for authentication
- **UI**: Shadcn UI components with Tailwind CSS

### Shared (`/shared/`)
- **Schemas**: Zod schemas for type safety
- **Types**: Shared TypeScript types between backend and frontend
- **Constants**: Application-wide constants

## ORPC Communication
- Backend defines ORPC procedures with input/output validation
- Frontend imports ORPC client and calls procedures directly
- End-to-end type safety between frontend and backend
- No manual API endpoint creation needed

## Code Style Guidelines
### Formatting & Linting
- Use Biome for linting/formatting with recommended rules
- Indent with tabs
- Double quotes for strings
- Auto-organize imports enabled

### TypeScript
- Strict mode enabled
- Use explicit types for function parameters and return values
- Prefer interfaces over types for object shapes
- Use `type` for unions, intersections, and utility types

### Imports
- React imports first
- Third-party libraries second
- Local imports last with `@/` alias for src/
- Group imports by type with blank lines between groups

### Naming Conventions
- **Variables/Functions**: camelCase
- **Components/Types**: PascalCase
- **Files**: kebab-case for routes, camelCase for components
- **Constants**: UPPER_SNAKE_CASE

### Error Handling
- Use Sentry for error collection and instrumentation
- Wrap server functions with `Sentry.startSpan` for observability
- Import: `import * as Sentry from '@sentry/tanstackstart-react'`

### UI Components
- Use Shadcn UI components: `pnpx shadcn@latest add <component>`
- Style with Tailwind CSS and class-variance-authority
- Follow existing component patterns in `src/components/ui/`

### Frameworks & Libraries
- **Runtime**: Bun (not Node.js)
- **Frontend**: React 19, TanStack Router, TanStack Query
- **Backend**: Elysia.js with ORPC
- **Styling**: Tailwind CSS v4
- **Validation**: Zod schemas
- **State**: TanStack Store
- **Auth**: Clerk
- **Monitoring**: Sentry

## Current State
- **Demo routes** in `/app/web/src/routes/demo/` are boilerplate from TanStack CLI
- **Replace with actual app routes** as features are implemented
- **Backend ORPC setup** is ready in `/app/backend/src/router/`
- **Frontend ORPC client** configured in `/app/web/src/orpc/`

## Cursor Rules
### Sentry Instrumentation
- Error collection is automatic in `src/router.tsx`
- Instrument server functions with `Sentry.startSpan`
- Import pattern: `import * as Sentry from '@sentry/tanstackstart-react'`

### Shadcn Components
- Install new components: `pnpx shadcn@latest add <component>`
- Follow existing patterns in `src/components/ui/`