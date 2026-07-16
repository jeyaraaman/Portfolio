import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'

const projects = [
  {
    title: 'AI Fall Detection',
    image: '/project-fall-detection.png',
    description:
      'Designed a wearable AI-based fall detection system using a CNN-GRU deep learning model with real-time sensor data. Developed an IoT-enabled emergency alert system that sends SMS, GPS location, and emergency calls through an Android application.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN-GRU'],
    github: 'https://github.com/jeyaraaman/Fall-Detection',
  },
  {
    title: 'Depth Estimation for Autonomous Drones',
    image: '/project-drone-depth.png',
    description:
      'Designed a real-time overhead wire detection system using YOLOv8-OBB and computer vision for autonomous drone navigation. Implemented stereo vision-based depth estimation to calculate obstacle distance and support collision avoidance.',
    tech: ['Python', 'OpenCV', 'YOLOv8-OBB', 'Computer Vision'],
    github:
      'https://github.com/jeyaraaman/Depth-Estimation-For-Autonomous-Drones',
  },
  {
    title: 'OCR Text Recognition',
    image: '/project-ocr.png',
    description:
      'Built a real-time OCR system using OpenCV and Tesseract to extract text from images and live video. Improved recognition accuracy using image preprocessing techniques.',
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'Tkinter'],
    github:
      'https://github.com/jeyaraaman/Text-Recognition-Using-Optical-Character-Recognition-',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-[-6rem] px-6 py-24"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">
          04 — Projects
        </p>

        <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Featured Projects
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
          >
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">

              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              </div>

              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                <div className="mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-secondary"
                  >
                    <GithubIcon className="size-4" />
                    View Source Code
                  </a>

                </div>

              </div>

            </article>
          </Reveal>
        ))}

      </div>
    </section>
  )
}