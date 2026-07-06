// ============================================================
// EDIT ME: All personal / hero content lives here.
// Update this file and the whole site updates automatically.
// ============================================================

export const profile = {
  firstName: 'Adil',
  lastName: 'Pasha',
  initials: 'AP',
  image: "/adil.jpg",
  greeting: "👋 Hello, I'm",

  // Rotating hero taglines — add, remove, or reorder freely.
  // The Hero section automatically cycles through all of them.
  taglines: [
    'BCA Graduate • Full-Stack Developer | MERN • Java • AI Solutions',
    'Aspiring Software Developer | Turning Ideas into Scalable Digital Solutions',
    'Transforming Ideas into Functional, Beautiful and Scalable Web Applications',
    'Java • JavaScript • React • Node.js • Express • MongoDB • Tailwind CSS',
  ],

  heroDescription:
    'A dedicated BCA graduate with a passion for software development, problem-solving, and continuous improvement. I enjoy transforming ideas into reliable, scalable, and engaging web applications using modern technologies.',

  location: 'Tumakuru, Karnataka, India',
  availability: 'Available for Opportunities',
  isAvailable: true,

  resumeUrl: '/adil_resume.pdf',

  aboutParagraph:
    "I'm a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications using the MERN stack and AI technologies. I love turning ideas into real-world solutions, and I'm currently looking for a fresher role where I can keep learning and shipping things that matter.",

  socials: {
    github: 'https://github.com/adilpasha03',
    linkedin: 'https://linkedin.com/in/Adil Pasha',
    email: 'mailto:adilp6195@gmail.com',
    portfolio: 'https://adilpasha-portfolio.netlify.app',
  },

  contact: {
    email: 'adilp6195@gmail.com',
    phone: '+91 8073770074',
    location: 'Tumakuru, Karnataka, India',
  },

  footerTagline: 'Building digital solutions that make a difference.',
}

export type Profile = typeof profile
