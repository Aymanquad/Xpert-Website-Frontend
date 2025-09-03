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
  { 
    title: 'Cyber Defense', 
    category: 'Tower Defense', 
    year: '2024',
    description: 'Futuristic tower defense with cyberpunk theme',
    image: '/api/placeholder/400/300'
  },
  { 
    title: 'Ocean Explorer', 
    category: 'Adventure', 
    year: '2023',
    description: 'Underwater exploration with realistic physics',
    image: '/api/placeholder/400/300'
  },
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-gradient-to-b from-surface to-bg">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Our Projects
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Showcasing our latest game development achievements
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300">
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-accentOrange/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <button className="p-3 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors">
                    <Play className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs text-zinc-500">{project.year}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


