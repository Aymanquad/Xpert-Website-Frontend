import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.5) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      
      ref.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}
