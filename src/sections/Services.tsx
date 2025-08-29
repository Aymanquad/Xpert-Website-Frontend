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

export default function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-[#0B0B0B] to-[#111111]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Our Services
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Comprehensive game development solutions from concept to launch
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <CardService 
            key={service.title} 
            title={service.title} 
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  )
}


