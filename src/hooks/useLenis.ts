import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const lenis = new Lenis({
      smoothWheel: false, // Disabled to eliminate dragging
      lerp: 0.1,
      wheelMultiplier: 1, // Normal wheel sensitivity
      touchMultiplier: 1, // Normal touch scrolling
      duration: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [enabled])
}


