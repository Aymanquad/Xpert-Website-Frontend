import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{ id?: string; className?: string }>

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className ?? ''}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">{children}</div>
    </section>
  )
}


