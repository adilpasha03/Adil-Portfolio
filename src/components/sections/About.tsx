import { UserRound } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { profile } from '../../data'

export default function About() {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <UserRound size={18} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink">About Me</h3>
      </div>
      <p className="text-sm leading-relaxed text-ink-soft mb-6 flex-1">
        {profile.aboutParagraph}
      </p>
      <Button variant="outline" icon={<UserRound size={15} />} className="self-start">
        More About Me
      </Button>
    </Card>
  )
}
