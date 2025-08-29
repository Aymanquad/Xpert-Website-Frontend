import { useEffect, useState } from 'react'
import Button from './Button'

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
      
      // Active section detection
      const sections = NAV_ITEMS.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-8 max-w-[1200px]">
        <a 
          href="#home" 
          className="font-bold text-xl tracking-wider uppercase hover:text-violet-400 transition-colors"
        >
          Xpert Games
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`transition-colors hover:text-white ${
                activeSection === item.href.slice(1) 
                  ? 'text-violet-400' 
                  : 'text-zinc-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:block">Contact Us</Button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`} />
              <span className={`block w-5 h-0.5 bg-white mt-1 transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-5 h-0.5 bg-white mt-1 transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="px-6 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className={`block py-2 transition-colors hover:text-white ${
                  activeSection === item.href.slice(1) 
                    ? 'text-violet-400' 
                    : 'text-zinc-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full">Contact Us</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}


