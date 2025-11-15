# Pril

This repository is a fresh [Next.js](https://nextjs.org/) application configured with the App Router, TypeScript, ESLint, and [Tailwind CSS](https://tailwindcss.com/).

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. Open <http://localhost:3000> to view the app.

## Available scripts

- `npm run dev` – Start a local Next.js dev server with Tailwind JIT.
- `npm run build` – Create an optimized production build.
- `npm run start` – Serve the production build.
- `npm run lint` – Run ESLint using the Next.js configuration.

## Tailwind configuration

Tailwind scans files inside `src/app`, `src/components`, and `src/pages`. Edit `tailwind.config.ts` to customize tokens such as colors or fonts, and add new files inside those directories to automatically pick up the styles.
