export function useSpotlight() {
  function spotMove(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--y', `${event.clientY - rect.top}px`)
    el.style.setProperty('--spot', '1')
  }

  function spotLeave(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    el.style.setProperty('--spot', '0')
  }

  return { spotMove, spotLeave }
}
