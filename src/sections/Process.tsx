import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Search, Wrench, CheckCircle2, Rocket } from 'lucide-react'
import { useInViewOnce } from '../hooks/useInViewOnce'

type Step = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accentFrom: string
  accentTo: string
}

export default function Process() {
  const { ref, isInView } = useInViewOnce()

  const steps: Step[] = [
    {
      title: 'Discover',
      description: 'Deep dive on goals, users, market and constraints. Define success metrics.',
      icon: Search,
      accentFrom: 'from-sky-400/60',
      accentTo: 'to-cyan-400/60',
    },
    {
      title: 'Build',
      description: 'Design systems and iterate fast. Ship high-quality, scalable foundations.',
      icon: Wrench,
      accentFrom: 'from-violet-400/60',
      accentTo: 'to-fuchsia-400/60',
    },
    {
      title: 'Validate',
      description: 'Test, measure, and refine. Accessibility, performance, and reliability first.',
      icon: CheckCircle2,
      accentFrom: 'from-emerald-400/60',
      accentTo: 'to-teal-400/60',
    },
    {
      title: 'Launch',
      description: 'Deploy with confidence. Monitor, learn, and continue the improvement loop.',
      icon: Rocket,
      accentFrom: 'from-amber-400/60',
      accentTo: 'to-orange-400/60',
    },
  ]

  return (
    <Section id="process" className="">
      {/* Background visuals */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-gradient-to-b from-white/70 to-white/10" />
          <p className="text-xs tracking-[0.2em] uppercase text-white/60">How we work</p>
        </div>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          A modern, outcome-driven process
        </h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
          From discovery to launch, our flow is built to deliver clarity, speed, and quality. Every
          step compounds value.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative mt-12">
        {/* Connector line (responsive) */}
        <div aria-hidden className="absolute left-9 top-0 hidden h-full w-[2px] bg-white/10 md:left-0 md:right-0 md:mx-24 md:mt-16 md:block md:h-[2px]" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Index badge and connector dots */}
                <div className="absolute -left-0.5 top-6 z-10 md:static md:mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <span className="text-sm font-semibold text-white/70">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-colors hover:border-white/20">
                  {/* Animated gradient ring */}
                  <div className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r ${step.accentFrom} ${step.accentTo}`} />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.accentFrom} ${step.accentTo} text-black/90 ring-1 ring-white/20`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-wide">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/70">{step.description}</p>

                    {/* Progress bar under each card */}
                    <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : undefined}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${step.accentFrom} ${step.accentTo}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}


