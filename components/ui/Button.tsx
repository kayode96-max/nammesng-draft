import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:shadow-glow active:scale-[0.98]'
  const variants = {
    primary: 'bg-primary text-white hover:brightness-110 btn-shadow',
    secondary: 'bg-gold text-white hover:brightness-110 btn-shadow',
    ghost: 'border border-slate-200 hover:bg-slate-50',
  }[variant]
  const sizes = {
    sm: 'px-3 h-9 text-sm',
    md: 'px-4 h-11',
    lg: 'px-6 h-12 text-lg',
  }[size]

  return <button className={clsx(base, variants, sizes, className)} {...props} />
}
