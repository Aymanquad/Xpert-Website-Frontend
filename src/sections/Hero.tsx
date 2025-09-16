import { motion } from 'framer-motion'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedText from '../components/AnimatedText'
import FloatingParticles from '../components/FloatingParticles'
import { useParallax } from '../hooks/useParallax'
import XpertLogo from '../assets/Xpert-logo.png'

export default function Hero() {
  const logoParallaxRef = useParallax<HTMLImageElement>(0.3)
  const blob1Ref = useParallax<HTMLDivElement>(0.2)
  const blob2Ref = useParallax<HTMLDivElement>(0.4)
  const circleRef = useParallax<HTMLDivElement>(0.1)

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-bg">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Floating Xpert Logo Background with dual overlays (no glow) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Base darker overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Secondary lighter overlay for subtle depth */}
        <div className="absolute inset-0 bg-black/20" />
        <img 
          ref={logoParallaxRef}
          src={XpertLogo} 
          alt="Xpert Logo Background" 
          className="w-[800px] h-[800px] object-contain select-none pointer-events-none animate-float opacity-15"
        />
      </div>
      
      {/* Decorative Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-glow"
        />
        <div 
          ref={blob2Ref}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow"
        />
        <div 
          ref={circleRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full animate-glow"
        />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-10">
        {/* Location Badge with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
        >
          <motion.div 
            className="w-2 h-2 bg-violet-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Based in Hyderabad • India
        </motion.div>
        
        {/* Main Headline with Animated Text */}
        <div className="mt-8">
          <AnimatedText 
            text="NEXT-GEN" 
            className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading text-white"
            delay={0.4}
          />
          <AnimatedText 
            text="• MOBILE •" 
            className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading text-accent"
            delay={0.6}
          />
          <AnimatedText 
            text="GAMING" 
            className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading text-white"
            delay={0.8}
          />
        </div>
        
        {/* Subtitle with Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          Fast, fun, and addictive hyper-casual games that are easy to pick up, hard to put down, and optimized for virality.
        </motion.p>
        
        {/* CTA Buttons with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton variant="primary">
            Work with us
          </AnimatedButton>
          <AnimatedButton variant="secondary">
            See projects →
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}


