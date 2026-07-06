import { motion } from 'framer-motion'
import type { ReactNode, MouseEventHandler } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'gradient' | 'outline' | 'ghost'
  href?: string
  onClick?: MouseEventHandler
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'gradient',
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 overflow-hidden select-none'

  const variants: Record<string, string> = {
    gradient:
      'bg-brand-gradient text-white shadow-soft hover:shadow-glow',
    outline:
      'border-2 border-primary/30 text-ink hover:border-primary hover:bg-primary/5',
    ghost: 'text-ink hover:text-primary',
  }

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {icon}
        </motion.span>
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    className: `${base} ${variants[variant]} ${className}`,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  )
}
