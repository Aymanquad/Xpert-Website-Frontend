import { useEffect, useRef, useState } from 'react'

export function useInViewOnce<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current || isInView) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      })
    }, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options, isInView])

  return { ref, isInView }
}


