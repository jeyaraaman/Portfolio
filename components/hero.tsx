'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import {
  Download,
  ArrowUpRight,
} from 'lucide-react'

const badges = [
  'Python',
  'Django',
  'TensorFlow',
  'OpenCV',
  'YOLOv8-OBB',
  'JavaScript',
  'SQL',
  'Git',
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-14 px-6 pt-36 pb-20 lg:flex-row lg:justify-between lg:pt-40"
    >
      {/* LEFT */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center lg:text-left"
      >
        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
        >
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        <span className="size-2 rounded-full bg-green-400 animate-pulse" />
          Available for Full-Time Opportunities
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" />
          Hello, I'm
        </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          JEYARAAMAN{' '}
          <span className="text-primary text-glow">
            K
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Python Full Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 font-mono text-sm tracking-widest text-primary uppercase sm:text-base"
        >
          AI • Machine Learning • Computer Vision
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl leading-relaxed text-muted-foreground lg:mx-0"
        >
          I build scalable web applications and AI-powered solutions using Python,
Django, Machine Learning, and Computer Vision. Passionate about solving
real-world engineering problems through intelligent software.
        </motion.p>
                {/* Buttons */}

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
        >
          <a
            href="/resume/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:brightness-110 glow-primary"
          >
            <Download className="size-4" />
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
            View Projects
            <ArrowUpRight className="size-4" />
          </a>

         <a
           href="https://github.com/jeyaraaman"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
           GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeyaraaman-k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
          LinkedIn
          </a>
        </motion.div>

        {/* Tech Stack */}

        <motion.ul
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
        >
          {badges.map((badge, i) => (
            <motion.li
              key={badge}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className="rounded-xl border border-border glass px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              {badge}
            </motion.li>
          ))}
        </motion.ul>

      </motion.div>
            {/* Right */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="relative flex-shrink-0"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Outer Glow */}

          <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />

          {/* Rotating Gradient */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,var(--color-primary),transparent_40%,var(--color-primary))] opacity-80 blur-sm"
          />

          {/* Image */}

          <div className="relative size-72 overflow-hidden rounded-full border-4 border-primary/40 bg-card shadow-2xl shadow-primary/20 sm:size-80 lg:size-96">
            <Image
              src="/image/profile.png"
              alt="Jeyaraaman K"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}