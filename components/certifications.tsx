import { Reveal } from '@/components/reveal'
import { BadgeCheck } from 'lucide-react'

const certifications = [
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
  },
  {
    title: 'Python Programming',
    issuer: 'Spoken Tutorial, IIT Bombay',
  },
  {
    title: 'Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL',
  },
  {
    title: ' TechIgnite: Redefining Energy with Innovation',
    issuer: 'Siemens',
  },
  {
    title: 'Robot-as-a-Service (RaaS) with IoT',
    issuer: 'YOI Robotics',
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-[0rem] px-6 py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">
          06 — Certifications
        </p>

        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Certifications & Learning
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {certifications.map((certification, index) => (
          <Reveal
            key={certification.title}
            delay={index * 0.06}
          >
            <div className="glass flex h-full gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">

              <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BadgeCheck className="size-6" />
              </div>

              <div>

                <h3 className="text-base font-semibold leading-6">
                  {certification.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {certification.issuer}
                </p>

              </div>

            </div>
          </Reveal>
        ))}

      </div>
    </section>
  )
}