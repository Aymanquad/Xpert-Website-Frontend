import Section from '../components/Section'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

type QA = { q: string; a: string }

const LEFT: QA[] = [
  { q: 'What services do you offer?', a: 'End-to-end game development: design, art, engineering, optimization, and LiveOps.' },
  { q: 'How do we start?', a: 'Share a brief and timeline via our contact form. We’ll schedule a call within 24–48h.' },
  { q: 'Do you work with startups?', a: 'Yes. We scope lean MVPs, then scale. Flexible engagement to fit stage and budget.' },
  { q: 'Which engines do you use?', a: 'Unity and Unreal primarily, plus custom tech when needed for performance.' },
]

const RIGHT: QA[] = [
  { q: 'How long does a project take?', a: 'Rapid prototypes in 2–4 weeks. Full productions vary from 8–20+ weeks depending on scope.' },
  { q: 'Can you join mid-project?', a: 'Absolutely. We audit quickly, align on goals, and integrate with your team’s workflow.' },
  { q: 'What about post-launch?', a: 'We support patches, performance work, LiveOps content, and ongoing feature delivery.' },
  { q: 'How do you ensure quality?', a: 'Design reviews, automated checks, device/perf matrices, and player-focused QA gates.' },
]

function Item({ qa, defaultOpen = false }: { qa: QA; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02]">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.03]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{qa.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-sm leading-6 text-white/70">{qa.a}</div>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  return (
    <Section id="faq" className="pt-24 md:pt-32" maxWidthClass="max-w-[1200px]">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-gradient-to-b from-white/70 to-white/10" />
          <p className="text-xs tracking-[0.2em] uppercase text-white/60">Answers</p>
        </div>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
          Everything you want to know about how we work, timelines, and support.
        </p>
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
        <div className="space-y-4">
          {LEFT.map((qa, i) => (
            <Item key={`l-${i}`} qa={qa} defaultOpen={i === 0} />
          ))}
        </div>
        <div className="space-y-4">
          {RIGHT.map((qa, i) => (
            <Item key={`r-${i}`} qa={qa} />
          ))}
        </div>
      </div>

      {/* Contact pointer */}
      <div className="relative mt-12 flex items-center justify-center">
        <a href="#contact" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <HelpCircle className="h-4 w-4" />
          Didn’t find your answer? Contact us
        </a>
      </div>
    </Section>
  )
}


