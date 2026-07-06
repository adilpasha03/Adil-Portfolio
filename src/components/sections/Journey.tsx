import { BarChart2 } from 'lucide-react'
import Card from '../ui/Card'
import { useCounter } from '../../hooks/useCounter'
import { journeyStats, journeyQuote } from '../../data/journey'

function StatCard({ label, sublabel, value, suffix }: (typeof journeyStats)[number]) {
  const { ref, value: count } = useCounter(value)
  return (
    <div ref={ref} className="glass rounded-2xl p-4 text-center shadow-glass">
      <p className="font-display text-xl md:text-2xl font-extrabold text-gradient">
        {count}
        {suffix}
      </p>
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="text-xs text-ink-soft">{sublabel}</p>
    </div>
  )
}

export default function Journey() {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <BarChart2 size={18} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink">
          My Journey So Far
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {journeyStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-5 text-white">
        <p className="font-display text-lg font-bold leading-tight">
          {journeyQuote.lines.join(' ')}
        </p>
        <p className="text-sm text-white/80 mt-1">{journeyQuote.caption}</p>
        <svg
          className="absolute -bottom-2 left-0 w-[200%] opacity-30 animate-wave"
          viewBox="0 0 800 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 Q 50 0 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 V60 H0 Z"
            fill="white"
          />
        </svg>
      </div>
    </Card>
  )
}
