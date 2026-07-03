<script setup lang="ts">
import { useTranslations } from '@/shared/composables/useTranslations'

const { t } = useTranslations()

const logos = ['Northwind', 'acme°', 'HELIX', 'Cadence', 'Loomly', 'Fathom↗']
</script>

<template>
  <section class="relative z-[2] mx-auto max-w-6xl px-7 pt-3 pb-2">
    <div class="mb-[22px] text-center font-mono text-[11px] tracking-[0.08em] text-[var(--text-3)] uppercase">
      {{ t.logos.caption }}
    </div>
    <div class="flex flex-wrap items-center justify-center gap-12 opacity-[.72]">
      <span v-for="logo in logos" :key="logo" class="font-display text-xl font-semibold tracking-[-0.02em] text-[var(--text-2)]">
        {{ logo }}
      </span>
    </div>
  </section>
</template>
