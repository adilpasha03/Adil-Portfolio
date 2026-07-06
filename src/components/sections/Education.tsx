import { GraduationCap, BadgeCheck, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'
import { education, certifications, certificationsViewAllUrl } from '../../data/education'

export default function Education() {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <GraduationCap size={18} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink">Education</h3>
      </div>

      {education.map((item) => (
        <div key={item.institution} className="mb-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h4 className="font-semibold text-ink text-sm">{item.degree}</h4>
            <span className="text-xs text-ink-soft">{item.duration}</span>
          </div>
          <p className="text-sm text-primary font-medium mb-2">{item.institution}</p>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {item.cgpa}
          </span>
        </div>
      ))}

      <hr className="border-white/40 mb-5" />

      <div id="certifications" className="scroll-mt-24" />
      <div className="flex items-center gap-2.5 mb-3">
        <BadgeCheck size={18} className="text-primary" />
        <h4 className="font-semibold text-ink text-sm">Certifications</h4>
      </div>
      <ul className="space-y-1.5 mb-4">
        {certifications.map((c) => (
          <li key={c.name} className="text-sm text-ink-soft flex gap-2">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
            {c.name} <span className="text-ink-soft/70">— {c.issuer}</span>
          </li>
        ))}
      </ul>
      <a
        href={certificationsViewAllUrl}
        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
      >
         <ExternalLink size={13} />
      </a>
    </Card>
  )
}
