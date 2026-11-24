<script setup lang="ts">
import { ref } from 'vue'
import { useTranslations } from '@/shared/composables/useTranslations'

const { t } = useTranslations()
const openIndex = ref<number>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="relative z-[2] mx-auto max-w-[820px] px-7 pt-5 pb-[88px]">
    <div class="mb-10 text-center">
      <div class="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--accent-2)] uppercase">{{ t.faq.eyebrow }}</div>
      <h2 class="font-display text-[36px] font-semibold tracking-[-0.025em] text-[var(--text)]">{{ t.faq.title }}</h2>
    </div>

    <div class="flex flex-col gap-2.5">
      <div
        v-for="(faq, index) in t.faq.items"
        :key="faq.question"
        class="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]"
      >
        <button
          class="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-[22px] py-[18px] text-left font-display text-base font-medium text-[var(--text)]"
          @click="toggle(index)"
        >
          <span>{{ faq.question }}</span>
          <span
            class="font-mono text-lg text-[var(--text-3)] transition-transform duration-250"
            :style="{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }"
          >
            +
          </span>
        </button>
        <div
          class="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          :style="{ maxHeight: openIndex === index ? '200px' : '0px' }"
        >
          <p class="m-0 px-[22px] pb-5 text-[14.5px] leading-[1.6] text-[var(--text-2)]">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
