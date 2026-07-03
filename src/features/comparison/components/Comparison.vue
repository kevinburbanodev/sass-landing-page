<script setup lang="ts">
import { useTranslations } from '@/shared/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <section id="comparison" class="relative z-[2] mx-auto max-w-[1000px] px-7 pt-10 pb-[72px]">
    <div class="mb-10 text-center">
      <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.comparison.eyebrow }}</div>
      <h2 class="font-display text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">{{ t.comparison.title }}</h2>
    </div>

    <div class="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <div
        class="grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-[var(--border)] bg-[var(--elev)] px-6 py-4"
      >
        <div class="font-mono text-[11px] tracking-[0.06em] text-[var(--text-3)] uppercase">{{ t.comparison.capability }}</div>
        <div
          class="text-center font-display text-[15px] font-semibold bg-clip-text text-transparent"
          style="background: linear-gradient(100deg, var(--accent), var(--accent-2)); -webkit-background-clip: text"
        >
          {{ t.comparison.flowly }}
        </div>
        <div class="text-center font-display text-[15px] font-semibold text-[var(--text-2)]">{{ t.comparison.zapier }}</div>
      </div>

      <div
        v-for="row in t.comparison.rows"
        :key="row.label"
        class="grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-[var(--border)] px-6 py-[15px] last:border-b-0"
      >
        <div class="text-sm text-[var(--text)]">{{ row.label }}</div>
        <div class="text-center text-sm font-semibold text-[var(--accent-2)]">{{ row.flowly }}</div>
        <div class="text-center text-sm text-[var(--text-3)]">{{ row.zapier }}</div>
      </div>
    </div>
  </section>
</template>
