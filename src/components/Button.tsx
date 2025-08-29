import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const variantToClasses: Record<Variant, string> = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 border border-violet-600/20 shadow-lg shadow-violet-600/25',
  secondary:
    'bg-white/5 text-white hover:bg-white/10 active:bg-white/15 border border-white/10 backdrop-blur-sm',
  ghost: 'bg-transparent text-white hover:bg-white/5 border border-transparent hover:border-white/10',
}

const sizeToClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  className, 
  children,
  ...rest 
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-full transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-violet-500/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantToClasses[variant]}
        ${sizeToClasses[size]}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}


