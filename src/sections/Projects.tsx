import Section from '../components/Section'
import { ExternalLink, Play } from 'lucide-react'

const PROJECTS = [
  { 
    title: 'Cosmic Quest', 
    category: 'Mobile RPG', 
    year: '2024',
    description: 'Epic space adventure with stunning 3D graphics',
    image: '/api/placeholder/400/300'
  },
  { 
    title: 'Pixel Warriors', 
    category: '2D Platformer', 
    year: '2023',
    description: 'Retro-style platformer with modern mechanics',
    image: '/api/placeholder/400/300'
  },
  { 
    title: 'Neon Racing', 
    category: 'Racing Game', 
    year: '2024',
    description: 'High-speed futuristic racing experience',
    image: '/api/placeholder/400/300'
  },
  { 
    title: 'Mystic Realms', 
    category: 'Strategy', 
    year: '2023',
    description: 'Fantasy strategy game with deep lore',
    image: '/api/placeholder/400/300'
  },
]

export default function Projects() {
  return (
    <Section id="projects" className="">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Projects</h2>
          <p className="text-xl text-zinc-400">Showcasing our latest game development achievements</p>
        </div>
        <div className="hidden md:flex gap-2 text-sm text-zinc-400">
          <span>Scroll</span>
          <span>→</span>
        </div>
      </div>

      {/* Alternating image/text project cards */}
      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch ${index % 2 === 1 ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''}`}>
            {/* Text block */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</span>
                <span className="text-xs text-zinc-500">{project.year}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-full bg-accent text-white text-sm">View Case Study</button>
                <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">Live Demo</button>
              </div>
            </div>

            {/* Visual block */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/15 to-accentOrange/15">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-3 rounded-full bg-accent hover:bg-blue-500 transition-colors">
                  <Play className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="aspect-video" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


