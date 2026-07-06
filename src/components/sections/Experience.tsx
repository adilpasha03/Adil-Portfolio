import { Briefcase, Award } from 'lucide-react'
import Card from '../ui/Card'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <Briefcase size={18} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink">Experience</h3>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <div key={item.company} className="relative pl-6 border-l-2 border-primary/20">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-brand-gradient ring-4 ring-primary/10" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 mb-0.5">
              <h4 className="font-semibold text-ink">{item.role}</h4>
              <span className="text-xs text-ink-soft">{item.duration}</span>
            </div>
            <p className="text-sm text-primary font-medium mb-3">
              {item.company} <span className="text-ink-soft">({item.mode})</span>
            </p>
            <ul className="space-y-1.5 mb-4">
              {item.bullets.map((b) => (
                <li key={b} className="text-sm text-ink-soft flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                <Award size={13} /> View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
