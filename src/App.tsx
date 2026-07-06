import BackgroundEffects from './components/ui/BackgroundEffects'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Journey from './components/sections/Journey'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="snap-sections relative min-h-screen font-sans">
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />

        {/* About + Tech Stack row */}
        <section id="about" className="snap-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_2fr] gap-5">
            <About />
            <div id="skills" className="scroll-mt-24">
              <TechStack />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="snap-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-8">
            <Projects />
          </div>
        </section>

        {/* Experience + Education + Journey row */}
        <section className="snap-section">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div id="experience" className="scroll-mt-24">
              <Experience />
            </div>
            <div id="education" className="scroll-mt-24">
              <Education />
            </div>
            <Journey />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="snap-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
