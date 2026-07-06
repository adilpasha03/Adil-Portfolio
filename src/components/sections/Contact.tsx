import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { profile } from '../../data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire this up to your form backend of choice (Formspree, EmailJS, etc.)
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const infoItems = [
    { icon: <Mail size={16} />, label: profile.contact.email, href: profile.socials.email },
    { icon: <Phone size={16} />, label: profile.contact.phone, href: `tel:${profile.contact.phone.replace(/\s/g, '')}` },
    { icon: <MapPin size={16} />, label: profile.contact.location, href: undefined },
  ]

  return (
    <div>
      <SectionTitle title="Get In Touch" align="center" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display text-lg font-bold text-ink mb-5">
            Let's Connect
          </h3>
          <div className="space-y-4 mb-6">
            {infoItems.map((item) => {
              const inner = (
                <span className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block hover:text-primary transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              )
            })}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:text-primary hover:-translate-y-1 transition-all"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={profile.socials.linkedin}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:text-primary hover:-translate-y-1 transition-all"
            >
              <FaLinkedin size={17} />
            </a>
          </div>
        </Card>

        <Card delay={0.1}>
          <h3 className="font-display text-lg font-bold text-ink mb-5">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-primary/15 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-primary/15 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-xl border border-primary/15 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
            <Button type="submit" variant="gradient" icon={<Send size={15} />} className="w-full sm:w-auto">
              {status === 'sent' ? 'Message Sent!' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
