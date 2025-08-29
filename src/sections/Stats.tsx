import Section from '../components/Section'
import Stat from '../components/Stat'

export default function Stats() {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Stat label="Happy Clients" value="18+" />
        <Stat label="Revenue" value="$50M" />
        <Stat label="Projects Done" value="90%+" />
      </div>
    </Section>
  )
}


