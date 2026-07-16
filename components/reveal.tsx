'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  scale?: number
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  scale = 0.98,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}