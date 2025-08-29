export default function CardService({ 
  icon, 
  title, 
  description 
}: { 
  icon?: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="group relative border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:to-violet-500/10 transition-all duration-300" />
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-6 p-3 w-fit rounded-xl bg-violet-500/10 border border-violet-500/20">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
        
        {/* Hover arrow */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}


