'use client'

import { motion } from 'framer-motion'

export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid */}

      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Center Glow */}

      <motion.div
        className="absolute left-1/2 top-[-180px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left Glow */}

      <motion.div
        className="absolute left-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right Glow */}

      <motion.div
        className="absolute right-[-180px] bottom-[-120px] h-[550px] w-[550px] rounded-full bg-violet-500/10 blur-[160px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small Floating Orb */}

      <motion.div
        className="absolute top-1/2 left-1/3 h-28 w-28 rounded-full bg-primary/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Orb */}

      <motion.div
        className="absolute bottom-20 right-1/4 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}