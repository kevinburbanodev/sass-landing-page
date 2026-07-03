<script setup lang="ts">
import { useMagnetic } from '@/shared/composables/useMagnetic'
import { useTilt } from '@/shared/composables/useTilt'
import { useCountUp } from '@/shared/composables/useCountUp'
import { useTranslations } from '@/shared/composables/useTranslations'

const { magneticMove, magneticLeave } = useMagnetic()
const { tiltMove, tiltLeave } = useTilt()
const { t } = useTranslations()

const tasks = useCountUp(142, 0)
const hours = useCountUp(11.4, 1)
const apps = useCountUp(4, 0)
const countUps = [tasks, hours, apps]

function bindStatEl(index: number) {
  return (node: unknown) => {
    countUps[index].el.value = (node as HTMLElement) ?? null
  }
}
</script>

<template>
  <header class="relative z-[2] mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-7 pt-16 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
    <div>
      <div
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[var(--text-2)] uppercase"
        style="animation: flFadeUp 0.7s 0.05s both"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" style="animation: flPulse 2.4s infinite" />
        {{ t.hero.badge }}
      </div>

      <h1 class="font-display mb-5 text-[28px] leading-[1.12] font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-[42px] sm:leading-[1.06] sm:tracking-[-0.03em] lg:text-[50px]">
        <span class="block overflow-hidden py-[0.06em] whitespace-nowrap">
          <span class="inline-block pb-[0.12em]" style="animation: flSlideUp 0.9s 0.1s cubic-bezier(0.2, 0.8, 0.2, 1) both">
            {{ t.hero.titleLine1 }}
          </span>
        </span>
        <span class="block overflow-hidden py-[0.06em] whitespace-nowrap">
          <span class="inline-block pb-[0.12em]" style="animation: flSlideUp 0.9s 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) both">
            {{ t.hero.titleLine2 }}
          </span>
        </span>
        <span class="block overflow-hidden py-[0.06em] whitespace-nowrap">
          <span
            class="inline-block bg-clip-text pb-[0.12em] text-transparent"
            style="
              background: linear-gradient(100deg, var(--accent), var(--accent-2));
              -webkit-background-clip: text;
              animation: flSlideUp 0.9s 0.34s cubic-bezier(0.2, 0.8, 0.2, 1) both;
            "
          >
            {{ t.hero.titleLine3 }}
          </span>
        </span>
      </h1>

      <p
        class="mb-8 max-w-[440px] text-lg leading-relaxed text-[var(--text-2)]"
        style="animation: flFadeUp 0.7s 0.5s both"
      >
        {{ t.hero.subtitle }}
      </p>

      <div class="flex items-center gap-3.5" style="animation: flFadeUp 0.7s 0.6s both">
        <a
          href="#contact"
          class="inline-block rounded-[9px] px-[22px] py-3.5 text-[15px] font-semibold text-[var(--btn-text)] transition-transform duration-150 ease-out"
          style="background: var(--btn-bg); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18)"
          @mousemove="magneticMove"
          @mouseleave="magneticLeave"
        >
          {{ t.hero.ctaPrimary }}
        </a>
        <a
          href="#features"
          class="inline-flex items-center gap-2 rounded-[9px] border border-[var(--border-2)] px-5 py-3.5 text-[15px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--elev)]"
        >
          {{ t.hero.ctaSecondary }}
        </a>
      </div>

      <div class="mt-11 flex gap-8" style="animation: flFadeUp 0.7s 0.7s both">
        <div v-for="(stat, index) in t.hero.stats" :key="stat.label">
          <div class="font-display text-[26px] font-semibold tracking-[-0.02em] text-[var(--text)]">
            <span :ref="bindStatEl(index)">{{ countUps[index].display.value }}</span>{{ stat.suffix }}
          </div>
          <div class="mt-1 font-mono text-[11px] tracking-[0.06em] text-[var(--text-3)] uppercase">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div
      class="[transform-style:preserve-3d] will-change-transform"
      style="transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); animation: flFloat 6s ease-in-out infinite"
      @mousemove="tiltMove"
      @mouseleave="tiltLeave"
    >
      <div
        class="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
        style="box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.6)"
      >
        <div class="flex items-center gap-2.5 border-b border-[var(--border)] px-3.5 py-3">
          <div class="flex gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-[var(--border-2)]" />
            <span class="h-2.5 w-2.5 rounded-full bg-[var(--border-2)]" />
            <span class="h-2.5 w-2.5 rounded-full bg-[var(--border-2)]" />
          </div>
          <span class="ml-1.5 font-mono text-[11px] text-[var(--text-3)]">{{ t.hero.mockup.breadcrumb }}</span>
          <span class="ml-auto rounded-md border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-3)]">
            ⌘K
          </span>
        </div>
        <div class="grid min-h-[280px] grid-cols-[120px_1fr]">
          <div class="flex flex-col gap-1 border-r border-[var(--border)] p-2.5">
            <div class="rounded-md bg-[var(--elev)] px-2.5 py-1.5 text-xs text-[var(--text)]">
              {{ t.hero.mockup.sidebar[0] }}
            </div>
            <div v-for="item in t.hero.mockup.sidebar.slice(1)" :key="item" class="px-2.5 py-1.5 text-xs text-[var(--text-3)]">
              {{ item }}
            </div>
          </div>
          <div class="flex flex-col gap-3 p-[18px]">
            <template v-for="(step, index) in t.hero.mockup.steps" :key="step.title">
              <div
                class="flex items-center gap-2.5 rounded-[10px] border px-3 py-2.5"
                :class="step.accent ? '' : 'border-[var(--border)]'"
                :style="
                  step.accent
                    ? { background: 'var(--elev)', borderColor: 'color-mix(in oklch, var(--accent) 40%, var(--border))' }
                    : { background: 'var(--elev)' }
                "
              >
                <span
                  class="flex h-[22px] w-[22px] items-center justify-center rounded-md text-[11px] text-white"
                  :style="{ background: step.iconBg, border: step.iconBg === '#111111' ? '1px solid var(--border-2)' : 'none' }"
                >
                  {{ step.icon }}
                </span>
                <div>
                  <div class="text-xs font-medium text-[var(--text)]">{{ step.title }}</div>
                  <div class="font-mono text-[10px] text-[var(--text-3)]">{{ step.meta }}</div>
                </div>
              </div>
              <div v-if="index < t.hero.mockup.steps.length - 1" class="ml-[22px] h-2.5 w-px bg-[var(--border-2)]" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
