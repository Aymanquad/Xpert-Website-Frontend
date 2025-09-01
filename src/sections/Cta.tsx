import { motion } from 'framer-motion'
import Section from '../components/Section'
import AnimatedButton from '../components/AnimatedButton'
import { ArrowRight, Sparkles } from 'lucide-react'

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Cta() {
  return (
    <Section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#0B0B0B]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 0.5,
              repeat: Infinity
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400 mb-6"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(139, 92, 246, 0.4)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Ready to start your project?
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss your
            </motion.span>
            <motion.span 
              className="block text-violet-400"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              next project
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Ready to bring your game idea to life? We're here to help you create 
            something extraordinary that players will love.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton variant="primary" className="px-8 py-4 text-lg">
                Start Your Project
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </AnimatedButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton variant="secondary" className="px-8 py-4 text-lg">
                Schedule a Call
              </AnimatedButton>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-sm text-zinc-500 mt-6"
            variants={itemVariants}
          >
            Free consultation • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </Section>
  )
}


