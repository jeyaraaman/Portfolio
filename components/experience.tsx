import { Reveal } from '@/components/reveal'

const experiences = [
  {
    role: 'Python Full-Stack + AI Intern',
    company: 'Careerschool HR Solutions',
    period: 'Feb 2026 – Present',
    points: [
      'Build and maintain full-stack web applications using Python and Django following the MVT architecture.',
      'Design responsive, cross-browser user interfaces with HTML5, CSS3, JavaScript (ES6+), and CSS Grid/Flexbox, backed by SQL-driven data models.',
      'Integrate computer vision workflows into web applications by connecting OpenCV pipelines to Django backends through REST APIs.',
    ],
  },
  {
    role: 'Computer Vision Intern',
    company: 'ARKin Labs Pvt. Limited',
    period: 'Oct 2025 – Nov 2025',
    points: [
      'Developed a drone-based depth estimation system for automated collision avoidance during flight.',
      'Applied YOLOv8-OBB for real-time overhead wire detection and used stereo image disparity to calculate precise distance to obstacles.',
      'Trained and deployed real-time vision-based detection models, handling the full workflow from model training through live deployment.',
    ],
  },
  {
    role: 'IoT Intern',
    company: 'Denvik Technology Pvt. Limited',
    period: 'Jun 2024 – Jul 2024',
    points: [
      'Completed structured training on embedded systems and microcontrollers, with focus on ATMEGA 4808/4809 architecture',
      'Gained practical experience in PCB design and hardware-software integration for embedded applications.',
      'Worked with data communication protocols and storage technologies, including JSON, MQTT, and MariaDB.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-[-5rem] px-6 py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">
          03 — Experience
        </p>

        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Internship Experience
        </h2>
      </Reveal>

      <div className="relative mt-12 pl-8 sm:pl-10">

        {/* Timeline */}

        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-3" />

        <div className="space-y-8">

          {experiences.map((experience, index) => (
            <Reveal
              key={experience.role}
              delay={index * 0.08}
            >
              <div className="relative">

                <span className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/20 sm:-left-[30px]" />

                <div className="glass rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <div>
                      <h3 className="text-xl font-semibold">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-primary">
                        {experience.company}
                      </p>
                    </div>

                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {experience.period}
                    </span>

                  </div>

                  <ul className="mt-5 space-y-3">

                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}