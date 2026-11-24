<script setup lang="ts">
import type { Motif } from '../data'

defineProps<{ motif: Motif }>()
const TOOTH =
  'M50 18c-9-8-31-9-34 12-2 14 5 20 7 34 2 13 4 27 11 27 8 0 6-25 16-25s8 25 16 25c7 0 9-14 11-27 2-14 9-20 7-34-3-21-25-20-34-12Z'
</script>

<template>
  <svg viewBox="0 0 100 100" aria-hidden="true" class="motif">
    <template v-if="motif === 'valoracion'">
      <path :d="TOOTH" fill="var(--m1)" />
      <circle cx="58" cy="46" r="23" fill="var(--m2)" />
      <circle cx="58" cy="46" r="15" fill="var(--m3)" />
      <rect x="70" y="62" width="10" height="30" rx="5" transform="rotate(-42 75 66)" fill="var(--m2)" />
    </template>
    <template v-else-if="motif === 'limpieza'">
      <path :d="TOOTH" fill="var(--m1)" />
      <path d="M36 22l5 13 13 5-13 5-5 13-5-13-13-5 13-5Z" fill="var(--m2)" />
      <path d="M66 46l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="var(--m3)" />
    </template>
    <template v-else-if="motif === 'resina'">
      <path :d="TOOTH" fill="var(--m1)" />
      <path d="M50 18c9-8 31-9 34 12 1 6-5 18-17 18-11 0-20-14-17-30Z" fill="var(--m2)" />
    </template>
    <template v-else-if="motif === 'blanqueamiento'">
      <path :d="TOOTH" fill="var(--m2)" />
      <path
        d="M50 18c9-8 31-9 34 12 2 14-5 20-7 34-2 13-4 27-11 27-8 0-6-25-16-25Z"
        fill="var(--m1)"
      />
    </template>
    <template v-else-if="motif === 'endodoncia'">
      <path :d="TOOTH" fill="var(--m1)" />
      <path
        d="M36 36c8 8 20 8 28 0 1 12 2 18 1 26s-1 12-2 18M36 36c-1 12-2 18-1 26s1 12 2 18"
        fill="none"
        stroke="var(--m2)"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="motif === 'corona'">
      <path :d="TOOTH" fill="var(--m1)" />
      <path d="M50 10c-10-8-35-9-38 14-1 10 1 16 4 24h68c3-8 5-14 4-24-3-23-28-22-38-14Z" fill="var(--m2)" />
      <path d="M22 26c3-9 13-10 20-7" fill="none" stroke="var(--m3)" stroke-width="5" stroke-linecap="round" />
    </template>
    <template v-else-if="motif === 'implante'">
      <path d="M50 12c-9-7-29-8-32 10-1 9 1 14 4 22h56c3-8 5-13 4-22-3-18-23-17-32-10Z" fill="var(--m1)" />
      <path d="M38 48h24l-3 46H41Z" fill="var(--m2)" />
      <path d="M33 57h34M34 68h32M35 79h30" stroke="var(--m3)" stroke-width="5" stroke-linecap="round" />
    </template>
    <template v-else>
      <rect x="4" y="26" width="28" height="50" rx="12" fill="var(--m1)" />
      <rect x="36" y="22" width="28" height="58" rx="12" fill="var(--m1)" />
      <rect x="68" y="26" width="28" height="50" rx="12" fill="var(--m1)" />
      <path d="M0 50h100" stroke="var(--m2)" stroke-width="5" />
      <rect x="11" y="43" width="14" height="14" fill="var(--m3)" />
      <rect x="43" y="43" width="14" height="14" fill="var(--m3)" />
      <rect x="75" y="43" width="14" height="14" fill="var(--m3)" />
    </template>
  </svg>
</template>
