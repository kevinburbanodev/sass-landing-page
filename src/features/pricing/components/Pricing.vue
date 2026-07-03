<script setup lang="ts">
import { useSpotlight } from '@/shared/composables/useSpotlight'
import { useMagnetic } from '@/shared/composables/useMagnetic'
import { useTranslations } from '@/shared/composables/useTranslations'

const { spotMove, spotLeave } = useSpotlight()
const { magneticMove, magneticLeave } = useMagnetic()
const { t } = useTranslations()
</script>

<template>
  <section id="pricing" class="relative z-[2] mx-auto max-w-[1080px] px-7 pt-10 pb-[100px]">
    <div class="mb-11 text-center">
      <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.pricing.eyebrow }}</div>
      <h2 class="font-display text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">
        {{ t.pricing.title }}
      </h2>
    </div>

    <div class="grid grid-cols-1 items-center gap-[18px] lg:grid-cols-3">
      <template v-for="plan in t.pricing.plans" :key="plan.name">
        <!-- Highlighted plan -->
        <div
          v-if="plan.highlighted"
          class="relative rounded-[18px] p-[1.5px] lg:scale-[1.04]"
          style="
            background: linear-gradient(140deg, var(--accent), var(--accent-2));
            box-shadow: 0 24px 70px -24px color-mix(in oklch, var(--accent) 60%, transparent);
          "
        >
          <div
            class="relative overflow-hidden rounded-[16.5px] bg-[var(--elev)] p-7"
            style="--spot: 0"
            @mousemove="spotMove"
            @mouseleave="spotLeave"
          >
            <div
              class="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style="
                opacity: var(--spot, 0);
                background: radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--accent) 26%, transparent), transparent 55%);
              "
            />
            <div class="relative">
              <div class="flex items-center justify-between">
                <div class="font-mono text-[11px] tracking-[0.08em] text-[var(--text)] uppercase">{{ plan.name }}</div>
                <span
                  class="rounded-full px-[9px] py-1 font-mono text-[10px] tracking-[0.06em] text-[var(--btn-text)] uppercase"
                  style="background: linear-gradient(100deg, var(--accent), var(--accent-2))"
                >
                  {{ plan.badge }}
                </span>
              </div>
              <div class="font-display my-3.5 text-[40px] font-semibold tracking-[-0.03em] text-[var(--text)]">{{ plan.price }}</div>
              <div class="mb-5 text-[13px] text-[var(--text-3)]">{{ plan.note }}</div>
              <a
                href="#contact"
                class="block rounded-[9px] py-[11px] text-center text-sm font-semibold text-[var(--btn-text)] transition-transform duration-150 ease-out"
                style="background: var(--btn-bg); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18)"
                @mousemove="magneticMove"
                @mouseleave="magneticLeave"
              >
                {{ plan.cta }}
              </a>
              <div class="mt-[22px] flex flex-col gap-[11px] text-[13.5px] text-[var(--text)]">
                <div v-for="feature in plan.features" :key="feature">{{ feature }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Regular plan -->
        <div v-else class="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 opacity-90">
          <div class="font-mono text-[11px] tracking-[0.08em] text-[var(--text-3)] uppercase">{{ plan.name }}</div>
          <div class="font-display my-3.5 text-[40px] font-semibold tracking-[-0.03em] text-[var(--text)]">{{ plan.price }}</div>
          <div class="mb-5 text-[13px] text-[var(--text-3)]">{{ plan.note }}</div>
          <a
            href="#contact"
            class="block rounded-[9px] border border-[var(--border-2)] py-[11px] text-center text-sm font-semibold text-[var(--text)]"
          >
            {{ plan.cta }}
          </a>
          <div class="mt-[22px] flex flex-col gap-[11px] text-[13.5px] text-[var(--text-2)]">
            <div v-for="feature in plan.features" :key="feature">{{ feature }}</div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
