import { motion } from 'framer-motion'
import { useInViewOnce } from '../hooks/useInViewOnce'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function AnimatedText({ 
  text, 
  className = "", 
  delay = 0, 
  staggerDelay = 0.05 
}: AnimatedTextProps) {
  const { ref, isInView } = useInViewOnce()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
