import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionTitleProps = {
  icon?: ReactNode
  title: string
  align?: 'left' | 'center'
  action?: ReactNode
}

export default function SectionTitle({ icon, title, align = 'left', action }: SectionTitleProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 mb-6 md:mb-7 ${
        align === 'center' ? 'flex-col text-center' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5"
      >
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-soft">
            {icon}
          </span>
        )}
        <h2 className="font-display text-xl md:text-2xl font-bold text-ink">
          {title}
        </h2>
      </motion.div>
      {action && <div>{action}</div>}
    </div>
  )
}
