# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check with `vue-tsc -b` then build for production (both must pass)
- `npm run preview` — serve the production build locally

There is no test runner or linter configured. Type errors from `vue-tsc` are the only automated gate, and `tsconfig.app.json` enforces `noUnusedLocals` / `noUnusedParameters`, so unused imports or vars fail the build.

## Architecture

Single-page marketing site ("Flowly") built with Vue 3 `<script setup>` SFCs, TypeScript, Vite, and Tailwind CSS v4. There is no router and no backend — `App.vue` stacks every section in render order.

**Feature-sliced structure.** Each landing-page section lives in `src/features/<name>/` with a `components/` folder and an `index.ts` barrel that re-exports the section's root component (e.g. `export { default as Hero } from './components/Hero.vue'`). `App.vue` imports only from these barrels (`@/features/hero`), never from component files directly. To add a section, create the feature folder + barrel and insert the component into `App.vue`'s template in the desired position.

**Path alias.** `@` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`). Use `@/...` imports throughout.

**Shared layer** (`src/shared/`):
- `composables/` — reusable Vue composables. Two categories:
  - *State* (module-level singletons): `useTheme`, `useLocale` each hold a single top-level `ref` shared across all callers, synced to `document.documentElement` and persisted to `localStorage` via `watchEffect`.
  - *Interaction* (stateless helpers returning event handlers): `useTilt`, `useMagnetic`, `useSpotlight`, `useCountUp` — pointer-driven UI effects bound directly in templates.
- `i18n/translations.ts` — a single nested object keyed by locale (`en` / `es`) holding **all** copy for every section, including structured data (stats, mockup steps, nav links). Components never hardcode user-facing text.

**i18n flow.** `useLocale` owns the `'en' | 'es'` ref; `useTranslations` returns `t` (a computed of the current locale's translation object) plus `toggleLocale`. Components call `const { t } = useTranslations()` and read `t.something`. When adding copy, add the key to **both** `en` and `es` in `translations.ts`.

**Theming.** `useTheme` toggles `'dark' | 'light'` and writes it to `documentElement.dataset.theme`. All colors are CSS custom properties defined in `src/style.css` (`:root` for dark, `:root[data-theme='light']` for light overrides). Components reference them as Tailwind arbitrary values like `bg-[var(--card)]` / `text-[var(--text-2)]` — never hardcoded hex.

**Tailwind v4** is configured CSS-first (no `tailwind.config.js`). The `@tailwindcss/vite` plugin plus `@import "tailwindcss"` and the `@theme` block in `src/style.css` define fonts. Animations are `@keyframes` with the `fl` prefix (`flFadeUp`, `flSlideUp`, `flPulse`, `flFloat`, `flDraw`) defined in `style.css` and applied inline via `style="animation: ..."`.
