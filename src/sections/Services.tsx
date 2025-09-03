import { motion } from 'framer-motion'
import Section from '../components/Section'
import CardService from '../components/CardService'
import { Gamepad2, Palette, Code, TrendingUp, Megaphone, Rocket } from 'lucide-react'

const SERVICES = [
  { 
    title: 'Game Design', 
    description: 'UI/UX design, game systems, and economy balancing for engaging player experiences.',
    icon: <Gamepad2 className="w-8 h-8 text-violet-400" />
  },
  { 
    title: 'Art & Animation', 
    description: '2D/3D assets, character design, and smooth animations that bring games to life.',
    icon: <Palette className="w-8 h-8 text-violet-400" />
  },
  { 
    title: 'Engineering', 
    description: 'Unity, Unreal Engine, and custom solutions for robust, scalable game development.',
    icon: <Code className="w-8 h-8 text-violet-400" />
  },
  { 
    title: 'LiveOps & Monetization', 
    description: 'A/B testing, IAP optimization, and data-driven strategies for maximum revenue.',
    icon: <TrendingUp className="w-8 h-8 text-violet-400" />
  },
  { 
    title: 'Brand & Marketing', 
    description: 'Creative campaigns, asset creation, and go-to-market strategies that drive growth.',
    icon: <Megaphone className="w-8 h-8 text-violet-400" />
  },
  { 
    title: 'Publishing Support', 
    description: 'End-to-end publishing assistance from concept to global market launch.',
    icon: <Rocket className="w-8 h-8 text-violet-400" />
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

export default function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-bg to-surface relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive game development solutions from concept to launch
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CardService 
                title={service.title} 
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}


