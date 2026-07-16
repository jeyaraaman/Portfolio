import { Reveal } from '@/components/reveal'
import {
  Code2,
  Layout,
  Server,
  BrainCircuit,
  Database,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Programming Languages',
    items: ['Python', 'JavaScript (ES6+)'],
  },
  {
    icon: Layout,
    title: 'Web Technologies',
    items: [
      'HTML5',
      'CSS3',
      'Django (MVT)',
      'REST APIs',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Data Formats',
    items: [
      'SQL',
      'JSON',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Computer Vision',
    items: [
      'Machine Learning',
      'Computer Vision',
      'Image Processing',
      'YOLOv8-OBB',
      'Tesseract OCR',
    ],
  },
  {
    icon: Server,
    title: 'Libraries & Frameworks',
    items: [
      'Django (MVT)',
      'OpenCV',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'NumPy',
      'Tkinter',
    ],
  },
  {
    icon: Wrench,
    title: 'Version Control & Tools',
    items: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'PyCharm',
      'Google Colab',
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-[-6rem] px-6 py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">
          02 — Skills
        </p>

        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies and tools I work with.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.08}
          >
            <div className="glass group h-full rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">

              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <group.icon className="size-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {group.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>
        ))}

      </div>
    </section>
  )
}