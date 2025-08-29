import { useState } from 'react'

export type FaqItem = { question: string; answer: string }

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={idx}>
            <button
              className="w-full text-left px-5 py-4 hover:bg-white/5"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div className="font-medium">{item.question}</div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-zinc-300">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}


