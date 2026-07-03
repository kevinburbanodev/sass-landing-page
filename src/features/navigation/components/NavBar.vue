<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from '@/shared/composables/useTheme'
import { useMagnetic } from '@/shared/composables/useMagnetic'
import { useTranslations } from '@/shared/composables/useTranslations'

const { theme, toggleTheme } = useTheme()
const { magneticMove, magneticLeave } = useMagnetic()
const { t, locale, toggleLocale } = useTranslations()

const themeLabel = computed(() => (theme.value === 'dark' ? '☀ Light' : '☾ Dark'))
const langLabel = computed(() => (locale.value === 'en' ? 'ES' : 'EN'))
const isMenuOpen = ref(false)
</script>

<template>
  <nav class="relative z-10 mx-auto max-w-6xl px-7 py-5">
    <div class="flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5">
        <span
          class="h-[26px] w-[26px] rounded-[7px]"
          style="background: linear-gradient(135deg, var(--accent), var(--accent-2)); box-shadow: 0 0 0 1px var(--border-2) inset"
        />
        <span class="font-display text-lg font-semibold tracking-tight text-[var(--text)]">Flowly</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in t.nav.links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-3.5">
        <button
          class="hidden items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 font-mono text-[11px] tracking-wider text-[var(--text-2)] uppercase cursor-pointer sm:flex"
          @click="toggleLocale"
        >
          {{ langLabel }}
        </button>
        <button
          class="hidden items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 font-mono text-[11px] tracking-wider text-[var(--text-2)] uppercase cursor-pointer sm:flex"
          @click="toggleTheme"
        >
          {{ themeLabel }}
        </button>
        <a href="#" class="hidden text-sm text-[var(--text-2)] hover:text-[var(--text)] sm:inline">{{ t.nav.login }}</a>
        <a
          href="#contact"
          class="hidden rounded-lg px-4 py-2.5 text-sm font-semibold text-[var(--btn-text)] transition-transform duration-150 ease-out sm:inline-block"
          style="background: var(--btn-bg); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          @mousemove="magneticMove"
          @mouseleave="magneticLeave"
        >
          {{ t.nav.cta }}
        </a>

        <button
          class="flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--text)] sm:hidden"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="mt-4 flex flex-col gap-4 border-t border-[var(--border)] pt-4 sm:hidden">
      <a
        v-for="link in t.nav.links"
        :key="link.href"
        :href="link.href"
        class="text-sm text-[var(--text-2)] hover:text-[var(--text)]"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
      </a>
      <a href="#" class="text-sm text-[var(--text-2)] hover:text-[var(--text)]">{{ t.nav.login }}</a>
      <div class="flex gap-2">
        <button
          class="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 font-mono text-[11px] tracking-wider text-[var(--text-2)] uppercase"
          @click="toggleLocale"
        >
          {{ langLabel }}
        </button>
        <button
          class="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 font-mono text-[11px] tracking-wider text-[var(--text-2)] uppercase"
          @click="toggleTheme"
        >
          {{ themeLabel }}
        </button>
      </div>
      <a
        href="#contact"
        class="block rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-[var(--btn-text)]"
        style="background: var(--btn-bg)"
        @click="isMenuOpen = false"
      >
        {{ t.nav.cta }}
      </a>
    </div>
  </nav>
</template>
