import Section from '../components/Section'
import { Github, Linkedin, Twitter } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: 'Alex Chen',
    role: 'Lead Game Designer',
    bio: '10+ years crafting engaging game mechanics and player experiences',
    avatar: '/api/placeholder/200/200',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#thedynamic'
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Senior Artist',
    bio: 'Specialized in 2D/3D art with a passion for character design',
    avatar: '/api/placeholder/200/200',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#thecreative'
  },
  {
    name: 'Marcus Johnson',
    role: 'Technical Lead',
    bio: 'Unity/Unreal expert with deep knowledge of game architecture',
    avatar: '/api/placeholder/200/200',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#thebeast'
  },
  {
    name: 'Emma Thompson',
    role: 'Producer',
    bio: 'Ensuring smooth project delivery and team coordination',
    avatar: '/api/placeholder/200/200',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    },
    hashtag: '#theorganizer'
  }
]

export default function Team() {
  return (
    <Section id="team" className="bg-gradient-to-b from-[#111111] to-[#0B0B0B]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          The creative minds behind every successful game we develop
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="group text-center">
            {/* Avatar */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border-2 border-violet-500/30 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
              </div>
              
              {/* Social Links */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2 bg-black/80 backdrop-blur-sm rounded-full p-2 border border-white/10">
                  <a href={member.social.twitter} className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href={member.social.linkedin} className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a href={member.social.github} className="p-1.5 rounded-full bg-white/10 hover:bg-violet-500/20 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Info */}
            <h3 className="text-xl font-semibold mb-1 group-hover:text-violet-400 transition-colors">
              {member.name}
            </h3>
            
            <p className="text-violet-400 font-medium mb-2">
              {member.role}
            </p>
            
            <p className="text-sm text-zinc-400 mb-3 leading-relaxed">
              {member.bio}
            </p>
            
            <span className="inline-block text-xs text-violet-400/70 font-mono">
              {member.hashtag}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}


