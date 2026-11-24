# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

- `npm run dev`: start the Vite dev server
- `npm run build`: type-check with `vue-tsc -b`, then build (both must pass)
- `npm run preview`: serve the production build

There is no test runner or linter. `tsconfig.app.json` enforces `noUnusedLocals` / `noUnusedParameters`.

## Architecture

Two independent landing pages in one Vite multi-page build (see `build.rollupOptions.input` in `vite.config.ts`). There is no router and no backend, so every address is a real file and deep links never 404.

- `index.html` -> `src/clinica/` (Guabal Dental)
- `restaurante/index.html` -> `src/marea/` (La Marea)
- `src/shared/demo.ts`: link to the services page used by both

Each page has `data.ts` (all content, illustrative), a small reactive module for its form state (`booking.ts`, `reservation.ts`), one global stylesheet and its components. Pages never import from each other: each one owns its palette, type and layout.

## Things that are easy to break

- **Tile grid** (`clinica.css`): `--t` and `--pitch` are expressed in `cqw`, so `.wall` must stay inside a `.wallbox` (the size container). Murals draw their grout with `--pitch`; if a row grows past `--t` the grout drifts out of line with the tiles.
- **Plate discs** (`marea/data.ts`): `width` / `left` / `top` centre the round plate of each photo inside the disc. A new photo needs its own values, and must be a plate shot from above.
- **Dates** are computed from today, so the demos never show past days. La Marea is closed on Mondays and serves lunch only on Sundays.

## Content rules

The businesses do not exist. Do not add testimonials, reviews, awards, certifications or years in business, keep the demo notices, and do not connect the forms to a real third party. See `PRODUCT.md`.
