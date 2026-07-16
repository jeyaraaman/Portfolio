import { Background } from '@/components/background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />

      <Navbar />

      <main className="animate-in fade-in duration-700">

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <Contact />

      </main>

      <Footer />
    </div>
  )
}