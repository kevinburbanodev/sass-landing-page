<script setup lang="ts">
import { useSpotlight } from '@/shared/composables/useSpotlight'
import { useTranslations } from '@/shared/composables/useTranslations'

const { spotMove, spotLeave } = useSpotlight()
const { t } = useTranslations()
</script>

<template>
  <section id="features" class="relative z-[2] mx-auto max-w-6xl px-7 py-[72px]">
    <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.bento.eyebrow }}</div>
    <h2 class="font-display mb-10 max-w-[560px] text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">
      {{ t.bento.title }}
    </h2>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-rows:200px]">
      <!-- big cell: connection graphic -->
      <div
        class="relative col-span-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:col-span-2 lg:row-span-2"
        style="--spot: 0"
        @mousemove="spotMove"
        @mouseleave="spotLeave"
      >
        <div
          class="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style="
            opacity: var(--spot, 0);
            background: radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--accent) 20%, transparent), transparent 55%);
          "
        />
        <div class="relative">
          <div class="font-display text-[19px] font-semibold tracking-[-0.02em] text-[var(--text)]">
            {{ t.bento.bigCard.title }}
          </div>
          <div class="mt-1.5 max-w-[320px] text-sm text-[var(--text-2)]">
            {{ t.bento.bigCard.description }}
          </div>
        </div>
        <svg viewBox="0 0 400 220" class="absolute right-0 bottom-0 left-0 h-[62%] w-full">
          <g fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="6 6" style="stroke-dashoffset: 220; animation: flDraw 2s 1.2s ease forwards">
            <path d="M60 60 C 140 60, 160 120, 200 120" />
            <path d="M60 160 C 140 160, 160 120, 200 120" style="stroke: var(--accent-2)" />
            <path d="M200 120 C 260 120, 280 60, 340 60" />
            <path d="M200 120 C 260 120, 280 160, 340 160" style="stroke: var(--accent-2)" />
          </g>
          <g font-family="Geist Mono, monospace" font-size="10" fill="var(--text-2)">
            <circle cx="60" cy="60" r="15" fill="#611F69" />
            <text x="60" y="63" text-anchor="middle" fill="#fff">Sl</text>
            <circle cx="60" cy="160" r="15" fill="#EA4335" />
            <text x="60" y="163" text-anchor="middle" fill="#fff">Gm</text>
            <circle cx="200" cy="120" r="20" fill="var(--elev)" stroke="var(--accent)" />
            <text x="200" y="123" text-anchor="middle" fill="var(--text)">Fl</text>
            <circle cx="340" cy="60" r="15" fill="#5E6AD2" />
            <text x="340" y="63" text-anchor="middle" fill="#fff">Ln</text>
            <circle cx="340" cy="160" r="15" fill="#111" stroke="var(--border-2)" />
            <text x="340" y="163" text-anchor="middle" fill="#fff">No</text>
          </g>
        </svg>
      </div>

      <div
        v-for="card in t.bento.smallCards"
        :key="card.title"
        class="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-[22px]"
        style="--spot: 0"
        @mousemove="spotMove"
        @mouseleave="spotLeave"
      >
        <div
          class="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style="
            opacity: var(--spot, 0);
            background: radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--accent) 20%, transparent), transparent 55%);
          "
        />
        <div class="relative">
          <div class="font-display text-base font-semibold text-[var(--text)]">{{ card.title }}</div>
          <div class="mt-1.5 text-[13px] text-[var(--text-2)]">{{ card.description }}</div>
        </div>
      </div>

      <div
        class="relative col-span-1 flex items-center gap-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-[22px] sm:col-span-2"
        style="--spot: 0"
        @mousemove="spotMove"
        @mouseleave="spotLeave"
      >
        <div
          class="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style="
            opacity: var(--spot, 0);
            background: radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--accent) 20%, transparent), transparent 55%);
          "
        />
        <div class="relative">
          <div class="font-display text-base font-semibold text-[var(--text)]">{{ t.bento.wideCard.title }}</div>
          <div class="mt-1.5 max-w-[360px] text-[13px] text-[var(--text-2)]">
            {{ t.bento.wideCard.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
