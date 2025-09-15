import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  className?: string
  maxWidthClass?: string
}>

export default function Section({ id, className, maxWidthClass, children }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-24 md:py-32 ${className ?? ''}`}>
      {/* Soft top separator fade to avoid boxy section bands */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-white/5 to-transparent" />
      <div className={`mx-auto ${maxWidthClass ?? 'max-w-[1200px]'} px-6 md:px-8`}>{children}</div>
    </section>
  )
}


