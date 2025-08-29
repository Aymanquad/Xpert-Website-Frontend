import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">More About Us</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="text-zinc-300">
          <p>
            We are a creative gaming studio focused on building delightful, scalable
            experiences.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>End-to-end product delivery</li>
            <li>Cross-platform expertise</li>
            <li>LiveOps and growth analytics</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl bg-white/5" />
          <div className="aspect-square rounded-xl bg-white/5" />
          <div className="aspect-square rounded-xl bg-white/5" />
          <div className="aspect-square rounded-xl bg-white/5" />
        </div>
      </div>
    </Section>
  )
}


