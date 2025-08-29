import Section from '../components/Section'

export default function Process() {
  const steps = [
    { title: 'Research', description: 'Understand goals, users, and constraints.' },
    { title: 'Implementation', description: 'Build iteratively with clear milestones.' },
    { title: 'Testing', description: 'QA, polish, and deploy with confidence.' },
  ]
  return (
    <Section id="process">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Process</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 p-6">
            <div className="text-lg font-medium">{s.title}</div>
            <div className="mt-2 text-sm text-zinc-300">{s.description}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}


