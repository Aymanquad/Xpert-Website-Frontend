import Section from '../components/Section'
import FAQList from '../components/FAQ'

export default function FAQ() {
  const items = [
    { question: 'What services do you offer?', answer: 'Design, art, engineering, LiveOps, and more.' },
    { question: 'How do we start?', answer: 'Reach out via the contact form and we will schedule a call.' },
  ]
  return (
    <Section id="faq">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">FAQ</h2>
      <div className="mt-6">
        <FAQList items={items} />
      </div>
    </Section>
  )
}


