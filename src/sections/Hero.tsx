import Section from '../components/Section'
import Button from '../components/Button'

export default function Hero() {
  return (
    <Section id="home" className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
        Based in Hyderabad • India
      </div>
      <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-wider uppercase">
        A Gaming • Product • Studio
      </h1>
      <p className="mt-4 text-zinc-300">We design, build, and scale games people love.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button>Work with us</Button>
        <Button variant="secondary">See projects</Button>
      </div>
    </Section>
  )
}


