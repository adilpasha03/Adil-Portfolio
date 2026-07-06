# Adil Pasha — Portfolio

A premium, animated Full Stack Developer portfolio built with **React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion**, closely following the provided reference design (glassmorphism cards, soft gradient background, indigo → violet → cyan accent system).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`). To build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Deploy the contents of `dist/` to Netlify, Vercel, or any static host.

---

## Editing your content — everything lives in `src/data/`

You should **never need to touch component code** to update your info. Each file is commented:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, **rotating hero taglines**, bio, location, availability, social links, contact info, resume URL |
| `src/data/navigation.ts` | Navbar links |
| `src/data/techStack.ts` | Tech stack categories + the floating icons around your hero photo |
| `src/data/projects.ts` | Featured projects (name, description, tech badges, links) |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/education.ts` | Education + certifications |
| `src/data/journey.ts` | "My Journey So Far" stat counters + the quote card |

### Rotating taglines (as requested)
`profile.taglines` is an array — the Hero section automatically cycles through **all of them** every ~3.2s with a smooth slide/fade animation (Framer Motion `AnimatePresence`). Add a 5th, remove one, or reorder — no code changes needed:

```ts
taglines: [
  'Full Stack Developer | MERN • Java • AI Solutions',
  'Building AI-Powered Web Applications',
  'React • Node.js • MongoDB • Express',
  'Turning Ideas Into Real-World Solutions',
],
```

### Swapping the profile photo
The hero currently renders a glass circle with your initials as a placeholder. To use a real photo, open `src/components/sections/Hero.tsx` and replace the placeholder block inside the "profile placeholder" `motion.div` with an `<img src="/your-photo.jpg" className="h-full w-full object-cover" />`, and drop the image in `public/`.

### Swapping project screenshots
Projects currently use stylized icon mockups (`ProjectMockup` in `Projects.tsx`) so the site works with zero image assets. To use real screenshots, replace `<ProjectMockup type={project.mockup} />` with an `<img>` tag pointing at an image you add under `public/projects/`.

### Resume download
Drop your actual PDF at `public/resume.pdf` (a placeholder note is currently there) — the navbar "Download CV" button already points to `/resume.pdf`.

---

## Structure

```
src/
  data/          <- all editable content (see table above)
  hooks/         <- useActiveSection, useDarkMode, useCounter
  components/
    ui/          <- Button, Card, SectionTitle, BackgroundEffects
    layout/      <- Navbar (with mobile hamburger), Footer
    sections/    <- Hero, About, TechStack, Projects, Experience,
                    Education (+ Certifications), Journey (+ Quote), Contact
  App.tsx        <- assembles sections into the page
```

## Features implemented

- Sticky glass navbar with active-section indicator, smooth scroll, and a **hamburger menu on mobile/tablet** (collapses under `md`, opens a slide-down glass panel)
- Section-by-section smooth scrolling (CSS scroll-snap, non-trapping)
- Rotating hero taglines (Framer Motion)
- Floating tech icons around the profile circle
- Glassmorphism cards with hover-lift, soft shadows, 24px radius
- Gradient buttons with hover glow + scale
- Scroll-triggered fade/stagger animations throughout
- Animated counters in the Journey stats
- Fully responsive: mobile -> tablet -> laptop -> desktop
- Respects `prefers-reduced-motion`
- Light theme only, matching the reference design exactly

## Tech stack

React 19 - TypeScript - Vite - Tailwind CSS 3 - Framer Motion - Lucide Icons - React Icons
