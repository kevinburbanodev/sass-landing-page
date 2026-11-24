<script setup lang="ts">
import { ref } from 'vue'
import { pickTreatment } from '../booking'
import { treatments, type Motif } from '../data'
import MotifArt from './MotifArt.vue'
import PatternTile from './PatternTile.vue'

const side = [
  { turn: 1, color: 'white' },
  { turn: 0, color: 'white' },
  { turn: 1, color: 'pink' },
  { turn: 0, color: 'pink' },
  { turn: 0, color: 'pink' },
  { turn: 1, color: 'pink' },
  { turn: 0, color: 'white' },
  { turn: 1, color: 'white' },
] as const

const open = ref(new Set<Motif>(['limpieza']))

function toggle(id: Motif) {
  if (!open.value.delete(id)) open.value.add(id)
}
</script>

<template>
  <section id="tratamientos" class="wallbox">
    <div class="wall">
      <div class="mural painted c-green title span">
        <div class="paint">
          <h2>Voltea la baldosa y mira cuánto cuesta.</h2>
        </div>
      </div>
      <div class="side wide">
        <PatternTile v-for="(p, i) in side" :key="i" kind="petal" :turn="p.turn" :color="p.color" />
      </div>

      <div v-for="t in treatments" :key="t.id" class="flip span" :class="{ open: open.has(t.id) }">
        <button
          type="button"
          class="tile face front"
          :class="`c-${t.color}`"
          :aria-expanded="open.has(t.id)"
          :aria-controls="`t-${t.id}`"
          @click="toggle(t.id)"
        >
          <MotifArt :motif="t.id" />
          <span class="name">{{ t.name }}</span>
        </button>
        <div :id="`t-${t.id}`" class="tile face back" :class="`c-${t.color}`" :inert="!open.has(t.id)" @click="toggle(t.id)">
          <h3>{{ t.name }}</h3>
          <p>{{ t.text }}</p>
          <p class="price">{{ t.price }}</p>
          <p class="time">{{ t.time }}</p>
          <a href="#cita" @click.stop="pickTreatment(t.id)">Pedir cita</a>
        </div>
      </div>

      <div class="mural painted c-pink note span">
        <div class="paint">
          <p>
            Si no sabes cuál necesitas, pide una <strong>valoración</strong>. Sales con un plan por escrito y decides
            en tu casa.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 0;
}
.title {
  --w: 8;
  --h: 2;
  display: flex;
  align-items: flex-end;
}
.title .paint {
  padding: 2cqw 2.4cqw;
}
.title h2 {
  font-size: min(4.4cqw, 4.5rem);
  max-width: 22ch;
}
.side {
  grid-column: span 4;
  grid-row: span 2;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
.flip {
  --w: 2;
  --h: 2;
  position: relative;
  perspective: 900px;
}
.face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.7s var(--ease);
}
.front {
  padding: 1rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.front .motif {
  height: 74%;
  width: auto;
}
.front .name {
  font-weight: 700;
  font-size: clamp(1rem, 1.5cqw, 1.4rem);
  line-height: 1.1;
}
.back {
  transform: rotateX(-180deg);
  display: flex;
  flex-direction: column;
  padding: 1.1rem;
  cursor: pointer;
  font-size: clamp(0.88rem, 1.1cqw, 1.02rem);
  line-height: 1.3;
}
.back h3 {
  font-size: clamp(1.15rem, 1.6cqw, 1.5rem);
  margin-bottom: 0.4rem;
}
.back .price {
  margin-top: auto;
  font-weight: 800;
  font-size: clamp(1.08rem, 1.55cqw, 1.5rem);
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}
.back a {
  position: relative;
  z-index: 1;
  margin-top: 0.5rem;
  font-weight: 700;
}
.flip.open .front {
  transform: rotateX(180deg);
  pointer-events: none;
}
.flip.open .back {
  transform: none;
}
.note {
  --w: 8;
  --h: 2;
  display: flex;
  align-items: center;
}
.note .paint {
  padding: 2cqw 2.4cqw;
}
.note p {
  font-size: clamp(1.15rem, 2.1cqw, 2rem);
  line-height: 1.25;
  max-width: 34ch;
}
@media (max-width: 959px) {
  .title {
    --w: 6;
  }
  .note {
    --w: 2;
  }
  .note p {
    font-size: 1.1rem;
  }
  .wide {
    display: none;
  }
  .title h2 {
    font-size: 7.6cqw;
  }
}
@media (max-width: 599px) {
  .title,
  .note {
    --w: 4;
    --h: 2;
  }
  .title .paint,
  .note .paint {
    padding: 5cqw;
  }
  .title h2 {
    font-size: 9.4cqw;
  }
  .back {
    padding: 0.75rem;
    font-size: 0.85rem;
  }
  .back h3 {
    margin-bottom: 0.2rem;
  }
  .back .price {
    font-size: 1rem;
  }
  .back a {
    margin-top: 0.25rem;
  }
}
</style>
