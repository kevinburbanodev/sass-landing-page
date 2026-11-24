<script setup lang="ts">
import { useMagnetic } from '@/shared/composables/useMagnetic'
import { useTranslations } from '@/shared/composables/useTranslations'

const { magneticMove, magneticLeave } = useMagnetic()
const { t } = useTranslations()
</script>

<template>
  <section class="relative z-[2] mx-auto mb-20 max-w-6xl px-7">
    <div class="relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] px-7 py-14 text-center">
      <div
        class="pointer-events-none absolute inset-0"
        style="background: radial-gradient(closest-side at 50% 120%, color-mix(in oklch, var(--accent) 30%, transparent), transparent)"
      />
      <div class="relative">
        <h2 class="font-display mb-3.5 text-[34px] font-semibold tracking-[-0.025em] text-[var(--text)]">
          {{ t.cta.title }}
        </h2>
        <p class="mb-[26px] text-base text-[var(--text-2)]">{{ t.cta.subtitle }}</p>
        <a
          href="#contact"
          class="inline-block rounded-[10px] px-[26px] py-3.5 text-[15px] font-semibold text-[var(--btn-text)] transition-transform duration-150 ease-out"
          style="background: var(--btn-bg); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18)"
          @mousemove="magneticMove"
          @mouseleave="magneticLeave"
        >
          {{ t.cta.button }}
        </a>
      </div>
    </div>
  </section>
</template>
