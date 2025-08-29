import Section from '../components/Section'
import Button from '../components/Button'

export default function Hero() {
  return (
    <Section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
          <div className="w-2 h-2 bg-violet-400 rounded-full" />
          Based in Hyderabad • India
        </div>
        
        {/* Main Headline */}
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="block text-white">A GAMING</span>
          <span className="block text-violet-400">• PRODUCT •</span>
          <span className="block text-white">STUDIO</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          We design, build, and scale games people love.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="px-8 py-4 text-lg">
            Work with us
          </Button>
          <Button variant="secondary" className="px-8 py-4 text-lg">
            See projects →
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </Section>
  )
}


