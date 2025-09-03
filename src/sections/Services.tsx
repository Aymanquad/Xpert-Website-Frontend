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
    <Section id="services" className="relative overflow-hidden">
      {/* Split layout: sticky intro left, staggered list right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sticky intro */}
        <motion.aside 
          className="lg:col-span-1 lg:sticky lg:top-24 self-start"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight font-heading mb-4 uppercase">Services</h2>
          <div className="hidden lg:block h-10 w-1 bg-white/20 rounded-full mb-6" />
          <p className="text-lg md:text-xl text-zinc-400 mb-6 max-w-sm">Comprehensive game development solutions from concept to global launch.</p>
          <div className="hidden lg:block h-px w-24 bg-white/10" />
          <p className="mt-6 text-zinc-500 text-sm max-w-sm">We tailor pods around your goals: rapid prototyping, content pipelines, liveops, and growth.</p>
        </motion.aside>

        {/* Staggered list */}
        <motion.div 
          className="lg:col-span-2 space-y-6 relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.slice(0,5).map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative ${index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-12'} before:content-[''] before:absolute before:left-2 before:top-8 before:w-6 before:h-px before:bg-white/20`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-start gap-4">
                <div className="text-xs font-mono text-zinc-500 mt-2 w-6 shrink-0">{String(index+1).padStart(2,'0')}</div>
                <CardService 
                  title={service.title} 
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}


