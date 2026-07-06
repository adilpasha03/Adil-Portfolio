import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile } from '../../data'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.id))

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close the mobile menu automatically if the viewport is resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-2.5 shadow-glass md:px-5">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 shrink-0"
            aria-label="Go to home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-display text-xs font-bold text-white">
              {profile.initials}
            </span>
            <span className="font-display text-[15px] font-bold text-ink">
              {profile.firstName} <span className="text-primary">{profile.lastName}</span>
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-2.5 py-2 text-[13px] font-medium transition-colors lg:px-3 ${
                  activeId === link.id ? 'text-primary' : 'text-ink/70 hover:text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient transition-transform origin-left ${
                    activeId === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white shadow-soft hover:shadow-glow transition-shadow"
            >
              Download CV <Download size={13} />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-primary/10 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[26rem] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="glass flex flex-col rounded-2xl p-2 shadow-glass">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-ink hover:bg-primary/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white"
            >
              Download CV <Download size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
