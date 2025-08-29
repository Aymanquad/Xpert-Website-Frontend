export default function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{label}</div>
    </div>
  )
}


