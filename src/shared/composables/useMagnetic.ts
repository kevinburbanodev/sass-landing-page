export function useMagnetic() {
  function magneticMove(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * 0.3
    const y = (event.clientY - rect.top - rect.height / 2) * 0.5
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
  }

  function magneticLeave(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    el.style.transform = 'translate(0, 0)'
  }

  return { magneticMove, magneticLeave }
}
