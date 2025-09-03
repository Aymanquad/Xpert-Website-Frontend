import { motion } from 'framer-motion'
import { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Section from '../components/Section'
import { Github, Linkedin, Twitter, Globe, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: 'Daniel Bennett',
    role: 'CEO Founder',
    bio: 'Visionary leader with 15+ years in game development and business strategy',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    },
    hashtag: '#thedynamic'
  },
  {
    name: 'Alex Chen',
    role: 'Lead Game Designer',
    bio: '10+ years crafting engaging game mechanics and player experiences',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#thecreative'
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Senior Artist',
    bio: 'Specialized in 2D/3D art with a passion for character design',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#theartist'
  },
  {
    name: 'Marcus Johnson',
    role: 'Technical Lead',
    bio: 'Unity/Unreal expert with deep knowledge of game architecture',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#thebeast'
  },
  {
    name: 'Emma Thompson',
    role: 'Producer',
    bio: 'Ensuring smooth project delivery and team coordination',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#theorganizer'
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    bio: 'Strategic marketing expert driving game launches and user acquisition',
    avatar: '/api/placeholder/300/300',
    social: {
      twitter: '#',
      linkedin: '#',
      website: '#'
    },
    hashtag: '#thestrategist'
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  }
}

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, // Use native loop
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: false,
    duration: 30, // Much slower, smoother transitions
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const autoPlayRef = useRef<number | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying)
  }, [isAutoPlaying])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    
    autoPlayRef.current = setInterval(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, 6000) // 6 seconds interval for smoother experience
  }, [emblaApi])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-slide effect with better management
  useEffect(() => {
    if (!isAutoPlaying || isHovering) {
      stopAutoPlay()
      return
    }
    
    startAutoPlay()
    
    return () => {
      stopAutoPlay()
    }
  }, [isAutoPlaying, isHovering, startAutoPlay, stopAutoPlay])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [stopAutoPlay])

  return (
    <Section id="team" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 bg-accentOrange/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-heading"
            variants={cardVariants}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            The creative minds behind every successful game we develop
          </motion.p>
        </motion.div>
        
        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    className="group/card relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/5 to-white/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { type: "spring" as const, stiffness: 400, damping: 10 }
                    }}
                  >
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col p-6">
                      {/* Header with Role and Social Icons */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-violet-400 font-medium bg-violet-500/10 px-3 py-1 rounded-full">
                          {member.role}
                        </span>
                        <div className="flex gap-2">
                          {member.social.twitter && (
                            <motion.a 
                              href={member.social.twitter}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Twitter className="w-3 h-3 text-white" />
                            </motion.a>
                          )}
                          {member.social.website && (
                            <motion.a 
                              href={member.social.website}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Globe className="w-3 h-3 text-white" />
                            </motion.a>
                          )}
                          {member.social.linkedin && (
                            <motion.a 
                              href={member.social.linkedin}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Linkedin className="w-3 h-3 text-white" />
                            </motion.a>
                          )}
                          {member.social.github && (
                            <motion.a 
                              href={member.social.github}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-3 h-3 text-white" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      {/* Avatar Section */}
                      <div className="flex-1 flex items-center justify-center mb-4">
                        <motion.div 
                          className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/30 overflow-hidden shadow-lg"
                          whileHover={{ 
                            scale: 1.05,
                            rotate: 2,
                            transition: { type: "spring" as const, stiffness: 400, damping: 10 }
                          }}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
                        </motion.div>
                      </div>
                      
                      {/* Info Section */}
                      <div className="text-center">
                        <motion.h3 
                          className="text-xl font-semibold mb-2 group-hover/card:text-violet-400 transition-colors"
                          whileHover={{ color: "#a855f7" }}
                        >
                          {member.name}
                        </motion.h3>
                        
                        <p className="text-sm text-zinc-400 mb-3 leading-relaxed line-clamp-2">
                          {member.bio}
                        </p>
                        
                        <motion.span 
                          className="inline-block text-xs text-violet-400/70 font-mono bg-violet-500/10 px-3 py-1 rounded-full"
                          whileHover={{ color: "#a855f7" }}
                        >
                          {member.hashtag}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-violet-500/20 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-violet-500/20 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>

          {/* Auto-play toggle button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-violet-500/20 transition-colors shadow-lg"
            onClick={toggleAutoPlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </motion.button>

          {/* Hover indicator */}
          {isHovering && (
            <motion.div
              className="absolute top-4 left-4 px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full border border-violet-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              Paused
            </motion.div>
          )}
        </div>
        
        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-violet-400 scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              onClick={() => scrollTo(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 max-w-md mx-auto">
          <div className="w-full bg-white/10 rounded-full h-1">
            <motion.div
              className="bg-violet-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: isAutoPlaying && !isHovering ? `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` : `${(selectedIndex / scrollSnaps.length) * 100}%`
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}


