import { ref, watchEffect } from 'vue'

export type Locale = 'en' | 'es'

const STORAGE_KEY = 'flowly-locale'

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'es' ? 'es' : 'en'
}

const locale = ref<Locale>(getInitialLocale())

watchEffect(() => {
  document.documentElement.lang = locale.value
  localStorage.setItem(STORAGE_KEY, locale.value)
})

export function useLocale() {
  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'es' : 'en'
  }

  return { locale, toggleLocale }
}
