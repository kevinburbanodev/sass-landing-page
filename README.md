# Flowly — SaaS Landing Page

A modern, single-page SaaS marketing site built with **Vue 3**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. It ships with dark/light theming, English/Spanish localization, and a set of pointer-driven micro-interactions (tilt, magnetic buttons, spotlight, count-up).

## Features

- **Feature-sliced sections** — hero, logos strip, bento features, testimonials, comparison, pricing, FAQ, CTA banner, contact, and footer, composed in `App.vue`.
- **Dark / light theme** — toggled at runtime, persisted to `localStorage`, driven by CSS custom properties.
- **Internationalization (en / es)** — all copy lives in a single translations file; language is persisted and swappable at runtime.
- **Micro-interactions** — reusable composables for 3D tilt, magnetic hover, cursor spotlight, and animated number count-ups.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                          |
| `npm run build`   | Type-check (`vue-tsc`) and build for production     |
| `npm run preview` | Serve the production build locally                 |

## Tech Stack

- [Vue 3](https://vuejs.org/) (`<script setup>` SFCs)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config, no `tailwind.config.js`)

## Project Structure

```
src/
├── App.vue                    # Composes all sections in order
├── main.ts                    # App entry point
├── style.css                  # Tailwind import, theme tokens, keyframes
├── features/<name>/           # One folder per landing section
│   ├── components/            # Section component(s)
│   └── index.ts               # Barrel re-exporting the section
└── shared/
    ├── composables/           # Theme, locale, and interaction composables
    └── i18n/translations.ts   # All copy, keyed by locale (en / es)
```

The `@` path alias maps to `src/`.
