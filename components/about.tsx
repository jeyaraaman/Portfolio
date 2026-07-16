import { Reveal } from '@/components/reveal'

const stats = [
  { value: '3', label: 'Internships' },
  { value: '3', label: 'Major Projects' },
  { value: 'Python', label: 'Full Stack' },
  { value: 'AI', label: 'Computer Vision' },
]

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-[-3rem] px-6 py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">
          01 — About Me
        </p>

        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Passionate about building intelligent software solutions.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left */}

        <Reveal delay={0.05}>
          <div className="space-y-6 text-pretty leading-8 text-muted-foreground">

            <p>
              I am a Python Full-Stack Developer passionate about building scalable web applications and AI-powered solutions. My experience spans Django-based full-stack development, REST APIs, and modern web technologies, along with practical applications of Machine Learning and Computer Vision using TensorFlow, OpenCV, YOLOv8-OBB, and Tesseract OCR.
            </p>

            <p>
              Through internships and personal projects, I have developed intelligent systems including AI-powered fall detection, drone obstacle detection, and real-time OCR applications, combining software engineering with applied Artificial Intelligence.
            </p>

          </div>
        </Reveal>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.1 + i * 0.08}
            >
              <div className="glass rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">

                <p className="text-3xl font-bold text-primary text-glow">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}