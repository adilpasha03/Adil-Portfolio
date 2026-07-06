import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { techStack } from '../../data'

export default function TechStack() {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Sparkles size={18} />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">Tech Stack</h3>
        </div>
        <Button variant="outline" className="!px-4 !py-2 !text-xs">
          View All Skills
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-3 lg:gap-6">
        {techStack.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h4 className="text-sm font-bold mb-2" style={{ color: category.accent }}>
              {category.title}
            </h4>
            <ul className="space-y-1 mb-3">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
            <span
              className="block h-1 w-10 rounded-full"
              style={{ backgroundColor: category.accent }}
            />
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
