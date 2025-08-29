import Section from '../components/Section'

export default function Awards() {
  const rows = [
    { brand: 'Awwwards', prize: 'Site of the Day', year: '2024' },
    { brand: 'CSSDA', prize: 'UI Design', year: '2024' },
  ]
  return (
    <Section id="awards">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider uppercase">Awards</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left">
            <tr>
              <th className="px-4 py-3">Brand</th>
              <th className="px-4 py-3">Prize</th>
              <th className="px-4 py-3">Year</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.brand + r.prize} className="border-t border-white/10">
                <td className="px-4 py-3">{r.brand}</td>
                <td className="px-4 py-3">{r.prize}</td>
                <td className="px-4 py-3">{r.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}


