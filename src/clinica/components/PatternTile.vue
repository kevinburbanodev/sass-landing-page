<script setup lang="ts">
withDefaults(
  defineProps<{ kind?: 'arc' | 'petal' | 'wave'; turn?: 0 | 1 | 2 | 3; color?: 'cobalt' | 'pink' | 'green' | 'white' }>(),
  { kind: 'arc', turn: 0, color: 'white' },
)
</script>

<template>
  <div class="tile pattern" :class="`c-${color}`" aria-hidden="true">
    <svg viewBox="0 0 100 100" :style="{ transform: `rotate(${turn * 90}deg)` }">
      <template v-if="kind === 'arc'">
        <path d="M0 0h100a100 100 0 0 1-100 100Z" fill="var(--m2)" />
        <path d="M0 0h62a62 62 0 0 1-62 62Z" fill="var(--m1)" />
        <path d="M0 0h28a28 28 0 0 1-28 28Z" fill="var(--m3)" />
      </template>
      <template v-else-if="kind === 'petal'">
        <path d="M0 0c60 0 100 40 100 100C40 100 0 60 0 0Z" fill="var(--m2)" />
        <path d="M18 18c36 4 60 28 64 64C46 78 22 54 18 18Z" fill="var(--m1)" />
      </template>
      <path v-else d="M0 32c25-24 41 18 67 0 12-8 21-10 33-4v36c-12-6-21-4-33 4-26 18-42-24-67 0Z" fill="var(--m2)" />
    </svg>
  </div>
</template>
