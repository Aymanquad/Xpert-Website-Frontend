import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Users, Target, Award, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: <Users className="w-6 h-6 text-violet-400" />,
    title: 'Data-Driven',
    description: 'Performance testing and analytics to optimize for virality'
  },
  {
    icon: <Target className="w-6 h-6 text-violet-400" />,
    title: 'Rapid Testing',
    description: 'Bold core mechanics tested and refined relentlessly'
  },
  {
    icon: <Award className="w-6 h-6 text-violet-400" />,
    title: 'Mass Market Appeal',
    description: 'Polished experiences optimized for global charts'
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    title: 'Player Psychology',
    description: 'Understanding attention economics and market trends'
  }
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-[#0B0B0B] to-[#111111] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-heading"
              variants={itemVariants}
            >
              About Xpert Games
            </motion.h2>
            
            <motion.p 
              className="text-xl text-zinc-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              We are a next-gen mobile gaming studio focused on delivering fast, fun, and addictive hyper-casual games to a global audience.
            </motion.p>
            
            <motion.p 
              className="text-zinc-400 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Founded with a passion for accessible entertainment and data-driven development, we create experiences that are easy to pick up, hard to put down, and optimized for virality.
            </motion.p>

            <motion.p 
              className="text-zinc-400 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              We believe that simplicity is the new superpower. Every game we build starts with a bold core mechanic - tested rapidly, refined relentlessly, and polished for mass-market appeal.
            </motion.p>
            
            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex items-start gap-3 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-semibold text-white mb-1"
                      whileHover={{ color: "#a855f7" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-sm text-zinc-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Elements */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'from-violet-500/20 to-purple-500/20',
                'from-blue-500/20 to-cyan-500/20',
                'from-green-500/20 to-emerald-500/20',
                'from-orange-500/20 to-red-500/20'
              ].map((gradient, index) => (
                <motion.div
                  key={index}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${gradient} border border-white/10`}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                />
              ))}
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/10 rounded-full border border-violet-500/20 blur-sm"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full border border-blue-500/20 blur-sm"
              animate={{
                y: [0, 10, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}


