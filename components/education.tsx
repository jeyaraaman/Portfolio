import { Reveal } from '@/components/reveal'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech Electronics and Communication Engineering',
    school: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
    period: '2022 — 2026',
    detail: 'Focus on Artificial Intelligence, Machine Learning and Full Stack Development.',
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-[1rem] px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">05 — Education</p>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Academic background.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08}>
            <div className="glass flex h-full gap-4 rounded-2xl p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{edu.degree}</h3>
                </div>
                <p className="mt-1 text-sm text-primary/90">{edu.school}</p>
                <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
