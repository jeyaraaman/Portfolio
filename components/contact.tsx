import { Reveal } from '@/components/reveal'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const contacts = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/jeyaraaman',
    href: 'https://github.com/jeyaraaman',
  },
   {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeyaraaman-k',
    href: 'https://www.linkedin.com/in/jeyaraaman-k',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jeyaraaman2419@gmail.com',
    href: 'mailto:jeyaraaman2419@gmail.com',
  }
]

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-[-8rem] px-6 py-24"
    >
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12">

          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">

            {/* LEFT */}

            <div>

              <p className="font-mono text-sm text-primary">
                07 — Contact
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Let's Connect
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
                I'm currently seeking opportunities in Python Full Stack
                Development, Artificial Intelligence, Machine Learning,
                and Computer Vision. Feel free to reach out if you'd
                like to discuss internships, full-time roles,
                collaborations, or interesting projects.
              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    contact.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/40"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <contact.icon className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-xs text-muted-foreground">
                      {contact.label}
                    </p>

                    <p className="truncate text-sm font-medium">
                      {contact.value}
                    </p>

                  </div>

                  <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />

                </a>
              ))}

            </div>

          </div>
        </div>
      </Reveal>
    </section>
  )
}