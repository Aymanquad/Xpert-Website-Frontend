import Section from '../components/Section'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInViewOnce } from '../hooks/useInViewOnce'

type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'David Chen',
    role: 'CEO, Pixel Studios',
    quote:
      'Xpert Games delivered an exceptional mobile game that exceeded our expectations. Their attention to detail and creative vision brought our concept to life perfectly.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Product Manager, GameCorp',
    quote:
      'Working with Xpert Games was a game-changer for our project. Their technical expertise and collaborative approach ensured we launched on time with outstanding quality.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Founder, IndieDev Studios',
    quote:
      'The team at Xpert Games transformed our rough prototype into a polished, market-ready game. Their passion for gaming shines through in every detail.',
    rating: 5,
  },
  {
    name: 'Sara Ahmed',
    role: 'Head of Publishing, NovaPlay',
    quote:
      'From kickoff to launch, the process was smooth and transparent. The craftsmanship and performance tuning were top-tier.',
    rating: 5,
  },
  {
    name: 'Leo Martins',
    role: 'CTO, HyperArcade',
    quote:
      'Rock-solid engineering with a design sense. Our metrics improved across the board post-release.',
    rating: 5,
  },
]

function Rating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="group relative w-[420px] md:w-[520px] shrink-0">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] px-6 md:px-7 pt-10 md:pt-11 pb-6 md:pb-7 backdrop-blur-sm transition-transform duration-300">
        <div className="absolute top-2 left-6 md:left-7 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
          <Quote className="h-4 w-4 text-white/80" />
        </div>
        <Rating count={t.rating} />
        <blockquote className="mt-3 text-[0.95rem] md:text-base leading-7 text-white/80">“{t.quote}”</blockquote>
        <div className="mt-5 flex items-center gap-3">
          <img
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(t.name)}`}
            alt={`${t.name} avatar`}
            className="h-10 w-10 shrink-0 rounded-full ring-1 ring-white/15"
            loading="lazy"
          />
          <div>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-white/60">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, isInView } = useInViewOnce()

  const row1 = [...TESTIMONIALS, ...TESTIMONIALS]
  const row2 = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()]

  return (
    <Section id="testimonials" className="pt-28 md:pt-36" maxWidthClass="max-w-[1400px]">
      {/* Background visuals */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      <div className="relative text-center">
        <div className="inline-flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-gradient-to-b from-white/70 to-white/10" />
          <p className="text-xs tracking-[0.2em] uppercase text-white/60">Voices from partners</p>
        </div>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Client Testimonials</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-white/70">
          Proof that outcomes and experience matter. Trusted by teams who ship.
        </p>
      </div>

      {/* Marquee rows */}
      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative mt-12 space-y-10">
        {/* Row 1 - fade once, scroll forever */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined} transition={{ duration: 0.6 }}>
          <div className="overflow-hidden -mx-6 md:-mx-10 py-3">
            <motion.div
              initial={{ x: 0 }}
              animate={isInView ? { x: ['0%', '-50%'] } : undefined}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
              className="flex gap-6 md:gap-8 will-change-transform"
            >
              {row1.map((t, i) => (
                <Card key={`r1-${i}-${t.name}`} t={t} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Row 2 - fade once, scroll forever */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="overflow-hidden -mx-6 md:-mx-10 py-3">
            <motion.div
              initial={{ x: 0 }}
              animate={isInView ? { x: ['-50%', '0%'] } : undefined}
              transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
              className="flex gap-6 md:gap-8 will-change-transform"
            >
              {row2.map((t, i) => (
                <Card key={`r2-${i}-${t.name}`} t={t} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="relative mt-16 flex items-center justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm font-medium backdrop-blur transition-colors hover:border-white/25"
        >
          <span>Let’s build something great</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </Section>
  )
}


