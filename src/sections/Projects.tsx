import Section from '../components/Section'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { useInViewOnce } from '../hooks/useInViewOnce'
import chatifyBanner from '../assets/chatify-banner.png'
import nutrifyBanner from '../assets/Nutrify-banner.png'
import tournifyBanner from '../assets/tournify-banner.png'

const PROJECTS = [
  {
    title: 'Chatify: Random Stranger Chat',
    category: 'Social • Realtime',
    year: '2025',
    description:
      "Lets you instantly connect with real people through fun, meaningful conversations. Whether you’re up for deep talks, casual banter, or spontaneous vibes, Chatify makes every chat natural, safe, and refreshingly simple.",
    image: chatifyBanner,
    website: 'https://chatify-privacy.vercel.app/',
    playStore: 'https://play.google.com/store/apps/details?id=com.company.blabinn'
  },
  {
    title: 'Nutrify AI: Diet & Fitness',
    category: 'Health • AI',
    year: '2025',
    description:
      "Your smart wellness companion that personalizes diets, workouts, and progress tracking using advanced AI. From calorie counting to tailored fitness plans, it’s like having a personal trainer and nutritionist in your pocket—making health simple, effective, and inspiring.",
    image: nutrifyBanner,
    website: 'https://nutrifyaicalorie-website.vercel.app/',
    playStore: 'https://play.google.com/store/apps/details?id=com.xpert.calorie'
  },
  {
    title: 'Tournify',
    category: 'Esports • Valorant',
    year: '2024',
    description:
      "All-in-one esports hub to create, join, and manage Valorant tournaments with ease. From seamless matchmaking to smooth management, Tournify makes competing effortless so you can focus on dominating the game.",
    image: tournifyBanner,
    website: 'https://tournify.vercel.app/',
    playStore: 'https://tournify.vercel.app/'
  },
  {
    title: 'NCERT Study App',
    category: 'EdTech',
    year: '2024',
    description:
      'A clean, fast study companion for NCERT—notes, Q&A, and smart revisions. (Images to be added from assets.)',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop'
  }
]

type Project = (typeof PROJECTS)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInViewOnce()
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    const x = (relX - 0.5) * 16 // px translate range
    const y = (relY - 0.5) * 16
    setParallax({ x, y })
  }

  const handleLeave = () => setParallax({ x: 0, y: 0 })

  return (
    <div
      ref={ref as any}
      className={`rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ willChange: 'transform' }}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-stretch ${
          index % 2 === 1 ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''
        }`}
      >
        {/* Text block */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</span>
            <span className="text-xs text-zinc-500">{project.year}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h3>
          <p className="text-zinc-400 mb-6">{project.description}</p>
          <div className="flex gap-3">
            <a
              href={(project as any).website || '#'}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 rounded-full bg-accent text-white text-sm"
            >
              View Details
            </a>
            <a
              href={(project as any).playStore || (project as any).website || '#'}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 rounded-full bg-white/10 text-white text-sm"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Image block with center-weighted radial fade (no hard split) */}
        <div className="relative min-h-[240px] md:min-h-full" style={{ perspective: 800 }}>
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
            style={{
              filter: 'saturate(1.05)',
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
            }}
          />
          {/* Radial mask: denser near text side, fades outward to transparent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage:
                index % 2 === 0
                  ? 'radial-gradient(120% 90% at 25% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,1) 100%)'
                  : 'radial-gradient(120% 90% at 75% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,1) 100%)',
              maskImage:
                index % 2 === 0
                  ? 'radial-gradient(120% 90% at 25% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,1) 100%)'
                  : 'radial-gradient(120% 90% at 75% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,1) 100%)'
            }}
          >
            <div
              className={`absolute inset-0 ${
                index % 2 === 0
                  ? 'bg-gradient-to-l from-transparent via-black/30 to-black/80'
                  : 'bg-gradient-to-r from-transparent via-black/30 to-black/80'
              }`}
            />
          </div>
          {/* Soft splash glow */}
          <div className="absolute -inset-12 opacity-20 blur-3xl bg-accent/20" />
          {/* Edge vignette */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="absolute bottom-4 right-4">
            <a
              href={(project as any).playStore || (project as any).website || '#'}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur text-white text-xs"
            >
              <ExternalLink className="w-4 h-4" />
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Projects</h2>
          <p className="text-xl text-zinc-400">Hand-picked product builds we’re proud of</p>
        </div>
        <div className="hidden md:flex gap-2 text-sm text-zinc-400">
          <span>Scroll</span>
          <span>→</span>
        </div>
      </div>

      {/* Alternating rectangular cards: text left/right, image right/left */}
      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}


