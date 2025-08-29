import Section from '../components/Section'

const PROJECTS = [
  { title: 'Project Alpha', category: 'Gameplay', year: '2024' },
  { title: 'Project Beta', category: 'Branding', year: '2023' },
  { title: 'Project Gamma', category: 'Art', year: '2024' },
]

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="aspect-video bg-white/5" />
            <div className="p-4">
              <div className="text-xs text-zinc-400">{p.category}</div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-zinc-400">{p.year}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


