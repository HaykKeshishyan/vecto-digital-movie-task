# Netflix-Style TV Application

## Overview

This is a modern Netflix-inspired TV application built with React. The application features a sophisticated streaming interface with an animated sidebar menu, featured movie display, and trending content carousel. It's designed as a frontend-only web application with focus on visual appeal and smooth user interactions using mock data.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with custom Tailwind CSS styling
- **Animation**: Framer Motion for smooth animations and transitions
- **Styling**: Tailwind CSS with CSS variables for theming

### Data Management
- **Mock Data**: Local JSON data structure for movies and trending content
- **Session Storage**: Browser sessionStorage for user preferences
- **No Backend**: Frontend-only application for local development

### Component Structure
- Modular component architecture with separate UI components
- Custom hooks for mobile detection and toast notifications
- Reusable UI components following shadcn/ui patterns

## Key Components

### Core Application Components
1. **Sidebar**: Animated navigation menu with icons and expandable profile section
2. **FeaturedMovie**: Main hero section displaying selected movie with auto-play video background
3. **TrendingCarousel**: Horizontal scrollable movie carousel with drag support
4. **Home**: Main page component orchestrating the entire application

### Data Management
- Movie data structure with comprehensive metadata (title, year, rating, duration, images, video URLs)
- Trending movies API with configurable limits
- Session storage integration for last-viewed movie persistence

### UI Components
- Complete shadcn/ui component library integration
- Custom Netflix-themed color scheme with CSS variables
- Responsive design with mobile-first approach

## Data Flow

1. **Initial Load**: Application fetches trending movies from `/api/movies/trending`
2. **Movie Selection**: User clicks on movie in carousel, updates featured section
3. **Auto-play Logic**: 2-second delay before switching to video background
4. **Session Persistence**: Last viewed movie ID stored in sessionStorage
5. **Sorting Logic**: Movies sorted by last viewed, then by creation date

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm & drizzle-kit**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Node.js server to `dist/index.js`
3. **Database**: Drizzle migrations handle schema management

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Development/production environment flag
- **REPL_ID**: Replit-specific configuration for development features

### Development vs Production
- Development includes Replit-specific plugins and error overlays
- Production serves static files and runs optimized server bundle
- Database schema managed through Drizzle migrations

### File Structure
```
├── src/             # React frontend application source
├── attached_assets/ # Static assets and images
├── local-*.json/ts  # Local development configuration files
└── dist/           # Built application output
```

The application has been restructured to a frontend-only architecture for easy local development and deployment.