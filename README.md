# Tajin International

A plain static Vite + React landing page for a travel agency built with Tailwind CSS and TypeScript.

## Overview

This project is a modern single-page application built with Vite and React. It includes:

- Tailwind CSS for styling
- React 19 and TypeScript support
- Vite build and dev tooling
- Static client-side rendering

## Project Structure

- `src/main.tsx` — application entry point
- `src/App.tsx` — main landing page UI
- `src/styles.css` — global styles
- `src/assets/` — static image assets
- `src/components/` — reusable UI components
- `src/lib/` — utility helpers

## Requirements

- Node.js 20+ recommended
- npm

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
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

- This project is now a static Vite + React app with no SSR or TanStack Start routing.
- `vite.config.ts` uses `@vitejs/plugin-react` and `@tailwindcss/vite`.

## Contact

For help with this project, inspect `src/App.tsx` and `vite.config.ts` for the current app setup.
