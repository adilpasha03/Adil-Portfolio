// EDIT ME: Tech stack, grouped by category. `accent` drives the underline + heading color.
export type TechCategory = {
  title: string
  accent: string // tailwind color e.g. 'blue-500'
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    accent: '#3B82F6',
    items: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    accent: '#22C55E',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'API Gateway'],
  },
  {
    title: 'Database',
    accent: '#8B5CF6',
    items: ['MongoDB', 'MySQL', 'Postgre SQL', 'Supa Base'],
  },
  {
    title: 'Languages',
    accent: '#F97316',
    items: ['Java', 'Python', 'C/C++', 'c#', 'R Programing', 'PHP and MySQL'],
  },
  {
    title: 'Tools',
    accent: '#EC4899',
    items: ['Git & GitHub', 'VS Code', 'Postman', 'Render', 'Netlify'],
  },
]

// Floating icons shown around the hero profile image.
// `icon` keys map to lucide-react / react-icons components in Hero.tsx
export const floatingTech = [
  { icon: 'react', style: { top: '8%', right: '18%' } },
  { icon: 'node', style: { top: '20%', left: '-6%' } },
  { icon: 'js', style: { top: '58%', right: '-8%' } },
  { icon: 'code', style: { bottom: '10%', left: '2%' } },
  { icon: 'leaf', style: { bottom: '6%', right: '14%' } },
]
