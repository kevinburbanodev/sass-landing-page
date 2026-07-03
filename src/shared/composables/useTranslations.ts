import { computed } from 'vue'
import { useLocale } from './useLocale'
import { translations } from '@/shared/i18n/translations'

export function useTranslations() {
  const { locale, toggleLocale } = useLocale()
  const t = computed(() => translations[locale.value])

  return { t, locale, toggleLocale }
}
