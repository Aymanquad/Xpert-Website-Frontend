import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Stats from './sections/Stats'
import About from './sections/About'
import Team from './sections/Team'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Cta from './sections/Cta'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <Stats />
        <About />
        <Team />
        <Process />
        <Testimonials />
        <FAQ />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}


