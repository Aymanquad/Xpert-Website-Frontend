import { useEffect, useState } from 'react'
import Button from './Button'

const NAV_ITEMS = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#team', label: 'Team' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition backdrop-blur ${
        isScrolled ? 'bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-8 max-w-[1200px]">
        <a href="#home" className="font-semibold tracking-wider uppercase">Xpert Games</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-4">
          <Button>Contact Us</Button>
        </div>
      </div>
    </header>
  )
}


