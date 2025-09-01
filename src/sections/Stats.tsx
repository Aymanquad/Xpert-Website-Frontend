import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Stat from '../components/Stat'
import { useInViewOnce } from '../hooks/useInViewOnce'

const STATS = [
  { label: 'Happy Clients', value: 18, suffix: '+', color: 'violet' },
  { label: 'Revenue Generated', value: 50, suffix: 'M', prefix: '$', color: 'blue' },
  { label: 'Projects Completed', value: 90, suffix: '%+', color: 'green' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

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
    <Section className="bg-gradient-to-b from-[#111111] to-[#0B0B0B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          ref={ref} 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <Stat 
                label={stat.label} 
                value={`${stat.prefix || ''}${counts[index]}${stat.suffix}`}
                color={stat.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}


