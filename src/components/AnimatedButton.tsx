import { motion } from 'framer-motion'
import { useState } from 'react'

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick 
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "relative px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 overflow-hidden"
  
  const variantClasses = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-500/25",
    secondary: "bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5"
  }

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: { scale: 4, opacity: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.span className="relative z-10">
        {children}
      </motion.span>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        variants={rippleVariants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
      />
      
      {/* Glow effect for primary button */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-violet-400/20 rounded-full blur-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}
