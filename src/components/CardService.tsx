import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CardService({ 
  icon, 
  title, 
  description 
}: { 
  icon?: React.ReactNode; 
  title: string; 
  description: string 
}) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  }

  return (
    <motion.div 
      className="group relative border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm cursor-pointer"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Enhanced hover glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accentOrange/10 transition-all duration-300"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </motion.div>
      )}
      
      <div className="relative z-10">
        {icon && (
          <motion.div 
            className="mb-6 p-3 w-fit rounded-xl bg-accent/10 border border-accent/20"
            variants={iconVariants}
            whileHover="hover"
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h3 
          className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors"
          animate={{
            color: isHovered ? "#2563EB" : "#ffffff"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-zinc-400 leading-relaxed"
          animate={{
            color: isHovered ? "#d4d4d8" : "#9ca3af"
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        {/* Enhanced hover arrow */}
        <motion.div 
          className="mt-6"
          variants={arrowVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div 
            className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg 
              className="w-4 h-4 text-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{
                x: isHovered ? 2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}


