import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

const variantToClasses: Record<Variant, string> = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 border border-white/10',
  secondary:
    'bg-white/5 text-white hover:bg-white/10 active:bg-white/15 border border-white/10',
  ghost: 'bg-transparent text-white hover:bg-white/5 border border-white/10',
}

export default function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  return (
    <button
      className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${variantToClasses[variant]} ${
        className ?? ''
      }`}
      {...rest}
    />
  )
}


