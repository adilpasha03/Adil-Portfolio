import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Globe, ArrowRight, Send, MapPin, Code2 } from 'lucide-react'
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiExpress } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile, floatingTech } from '../../data'
import Button from '../ui/Button'

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact className="text-sky-500" size={18} />,
  node: <SiNodedotjs className="text-green-600" size={18} />,
  js: <SiJavascript className="text-yellow-500" size={18} />,
  mongo: <SiMongodb className="text-green-500" size={18} />,
  express: <SiExpress className="text-gray-700" size={18} />,
  code: <Code2 className="text-primary" size={18} />,
  leaf: <SiMongodb className="text-green-500" size={16} />,
}

function RotatingTagline() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % profile.taglines.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-7 md:h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-base md:text-xl font-semibold text-ink/80"
        >
          {profile.taglines[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const socialIcons = [
    { icon: <FaGithub size={15} />, href: profile.socials.github, label: 'GitHub' },
    { icon: <FaLinkedin size={15} />, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: profile.socials.email, label: 'Email' },
    { icon: <Globe size={16} />, href: profile.socials.portfolio, label: 'Portfolio' },
  ]

  return (
    <section
      id="home"
      className="snap-section relative flex min-h-[92vh] items-center pt-24 pb-10 md:pt-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:px-6 md:grid-cols-[1.15fr_1fr] md:gap-6 items-center">
        {/* Left column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-4"
          >
            {profile.greeting}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight text-ink mb-2"
          >
            {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <RotatingTagline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md text-sm md:text-[15px] leading-relaxed text-ink-soft mb-5"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink-soft"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Button
              variant="gradient"
              icon={<ArrowRight size={15} />}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              icon={<Send size={14} />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-2.5"
          >
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:text-primary hover:-translate-y-1 transition-all shadow-glass"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px]"
        >
          {/* glow */}
          <div className="absolute inset-6 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
          <div className="absolute inset-3 rounded-full border border-white/60" />

          {/* profile placeholder */}
          <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: 'spring', stiffness: 200 }}
  className="absolute inset-7 rounded-full overflow-hidden shadow-soft glass"
>
  <img
    src={profile.image}
    alt={`${profile.firstName} ${profile.lastName}`}
    className="w-full h-full object-cover"
  />
</motion.div>

          {/* floating tech icons */}
          {floatingTech.map((item, i) => (
            <motion.div
              key={item.icon}
              style={item.style as React.CSSProperties}
              className="absolute glass flex h-11 w-11 items-center justify-center rounded-xl shadow-glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {iconMap[item.icon]}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
