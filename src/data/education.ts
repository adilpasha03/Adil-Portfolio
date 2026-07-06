// EDIT ME: Education history.
export type EducationItem = {
  degree: string
  institution: string
  duration: string
  cgpa: string
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Seshadripuram College, Tumkur',
    duration: '2023 – 2026',
    cgpa: 'CGPA: 8.83 / 10',
  },
]

// EDIT ME: Certifications list.
export type Certification = {
  name: string
  issuer: string
  url?: string
}

export const certifications: Certification[] = [
  { name: 'Java Full Stack Development', issuer: 'S Spider Institute', url: '#' },
  { name: 'Advance Java Program', issuer: 'Alpha Tech Academy', url: '#' },
  { name: 'Aptitude and Soft Skills', issuer: 'Glisten Education', url: '#' },
  { name: 'R Programming for Beginners', issuer: 'SimpliLearn Platform', url: '#' },
]

export const certificationsViewAllUrl = '#'
