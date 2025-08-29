import Section from '../components/Section'

export default function Team() {
  const members = [
    { name: 'Alex', role: 'Producer' },
    { name: 'Bea', role: 'Engineer' },
    { name: 'Chen', role: 'Artist' },
  ]
  return (
    <Section id="team">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Team</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl border border-white/10 p-6 text-center">
            <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/5" />
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-zinc-400">{m.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}


