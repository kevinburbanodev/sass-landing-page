<script setup lang="ts">
import { useTranslations } from '@/shared/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <footer class="relative z-[2] border-t border-[var(--border)] px-7 pt-14 pb-8">
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div class="col-span-2 sm:col-span-4 lg:col-span-1">
          <div class="mb-2 flex items-center gap-2.5">
            <span
              class="h-[22px] w-[22px] rounded-[6px]"
              style="background: linear-gradient(135deg, var(--accent), var(--accent-2)); box-shadow: 0 0 0 1px var(--border-2) inset"
            />
            <span class="font-display text-base font-semibold tracking-tight text-[var(--text)]">Flowly</span>
          </div>
          <p class="max-w-[220px] text-sm text-[var(--text-3)]">{{ t.footer.tagline }}</p>
        </div>

        <div v-for="column in t.footer.columns" :key="column.title">
          <h3 class="font-mono text-[11px] tracking-[0.06em] text-[var(--text-3)] uppercase">{{ column.title }}</h3>
          <ul class="mt-4 flex flex-col gap-3">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
        <p class="font-mono text-xs text-[var(--text-3)]">© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</p>
        <div class="flex items-center gap-2.5">
          <span
            class="h-[18px] w-[18px] rounded-[5px]"
            style="background: linear-gradient(135deg, var(--accent), var(--accent-2)); box-shadow: 0 0 0 1px var(--border-2) inset"
          />
          <span class="font-display text-sm font-semibold tracking-tight text-[var(--text)]">Flowly</span>
        </div>
      </div>
    </div>
  </footer>
</template>
