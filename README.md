# Tajin International

A modern Vite + React + TypeScript project for the Tajin International experience, styled with Tailwind CSS and built with reusable UI components.

## Overview

This application uses a fast Vite development setup with React 19 and a component-driven UI layer. It is designed for a polished landing-page experience and includes a collection of accessible UI primitives powered by Radix UI and shadcn-style components.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Radix UI primitives
- ESLint + Prettier

## Project Structure

- src/main.tsx — application entry point
- src/App.tsx — main app layout and page content
- src/styles.css — global styling and Tailwind setup
- src/components/ — reusable UI components
- src/lib/ — helper utilities and app-level logic
- src/assets/ — static images and assets

## Requirements

- Node.js 20 or newer
- npm

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser at http://localhost:5173

## Available Scripts

- npm run dev — start the Vite development server
- npm run build — create a production build
- npm run preview — preview the production build locally
- npm run lint — run ESLint
- npm run format — format the codebase with Prettier

## Notes

- The project uses Vite with React plugin support and Tailwind integration via Vite.
- The UI layer includes a wide set of reusable components under src/components/ui.
- This setup is suitable for rapid front-end development and future expansion.
