export function useTilt() {
  function tiltMove(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1200px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`
  }

  function tiltLeave(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  }

  return { tiltMove, tiltLeave }
}
