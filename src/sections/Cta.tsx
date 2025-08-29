import Section from '../components/Section'
import Button from '../components/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Cta() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
      </div>
      
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400 mb-6">
          <Sparkles className="w-4 h-4" />
          Ready to start your project?
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Let's discuss your
          <span className="block text-violet-400">next project</span>
        </h2>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready to bring your game idea to life? We're here to help you create 
          something extraordinary that players will love.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-4 text-lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
            Schedule a Call
          </Button>
        </div>
        
        <p className="text-sm text-zinc-500 mt-6">
          Free consultation • No commitment required
        </p>
      </div>
    </Section>
  )
}


