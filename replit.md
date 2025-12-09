# Studio 19:266 - Photography & Videography Website

## Overview

This is a luxury photography and videography studio website for "Studio 19:266". The application is a modern, sleek single-page website with a black and white design aesthetic, featuring gold (#d4af37) and blue (#1e90ff) accent colors. The site showcases the studio's services, portfolio, pricing, testimonials, and contact information.

The project uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, with PostgreSQL database support via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Build Tool**: Vite

The frontend follows a component-based architecture with:
- `pages/` - Route-level components (Home, NotFound)
- `components/sections/` - Major page sections (Hero, Services, Gallery, Pricing, About, Testimonials, Contact)
- `components/layout/` - Header and Footer components
- `components/ui/` - Reusable shadcn/ui components

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js HTTP server
- **Development**: Vite dev server integration for HMR
- **Production**: Static file serving from built assets

The backend is minimal, primarily serving the frontend with routes prefixed under `/api`. Storage interface pattern is implemented for future database integration.

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current Schema**: Basic users table with id, username, password fields
- **Migrations**: Drizzle Kit for schema management (`drizzle-kit push`)

### Build System
- Custom build script using esbuild for server bundling and Vite for client
- Server dependencies are selectively bundled to optimize cold start times
- Output: `dist/` directory with server code and `dist/public/` for static assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Full suite of accessible UI primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

### Development Tools
- **Vite Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Development tooling (dev only)
  - Custom `metaImagesPlugin` for OpenGraph image handling

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation integration
- **zod**: Schema validation
- **drizzle-zod**: Drizzle to Zod schema generation