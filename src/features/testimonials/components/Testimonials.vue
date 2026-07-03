<script setup lang="ts">
import { useSpotlight } from '@/shared/composables/useSpotlight'
import { useTranslations } from '@/shared/composables/useTranslations'

const { spotMove, spotLeave } = useSpotlight()
const { t } = useTranslations()
</script>

<template>
  <section id="testimonials" class="relative z-[2] mx-auto max-w-6xl px-7 pt-10 pb-[72px]">
    <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.testimonials.eyebrow }}</div>
    <h2 class="font-display mb-10 max-w-[560px] text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">
      {{ t.testimonials.title }}
    </h2>

    <div class="grid grid-cols-1 gap-[18px] md:grid-cols-3">
      <div
        v-for="testimonial in t.testimonials.items"
        :key="testimonial.name"
        class="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-[26px]"
        style="--spot: 0"
        @mousemove="spotMove"
        @mouseleave="spotLeave"
      >
        <div
          class="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style="
            opacity: var(--spot, 0);
            background: radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--accent) 18%, transparent), transparent 55%);
          "
        />
        <p class="relative m-0 text-base leading-[1.55] text-[var(--text)]">{{ testimonial.quote }}</p>
        <div class="relative mt-auto flex items-center gap-3">
          <div
            class="font-display flex h-[38px] w-[38px] items-center justify-center rounded-full text-sm font-semibold text-white"
            :style="{ background: testimonial.gradient }"
          >
            {{ testimonial.initials }}
          </div>
          <div>
            <div class="text-[13.5px] font-semibold text-[var(--text)]">{{ testimonial.name }}</div>
            <div class="font-mono text-[11px] text-[var(--text-3)]">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
