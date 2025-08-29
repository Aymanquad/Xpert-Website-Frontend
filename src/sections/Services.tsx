import Section from '../components/Section'
import CardService from '../components/CardService'

const SERVICES = [
  { title: 'Game Design', description: 'UI/UX, systems, game economy.' },
  { title: 'Art & Animation', description: '2D/3D assets and motion.' },
  { title: 'Engineering', description: 'Unity/Unreal/custom engines.' },
  { title: 'LiveOps & Monetization', description: 'A/B, IAP/Ads optimization.' },
  { title: 'Brand & Marketing', description: 'Campaigns and assets.' },
  { title: 'Publishing Support', description: 'Go-to-market assistance.' },
]

export default function Services() {
  return (
    <Section id="services">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <CardService key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </Section>
  )
}


