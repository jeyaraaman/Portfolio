'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = links.map((l) =>
      document.querySelector(l.href)
    )

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6)

      let current = ''

      sections.forEach((section, index) => {
        if (!section) return

        const top = (section as HTMLElement).offsetTop - 120

        if (window.scrollY >= top) {
          current = links[index].href
        }
      })

      setActiveSection(current)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300',
          scrolled
            ? 'glass shadow-xl shadow-black/20'
            : 'border border-transparent'
        )}
      >
        {/* Logo */}

       <a
  href="#home"
  className="flex items-center gap-3"
>
  <Image
    src="/logo1.png"
    alt="JK Logo"
    width={50}
    height={50}
    className="object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
  />

  <div className="hidden sm:block">
    <p className="font-semibold">
      Jeyaraaman K
    </p>

    <p className="text-xs text-muted-foreground">
      Python Full Stack Developer
    </p>
  </div>
</a>

        {/* Desktop */}

        <ul className="hidden items-center gap-2 lg:flex">

          {links.map((link) => {

            const active = activeSection === link.href

            return (

              <li
                key={link.href}
                className="relative"
              >
                <a
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-300',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}

                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-2 right-2 h-[2px] rounded-full bg-primary"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              </li>

            )
          })}

        </ul>

        {/* Right */}

        <div className="flex items-center gap-3">

          <AnimatePresence>

            {scrolled && (

              <motion.a
                href="/resume/resume.pdf"
                download
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: .25 }}
                className="hidden items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20 sm:flex"
              >
                <Download className="size-4" />
                Resume
              </motion.a>

            )}

          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

        </div>

      </nav>

      {/* Mobile */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="glass absolute left-4 right-4 top-20 rounded-2xl border border-border p-5 lg:hidden"
          >

            <ul className="space-y-2">

              {links.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 transition hover:bg-secondary"
                  >
                    {link.label}
                  </a>

                </li>

              ))}

              {scrolled && (

                <li>

                  <a
                    href="/resume/resume.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-primary-foreground"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>

                </li>

              )}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  )
}