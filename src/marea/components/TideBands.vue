<script setup lang="ts">
const props = withDefaults(defineProps<{ colors?: string[] }>(), {
  colors: () => ['var(--mustard)', 'var(--white)', '#19a39b'],
})

const BAND = 46

/** One rolling wave, repeated downwards so the bands stay parallel like offset stripes. */
function wave(y: number) {
  return `M-40 ${y + 210} C 180 ${y + 360}, 330 ${y - 150}, 600 ${y + 60} S 1010 ${y + 320}, 1240 ${y + 60} S 1430 ${y - 90}, 1500 ${y - 60}`
}

const bands = props.colors.map((color, i) => ({ color, d: wave(120 + i * BAND) }))
</script>

<template>
  <svg class="bands" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <path v-for="b in bands" :key="b.d" :d="b.d" fill="none" :stroke="b.color" :stroke-width="BAND + 1" />
  </svg>
</template>

<style scoped>
.bands {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
