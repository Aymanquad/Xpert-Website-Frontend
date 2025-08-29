import Section from '../components/Section'
import { Users, Target, Award, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: <Users className="w-6 h-6 text-violet-400" />,
    title: 'Expert Team',
    description: '15+ years combined experience in game development'
  },
  {
    icon: <Target className="w-6 h-6 text-violet-400" />,
    title: 'Quality Focus',
    description: 'Pixel-perfect attention to detail in every project'
  },
  {
    icon: <Award className="w-6 h-6 text-violet-400" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in game design and development'
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    title: 'Fast Delivery',
    description: 'Agile development process for quick turnaround times'
  }
]

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-[#0B0B0B] to-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            More About Us
          </h2>
          
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            We are a passionate team of game developers, designers, and creative professionals 
            dedicated to crafting exceptional gaming experiences that captivate players worldwide.
          </p>
          
          <p className="text-zinc-400 mb-8 leading-relaxed">
            With over a decade of experience in the gaming industry, we've helped launch 
            successful titles across multiple platforms, from mobile games to PC and console experiences.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Elements */}
        <div className="relative">
          {/* Main Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20" />
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20" />
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20" />
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/10 rounded-full border border-violet-500/20 blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full border border-blue-500/20 blur-sm" />
        </div>
      </div>
    </Section>
  )
}


