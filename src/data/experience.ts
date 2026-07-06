// EDIT ME: Work experience timeline.
export type ExperienceItem = {
  role: string
  company: string
  mode: string
  duration: string
  bullets: string[]
  certificateUrl?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Labmentix',
    mode: 'Remote',
    duration: 'March 2026 – May 2026',
    bullets: [
      'Built and deployed production-level features using the MERN stack.',
      'Developed reusable React.js components integrated with Node.js and Express.js APIs.',
      'Integrated REST APIs and third-party services, including Supabase, for real-time data.',
      'Collaborated in an agile development environment with regular code reviews.',
    ],
    certificateUrl: "experience/certificate.jpg",
  },
]
