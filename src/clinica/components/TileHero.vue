<script setup lang="ts">
import { booking, chosenSlot, pickSlot, slots } from '../booking'
import PatternTile from './PatternTile.vue'

const links = [
  { label: 'Tratamientos', href: '#tratamientos', color: 'c-pink' },
  { label: 'Primera visita', href: '#visita', color: 'c-white' },
  { label: 'Preguntas', href: '#preguntas', color: 'c-green' },
  { label: 'Dónde estamos', href: '#donde', color: 'c-white' },
]

const side = [
  { kind: 'arc', turn: 2, color: 'white' },
  { kind: 'arc', turn: 3, color: 'white' },
  { kind: 'arc', turn: 1, color: 'white' },
  { kind: 'arc', turn: 0, color: 'white' },
  { kind: 'petal', turn: 0, color: 'green' },
  { kind: 'petal', turn: 1, color: 'pink' },
  { kind: 'petal', turn: 1, color: 'cobalt' },
  { kind: 'petal', turn: 0, color: 'white' },
  { kind: 'wave', turn: 0, color: 'pink' },
  { kind: 'wave', turn: 0, color: 'pink' },
  { kind: 'arc', turn: 1, color: 'cobalt' },
  { kind: 'arc', turn: 0, color: 'cobalt' },
] as const
</script>

<template>
  <header class="wallbox">
    <div class="wall hero">
      <a href="#inicio" class="tile c-white logo span" aria-label="Guabal Dental, inicio">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path
            fill="var(--cobalt)"
            d="M50 18c-9-8-31-9-34 12-2 14 5 20 7 34 2 13 4 27 11 27 8 0 6-25 16-25s8 25 16 25c7 0 9-14 11-27 2-14 9-20 7-34-3-21-25-20-34-12Z"
          />
        </svg>
        <span>Guabal Dental</span>
      </a>
      <PatternTile class="nav-fill" kind="wave" color="cobalt" />
      <nav class="nav" aria-label="Secciones">
        <a v-for="l in links" :key="l.href" :href="l.href" class="tile label" :class="l.color">
          <span>{{ l.label }}</span>
        </a>
      </nav>
      <PatternTile class="nav-fill" kind="wave" color="white" />
      <PatternTile class="nav-fill" kind="wave" color="white" />
      <a href="#cita" class="tile c-cobalt cta span label"><span>Pedir cita</span></a>

      <div id="inicio" class="mural painted c-cobalt headline span">
        <div class="paint">
          <h1>Ríete sin taparte la boca.</h1>
          <p>Odontología en El Guabal, Cali. Precio y tiempo a la vista antes de sentarte en la silla.</p>
        </div>
      </div>

      <div class="mural c-white photo span">
        <img
          src="/photos/clinica-sonrisa.webp"
          alt="Persona riendo a carcajadas frente a una pared turquesa"
          width="1200"
          height="1800"
          fetchpriority="high"
        />
      </div>

      <div class="side">
        <PatternTile v-for="(p, i) in side" :key="i" :kind="p.kind" :turn="p.turn" :color="p.color" />
      </div>

      <component :is="chosenSlot ? 'a' : 'div'" :href="chosenSlot ? '#cita' : undefined" class="tile c-pink open span">
        <template v-if="chosenSlot">
          <strong>{{ chosenSlot.longDay }}, {{ chosenSlot.hour }}</strong>
          <span class="go">Completar la cita</span>
        </template>
        <template v-else>
          <strong>Citas libres</strong>
          <span>Toca una hora para apartarla.</span>
        </template>
      </component>
      <button
        v-for="s in slots"
        :key="s.id"
        type="button"
        class="tile slot"
        :class="booking.slotId === s.id ? 'c-cobalt' : 'c-green'"
        :aria-pressed="booking.slotId === s.id"
        @click="pickSlot(s.id)"
      >
        <span class="day">{{ s.day }}</span>
        <span class="hour">{{ s.hour.split(' ')[0] }} <small>{{ s.hour.split(' ').slice(1).join(' ') }}</small></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: var(--g);
}
/* One pass of light over the wet glaze when the page opens. */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 42%, rgb(255 255 255 / 0.55) 50%, transparent 58%) no-repeat;
  background-size: 300% 100%;
  background-position: 130% 0;
  animation: glaze 1.6s 0.25s var(--ease);
}
@keyframes glaze {
  from {
    background-position: 130% 0;
  }
  to {
    background-position: -30% 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero::after {
    animation: none;
  }
}
.logo {
  --w: 3;
  --h: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-inline: 1.1rem !important;
  font-family: 'Anybody Variable', sans-serif;
  font-weight: 800;
  font-size: clamp(1.15rem, 2.05cqw, 2rem);
  letter-spacing: -0.02em;
  line-height: 1;
}
.logo svg {
  width: clamp(2rem, 3.4cqw, 3.4rem);
  flex: none;
  margin-left: -0.2rem;
}
.nav {
  display: contents;
}
.nav a,
.cta {
  display: flex;
  align-items: flex-end;
}
.nav a span,
.cta span {
  padding: 0.7rem 0.45rem 0.7rem 0.5rem;
}
.cta {
  --w: 2;
  --h: 1;
}
.headline {
  --w: 6;
  --h: 4;
  display: flex;
}
.headline .paint {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2.6cqw 2.4cqw;
}
.headline h1 {
  font-size: min(6.5cqw, 6.4rem);
  font-weight: 900;
}
.headline p {
  max-width: 34ch;
  font-size: clamp(1rem, 1.5cqw, 1.35rem);
  line-height: 1.4;
}
.photo {
  --w: 4;
  --h: 6;
}
.photo img {
  object-position: 50% 0;
}
.side {
  grid-column: span 2;
  grid-row: span 6;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
.open {
  --w: 2;
  --h: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.1rem !important;
  text-decoration: none;
}
.open strong {
  font-family: 'Anybody Variable', sans-serif;
  font-weight: 800;
  font-size: clamp(1.35rem, 2.3cqw, 2.2rem);
  line-height: 1;
  letter-spacing: -0.02em;
}
.open strong::first-letter {
  text-transform: uppercase;
}
.open span {
  font-size: clamp(0.9rem, 1.15cqw, 1.1rem);
  line-height: 1.3;
}
.open .go {
  font-weight: 700;
  text-decoration: underline;
}
.slot {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem 0.75rem !important;
  line-height: 1.1;
}
.slot .day {
  font-size: clamp(0.82rem, 1.05cqw, 1rem);
}
.slot .day::first-letter {
  text-transform: uppercase;
}
.slot .hour {
  font-weight: 700;
  font-size: clamp(1.15rem, 1.75cqw, 1.7rem);
  font-variant-numeric: tabular-nums;
}
.slot small {
  display: block;
  font-weight: 500;
  font-size: 0.85rem;
}

/* Placement on the wide wall: photo and pattern sit beside headline + slots. */
@media (min-width: 960px) {
  .headline {
    grid-column: 1 / span 6;
    grid-row: 2 / span 4;
  }
  .photo {
    grid-column: 7 / span 4;
    grid-row: 2 / span 6;
  }
  .side {
    grid-column: 11 / span 2;
    grid-row: 2 / span 6;
  }
  .open {
    grid-column: 1 / span 2;
    grid-row: 6 / span 2;
  }
}
@media (max-width: 959px) {
  .logo {
    --w: 4;
  }
  .cta {
    --w: 2;
    order: 1;
  }
  .logo,
  .headline {
    order: 1;
  }
  .nav a,
  .nav-fill {
    order: 2;
  }
  .side {
    grid-column: 1 / -1;
    grid-row: span 2;
    order: 6;
  }
  .headline {
    --w: 6;
    --h: 3;
    order: 3;
  }
  .headline h1 {
    font-size: 11cqw;
  }
  .headline p {
    font-size: 2.6cqw;
  }
  .open,
  .slot {
    order: 4;
  }
  .photo {
    --w: 6;
    --h: 5;
    order: 5;
  }
}
@media (max-width: 959px) {
  .hero > .nav-fill:nth-child(2) {
    display: none;
  }
}
@media (max-width: 599px) {
  .hero > .nav-fill {
    display: none;
  }
  .side {
    grid-row: span 3;
  }
  .logo {
    --w: 3;
    font-size: 6cqw;
  }
  .logo svg {
    width: 10cqw;
  }
  .cta {
    --w: 1;
  }
  .headline {
    --w: 4;
    --h: 3;
  }
  .headline .paint {
    padding: 5cqw;
  }
  .headline h1 {
    font-size: 14.2cqw;
  }
  .headline p {
    font-size: 1rem;
  }
  .open {
    --w: 4;
    --h: 1;
  }
  .photo {
    --w: 4;
    --h: 4;
  }
}
</style>
