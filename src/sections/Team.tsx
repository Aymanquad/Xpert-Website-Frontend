import { motion, type Variants } from 'framer-motion'
import Section from '../components/Section'
import { Linkedin } from 'lucide-react'
import dennisImg from '../assets/dennis-img.png'
import hishamImg from '../assets/hisham-img.jpg'
import aryanImg from '../assets/aryan-img.jpg'
import aryan2Img from '../assets/aryan2-img.jpg'
import aymanImg from '../assets/ayman-img2.jpg'
import shafaatImg from '../assets/shafaat-img.jpg'
import raffeImg from '../assets/raffe-img.jpg'

const TEAM_MEMBERS = [
  {
    name: 'Dennis',
    role: 'CEO',
    line: 'Driving vision, strategy, and growth.',
    image: dennisImg,
    linkedin: 'https://www.linkedin.com/in/dennis-manohar-27b3a4169/'
  },
  {
    name: 'Hisham',
    role: 'CTO',
    line: 'Engineering excellence and tech leadership.',
    image: hishamImg,
    linkedin: 'https://www.linkedin.com/in/hisham-saeed-52a2b51b5/'
  },
  {
    name: 'Aryan',
    role: 'COO',
    line: 'Operational efficiency and delivery.',
    image: aryanImg,
    linkedin: 'https://www.linkedin.com/in/aryan-singh-967b97352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Aryan Adrian Lawrence',
    role: 'Marketing',
    line: 'Spreading the word about our games.',
    image: aryan2Img,
    linkedin: ''
  },
  {
    name: 'Ayman',
    role: 'Lead App Developer',
    line: 'Building delightful mobile experiences.',
    image: aymanImg,
    linkedin: 'https://www.linkedin.com/in/mohammed-ayman-quadri/'
  },
  {
    name: 'Shafaat',
    role: 'Lead App Developer',
    line: 'Crafting performant, scalable apps.',
    image: shafaatImg,
    linkedin: 'https://www.linkedin.com/in/shafaat-hussain-562249245/'
  },
  {
    name: 'Rafae',
    role: 'Full stack Ai Developer',
    line: 'AI-first systems end to end.',
    image: raffeImg,
    linkedin: 'https://www.linkedin.com/in/mohammed-rafaeuddin-siddiqui-6b7887270/'
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 260, damping: 20 } }
}

export default function Team() {
  return (
    <Section id="team" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 bg-accentOrange/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-heading"
            variants={cardVariants}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            The creative minds behind every successful game we develop
          </motion.p>
        </motion.div>
        
        {/* Grid of team members */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(1)]:col-start-1 lg:[&>*:nth-child(2)]:col-start-3 lg:[&>*:nth-child(3)]:col-start-5 lg:[&>*:nth-child(4)]:col-start-7 lg:[&>*:nth-child(5)]:col-start-2 lg:[&>*:nth-child(6)]:col-start-4 lg:[&>*:nth-child(7)]:col-start-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              className="group relative rounded-2xl bg-white/[0.03] backdrop-blur-sm overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover will-change-transform"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* subtle shine sweep on hover */}
                <div className="pointer-events-none absolute -inset-y-8 -left-1/2 right-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-12 translate-x-[-60%] group-hover:translate-x-[120%] transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full ring-1 ring-violet-400/10">
                    {member.role}
                  </span>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors border border-white/10 hover:border-white/20">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-1 tracking-tight group-hover:text-violet-300 transition-colors">{member.name}</h3>
                <p className="text-sm text-zinc-400">
                  {member.line}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}


