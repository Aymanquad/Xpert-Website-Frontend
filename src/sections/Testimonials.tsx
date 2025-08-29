import Section from '../components/Section'

export default function Testimonials() {
  const quotes = [
    { name: 'Client A', role: 'CEO, Alpha', quote: 'Outstanding delivery and quality.' },
    { name: 'Client B', role: 'PM, Beta', quote: 'Great collaboration and results.' },
  ]
  return (
    <Section id="testimonials">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Testimonials</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q) => (
          <div key={q.name} className="rounded-2xl border border-white/10 p-6">
            <div className="text-zinc-300">“{q.quote}”</div>
            <div className="mt-3 text-sm text-zinc-400">{q.name} — {q.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}


