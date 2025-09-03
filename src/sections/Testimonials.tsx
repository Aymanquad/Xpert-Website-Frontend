import Section from '../components/Section'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'David Chen',
    role: 'CEO, Pixel Studios',
    quote: 'Xpert Games delivered an exceptional mobile game that exceeded our expectations. Their attention to detail and creative vision brought our concept to life perfectly.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Product Manager, GameCorp',
    quote: 'Working with Xpert Games was a game-changer for our project. Their technical expertise and collaborative approach ensured we launched on time with outstanding quality.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    name: 'James Wilson',
    role: 'Founder, IndieDev Studios',
    quote: 'The team at Xpert Games transformed our rough prototype into a polished, market-ready game. Their passion for gaming shines through in every detail.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  }
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-bg to-surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Client Testimonials
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          What our clients say about working with us
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="group relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" />
            </div>
            
            {/* Card */}
            <div className="relative border border-white/10 rounded-2xl p-8 pt-12 hover:border-accent/30 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-zinc-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accentOrange/20 border border-accent/30" />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-accent">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


