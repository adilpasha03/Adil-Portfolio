import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`glass rounded-card shadow-glass p-5 md:p-6 transition-shadow duration-300 hover:shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  )
}
