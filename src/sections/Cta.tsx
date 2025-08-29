import Section from '../components/Section'
import Button from '../components/Button'

export default function Cta() {
  return (
    <Section id="contact" className="text-center">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Let’s discuss your next project</h2>
      <div className="mt-6">
        <Button>Contact Us</Button>
      </div>
    </Section>
  )
}


