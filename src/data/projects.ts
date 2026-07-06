// EDIT ME: Featured projects. `mockup` controls the placeholder screenshot style
// (swap for a real screenshot later by rendering an <img> instead in ProjectCard).
export type Project = {
  id: string
  name: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  mockup: 'dashboard' | 'audio' | 'database' | 'voting'
}

export const projects: Project[] = [
  {
    id: 'codePlay–online-coding-platform',
    name: 'CodePlay– Online Coding Platform',
    description:
      'Developed an interactive web platform that allows users to write, compile, and execute code in multiple languages using the JDoodle API. Focused on creating a clean and intuitive user interface.',
    tech: ['HTML', 'CSS', 'Java Script', 'JDoodle API'],
    liveUrl: 'https://codeandrun.netlify.app',
    githubUrl: 'https://github.com/adilpasha03/codeplay.git',
    mockup: 'dashboard',
  },
  {
    id: 'speech-to-text-app',
    name: 'VoxIntel AI– Speech Recognition Transcription Platform',
    description:
      'Built a full-stack AI transcription app enabling real-time audio-to-text conversion via the Deepgram API, with live transcription preview, export to PDF, and transcription history management..',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Mongo DB', 'Deepgram'],
    liveUrl: 'https://speech-text-web.netlify.app',
    githubUrl: 'https://github.com/adilpasha03/speech-text.git',
    mockup: 'audio',
  },
  {
    id: 'kr-timber-business',
    name: 'K.R Timbers Business Management System',
    description:
      'Created a business management platform to track daily transactions, profits, and losses, enabling data-driven decision-making for the owner..',
    tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    liveUrl: ' https://timber20.netlify.app',
    githubUrl: ' https://github.com/adilpasha03/KR-Timber.git',
    mockup: 'database',
  },
  {
    id: 'ai-data-analyst-dashboard',
    name: 'AI Data Analyst Dashboard',
    description:
      'Developed a full-stack analytics dashboard that visualizes data through interactive charts and leverages the Gemini API to generate AI-driven insights and natural language summaries from uploaded datasets..',
    tech: ['React JS','Node JS', 'Express JS','Chart.js/Recharts', 'Gemini API'],
    liveUrl: 'https://ai-data-analyst-dashboard.netlify.app/',
    githubUrl: 'https://github.com/adilpasha03/ai-data-analyst-dashboard.git/',
    mockup: 'dashboard',
  },
]
