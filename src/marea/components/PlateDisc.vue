<script setup lang="ts">
import type { Plate } from '../data'

defineProps<{ plate?: Plate; vinyl?: string; label?: string; spin?: boolean }>()
</script>

<template>
  <div class="disc" :class="{ spin }">
    <div class="turn">
      <div v-if="plate" class="plate">
        <img
          :src="plate.src"
          :alt="plate.alt"
          :style="{ width: `${plate.width}%`, left: `${plate.left}%`, top: `${plate.top}%` }"
        />
      </div>
      <div v-else class="paper" :style="{ background: vinyl }">
        <span>{{ label }}</span>
        <i />
      </div>
    </div>
  </div>
</template>

<style scoped>
.disc {
  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    repeating-radial-gradient(circle at 50% 50%, rgb(255 255 255 / 0.07) 0 1px, transparent 1px 5px),
    var(--wine-deep);
}
.turn {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}
.spin .turn {
  animation: turn 5s var(--ease);
}
.plate {
  position: absolute;
  inset: 9%;
  border-radius: 50%;
  overflow: hidden;
}
.plate img {
  position: absolute;
  max-width: none;
  height: auto;
}
.paper {
  position: absolute;
  inset: 22%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  color: #fff;
  font-family: 'Bagel Fat One', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 2.4rem);
  line-height: 0.95;
}
.paper span {
  padding: 0 10% 46%;
}
.paper i {
  position: absolute;
  width: 8%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--wine-deep);
}
/* A short spin that settles, so nothing moves forever. */
@keyframes turn {
  from {
    transform: rotate(-300deg);
  }
}
</style>
