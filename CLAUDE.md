# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000 (hot reload)
- `npm run build` — production build
- `npm run start` — serve the production build (run `build` first)
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals`)

There is no test framework configured.

## Architecture

Next.js 16 (App Router) + React 19 + Tailwind CSS v4. JavaScript only — no TypeScript.

- **Routing**: file-based under `src/app/`. Each route is a directory with a `page.js` exporting a default React component (e.g. `src/app/research/page.js` → `/research`). `src/app/layout.js` is the root layout wrapping every page with a fixed `<Navbar />` and a `<Footer />`; the `pt-16` wrapper offsets the fixed navbar.
- **Shared content**: `src/lib/site.js` holds external links (ADS search, YouTube, email), the outreach `VIDEOS` list, and `RESEARCH_AREAS`. The research areas' `slug` doubles as the anchor `id` on `/research`, so Home-page panels deep-link via `/research#<slug>` — keep slugs in sync if you rename a section. Anchored sections use the `.anchor`/`scroll-mt-24` offset so they clear the fixed navbar.
- **Components** (`src/components/`): `navbar.js` (client component — uses `usePathname` for active state, includes mobile menu), `footer.js`, `youtube-embed.js` (privacy-mode iframe), `publication-thumbs.js` (placeholder grid; pass `items` with real `href`/`title` later, or `count` for blanks).
- **Navigation**: navbar links are defined in the `LINKS` array in `src/components/navbar.js`. When adding or renaming a route, update that array.
- **Import alias**: `@/*` maps to `src/*` (see `jsconfig.json`), e.g. `import Navbar from "@/components/navbar"`.
- **Styling**: dark "cosmic" theme. Tailwind v4 (no `tailwind.config.js`) — theme colors (`space`, `nebula`, `stellar`, `star`, `ink`, `muted`) and fonts are declared in the `@theme` block of `src/app/globals.css`, which also defines the fixed starfield backdrop (`body::before`) and the `.text-gradient`/`.card`/`.nav-link` helper classes. Fonts (Inter + Space Grotesk) load via `next/font/google` in `layout.js`, exposed as `--font-sans` / `--font-display`.
