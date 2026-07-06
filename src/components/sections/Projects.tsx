import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink, BarChart3, AudioLines, Database, QrCode } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { projects, type Project } from '../../data/projects'

const mockupIcon: Record<Project['mockup'], React.ReactNode> = {
  dashboard: <BarChart3 size={40} />,
  audio: <AudioLines size={40} />,
  database: <Database size={40} />,
  voting: <QrCode size={40} />,
}

function ProjectMockup({ type }: { type: Project['mockup'] }) {
  return (
    <div className="relative h-44 md:h-48 w-full overflow-hidden rounded-t-card bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 flex items-center justify-center">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-primary-100 backdrop-blur"
      >
        <span className="text-indigo-300">{mockupIcon[type]}</span>
      </motion.div>
      <div className="absolute top-3 left-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass rounded-card overflow-hidden shadow-glass hover:shadow-soft transition-shadow duration-300 group"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ProjectMockup type={project.mockup} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-ink mb-1.5">
          {project.name}
        </h3>
        <p className="text-sm text-ink-soft mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a
            href={project.liveUrl}
            className="flex items-center gap-1 text-primary hover:text-accent transition-colors"
          >
            Live Demo <ExternalLink size={13} />
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-1 text-ink hover:text-primary transition-colors"
          >
            GitHub <SiGithub size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div>
      <SectionTitle
        icon={<FolderGit2 size={18} />}
        title="Featured Projects"
        action={
          <Button variant="outline" icon={<ExternalLink size={14} />} className="!px-4 !py-2 !text-xs">
            View All Projects
          </Button>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
