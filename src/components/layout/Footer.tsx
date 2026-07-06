import { Mail, Globe, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../../data'

export default function Footer() {
  const year = new Date().getFullYear()

  const socialIcons = [
    { icon: <FaGithub size={15} />, href: profile.socials.github, label: 'GitHub' },
    { icon: <FaLinkedin size={15} />, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: profile.socials.email, label: 'Email' },
    { icon: <Globe size={16} />, href: profile.socials.portfolio, label: 'Portfolio' },
  ]

  return (
    <footer className="relative border-t border-white/40 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="font-display text-base font-bold text-ink">
              {profile.firstName} <span className="text-primary">{profile.lastName}</span>
            </span>
          </div>
          <p className="text-sm text-ink-soft text-center md:text-left max-w-xs">
            {profile.footerTagline}
          </p>
          <div className="flex items-center gap-2.5">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-ink hover:text-primary transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center md:text-right text-sm text-ink-soft">
          <p>© {year} {profile.firstName} {profile.lastName}. All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft hover:shadow-glow transition-shadow"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
