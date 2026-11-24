import { onBeforeUnmount, ref, watch, type Ref } from 'vue'

export function useCountUp(target: number, decimals = 0): { el: Ref<HTMLElement | null>; display: Ref<string> } {
  const el = ref<HTMLElement | null>(null)
  const display = ref((0).toFixed(decimals))
  let observer: IntersectionObserver | null = null
  let frame: number | null = null

  function animate() {
    const duration = 1300
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      display.value = (target * eased).toFixed(decimals)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
  }

  watch(el, (newEl) => {
    if (!newEl) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            observer?.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(newEl)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (frame) cancelAnimationFrame(frame)
  })

  return { el, display }
}
