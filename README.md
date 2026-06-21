# Tajin International

A TanStack Start + Vite + React project for a travel agency landing page built with Tailwind CSS and Radix UI components.

## Overview

This project is a modern single-page application scaffolded for a travel services website. It includes:

- TanStack React Router for route management
- TanStack React Query for client-side data fetching
- Tailwind CSS for styling
- Radix UI components for accessible UI primitives
- TypeScript support
- Vite build and dev tooling

## Project Structure

- `src/routes/__root.tsx` — application root route and layout
- `src/routes/index.tsx` — home page route component and UI
- `src/server.ts` — SSR entrypoint for the app
- `src/start.ts` — client startup entrypoint
- `src/styles.css` — global styles
- `src/assets/` — static image assets
- `src/components/` — reusable UI components
- `src/lib/` — utility and error reporting helpers

## Requirements

- Node.js 20+ recommended
- npm

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run build:dev` — build in development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run format` — format code with Prettier

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser at `http://localhost:5173`.

## Notes

- `@lovable.dev/vite-tanstack-config` is used for Vite configuration and already includes the required TanStack and Tailwind plugins.
- The app uses client-side route rendering with `@tanstack/react-router` and a root error boundary.

## Contact

For help with this project, inspect the route definitions in `src/routes` or follow the conventions in `vite.config.ts` for additional configuration.
