<script setup lang="ts">
import { useMagnetic } from '@/shared/composables/useMagnetic'
import { useTranslations } from '@/shared/composables/useTranslations'

const { magneticMove, magneticLeave } = useMagnetic()
const { t } = useTranslations()
</script>

<template>
  <section id="contact" class="relative z-[2] mx-auto max-w-[640px] px-7 pt-5 pb-[88px]">
    <div class="mb-10 text-center">
      <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.contact.eyebrow }}</div>
      <h2 class="font-display mb-3 text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">{{ t.contact.title }}</h2>
      <p class="text-base text-[var(--text-2)]">{{ t.contact.subtitle }}</p>
    </div>

    <form class="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9" @submit.prevent>
      <div class="flex flex-col gap-5">
        <div>
          <label for="contact-name" class="mb-1.5 block text-sm font-medium text-[var(--text)]">
            {{ t.contact.nameLabel }}
          </label>
          <input
            id="contact-name"
            type="text"
            autocomplete="name"
            class="w-full rounded-[9px] border border-[var(--border-2)] bg-[var(--elev)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>

        <div>
          <label for="contact-email" class="mb-1.5 block text-sm font-medium text-[var(--text)]">
            {{ t.contact.emailLabel }}
          </label>
          <input
            id="contact-email"
            type="email"
            autocomplete="email"
            class="w-full rounded-[9px] border border-[var(--border-2)] bg-[var(--elev)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>

        <div>
          <label for="contact-message" class="mb-1.5 block text-sm font-medium text-[var(--text)]">
            {{ t.contact.messageLabel }}
          </label>
          <textarea
            id="contact-message"
            rows="4"
            class="w-full resize-none rounded-[9px] border border-[var(--border-2)] bg-[var(--elev)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>

        <button
          type="submit"
          class="mt-1 rounded-[9px] py-3 text-sm font-semibold text-[var(--btn-text)] transition-transform duration-150 ease-out"
          style="background: var(--btn-bg); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18)"
          @mousemove="magneticMove"
          @mouseleave="magneticLeave"
        >
          {{ t.contact.submit }}
        </button>
      </div>
    </form>
  </section>
</template>
