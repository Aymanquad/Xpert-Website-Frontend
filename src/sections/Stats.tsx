import { useEffect, useState } from 'react'
import Section from '../components/Section'
import Stat from '../components/Stat'
import { useInViewOnce } from '../hooks/useInViewOnce'

const STATS = [
  { label: 'Happy Clients', value: 18, suffix: '+' },
  { label: 'Revenue Generated', value: 50, suffix: 'M', prefix: '$' },
  { label: 'Projects Completed', value: 90, suffix: '%+' },
]

export default function Stats() {
  const { ref, isInView } = useInViewOnce()
  const [counts, setCounts] = useState([0, 0, 0])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = STATS.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev]
          const target = stat.value
          const current = newCounts[index]
          const increment = Math.ceil(target / steps)
          
          if (current < target) {
            newCounts[index] = Math.min(current + increment, target)
          }
          
          return newCounts
        })
      }, stepDuration)
    })

    return () => intervals.forEach(clearInterval)
  }, [isInView])

  return (
    <Section className="bg-gradient-to-b from-[#111111] to-[#0B0B0B]">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {STATS.map((stat, index) => (
          <Stat 
            key={stat.label}
            label={stat.label} 
            value={`${stat.prefix || ''}${counts[index]}${stat.suffix}`}
          />
        ))}
      </div>
    </Section>
  )
}


