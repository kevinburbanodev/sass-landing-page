<script setup lang="ts">
import { computed, ref } from 'vue'
import { sideA, sideB } from '../data'
import PlateDisc from './PlateDisc.vue'

const side = ref<'A' | 'B'>('A')
const index = ref(2) // the hero already shows the first plate
const tracks = computed(() => (side.value === 'A' ? sideA : sideB))
const track = computed(() => tracks.value[index.value])
const angle = computed(() => 3 + index.value * 5)

function flip(next: 'A' | 'B') {
  if (side.value === next) return
  side.value = next
  index.value = 0
}
</script>

<template>
  <section id="carta" class="menu">
    <div class="player">
      <Transition name="drop" mode="out-in">
        <PlateDisc :key="track.id" class="platter" :plate="track.plate" :vinyl="track.vinyl" :label="track.name" spin />
      </Transition>
      <svg class="arm" viewBox="0 0 120 420" aria-hidden="true" :style="{ transform: `rotate(${angle}deg)` }">
        <circle cx="60" cy="60" r="46" fill="var(--mustard)" />
        <circle cx="60" cy="60" r="20" fill="var(--wine)" />
        <path d="M60 60v270l-18 44" fill="none" stroke="var(--white)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="22" y="364" width="34" height="46" rx="7" transform="rotate(22 39 387)" fill="var(--mustard)" />
      </svg>
    </div>

    <div class="list">
      <div class="sides" role="group" aria-label="Lado de la carta">
        <button type="button" :aria-pressed="side === 'A'" @click="flip('A')">
          <span class="big">Lado A</span> Platos
        </button>
        <button type="button" :aria-pressed="side === 'B'" @click="flip('B')">
          <span class="big">Lado B</span> Bebidas y dulces
        </button>
      </div>

      <ol>
        <li v-for="(t, i) in tracks" :key="t.id">
          <button type="button" :aria-pressed="i === index" @click="index = i">
            <span class="id">{{ t.id }}</span>
            <span class="name">{{ t.name }}</span>
            <span class="price">{{ t.price }}</span>
            <span class="text">{{ t.text }}</span>
          </button>
        </li>
      </ol>
      <p class="foot">Carta de ejemplo. Precios con impuestos.</p>
    </div>
  </section>
</template>

<style scoped>
.menu {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 5rem);
  align-items: center;
  padding: clamp(3rem, 7vw, 7rem) var(--edge);
  background: var(--turquoise);
  color: #fff;
}
.player {
  position: relative;
  display: grid;
  align-items: center;
  aspect-ratio: 1;
  padding: 4%;
  border-radius: 2.2rem;
  background: var(--orange);
}
.platter {
  width: 88%;
}
.arm {
  position: absolute;
  top: 3%;
  right: 2%;
  width: 22%;
  transform-origin: 50% 14.3%;
  transition: transform 0.9s var(--ease);
}
.drop-enter-active,
.drop-leave-active {
  transition:
    transform 0.45s var(--ease),
    opacity 0.3s;
}
.drop-enter-from {
  opacity: 0;
  transform: scale(0.9) rotate(-40deg);
}
.drop-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
.sides {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 1.6rem;
}
.sides button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding: 1rem 1.3rem 1.1rem;
  border: 0;
  border-radius: 1.4rem;
  background: #045052;
  color: #fff;
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.3s var(--ease),
    color 0.3s var(--ease);
}
.sides button:hover {
  background: #034345;
}
.sides .big {
  font-family: 'Bagel Fat One', sans-serif;
  font-weight: 400;
  font-size: clamp(2rem, 4.3vw, 4rem);
  line-height: 0.9;
}
.sides button[aria-pressed='true'] {
  background: var(--mustard);
  color: var(--wine-deep);
}
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li button {
  display: grid;
  grid-template-columns: 2.6rem 1fr auto;
  column-gap: 0.6rem;
  align-items: baseline;
  width: 100%;
  padding: 0.95rem 0.6rem;
  border: 0;
  border-bottom: 2px solid #045052;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
li button:hover .name {
  text-decoration: underline;
  text-underline-offset: 0.15em;
  text-decoration-thickness: 3px;
}
.id {
  font-weight: 700;
}
.name {
  font-family: 'Bagel Fat One', sans-serif;
  font-size: clamp(1.45rem, 2.2vw, 2.1rem);
  line-height: 1.05;
}
.price {
  font-weight: 700;
  font-size: 1.25rem;
  font-variant-numeric: tabular-nums;
}
.text {
  grid-column: 2 / -1;
  max-width: 44ch;
  margin-top: 0.2rem;
}
li [aria-pressed='true'] .name {
  color: var(--mustard);
}
.foot {
  margin-top: 1.2rem;
}
@media (max-width: 899px) {
  .menu {
    grid-template-columns: minmax(0, 1fr);
  }
  .player {
    border-radius: 1.6rem;
  }
}
</style>
