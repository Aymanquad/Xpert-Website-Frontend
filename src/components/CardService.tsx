export default function CardService({ icon, title, description }: { icon?: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/5 transition">
      {icon && <div className="mb-4">{icon}</div>}
      <div className="text-lg font-medium">{title}</div>
      <div className="mt-2 text-zinc-300 text-sm">{description}</div>
    </div>
  )
}


