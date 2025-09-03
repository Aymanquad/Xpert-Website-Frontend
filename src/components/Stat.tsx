export default function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center group">
      <div className="relative">
        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
          {value}
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 text-4xl md:text-6xl font-bold text-accent/20 blur-sm">
          {value}
        </div>
      </div>
      <div className="mt-4 text-sm uppercase tracking-wider text-zinc-400 font-medium">
        {label}
      </div>
    </div>
  )
}


