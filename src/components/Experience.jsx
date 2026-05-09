import { motion } from 'framer-motion'

const ITEMS = [
  {
    dates: 'Jun – Aug 2025',
    title: 'Full-Stack Developer Intern — Ulearn, Lahore',
    bullets: [
      'Built React + Node.js dashboards, cutting ~20% daily manual work.',
      'Replaced fragile data layer with RESTful APIs.',
      'Ran web penetration testing — found & patched 10+ critical vulnerabilities using Nmap and Metasploit.',
    ],
  },
]

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Experience() {
  return (
    <section
      className="scroll-mt-24 border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-16 md:text-[13px]"
        >
          03 — Experience
        </motion.p>

        <motion.h2
          id="experience-heading"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-16 max-w-3xl font-display text-4xl font-light text-portfolio-primary md:mb-20 md:text-5xl lg:text-6xl"
        >
          Roles where I shipped real impact on production teams.
        </motion.h2>

        <div className="relative pl-12 md:pl-16 lg:pl-20">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-portfolio-border md:left-5"
            aria-hidden
          />
          <ul className="space-y-10">
            {ITEMS.map((job) => (
              <motion.li
                key={job.title}
                variants={sectionMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8% 0px' }}
                className="border border-portfolio-border bg-transparent p-8 transition-colors duration-300 hover:border-portfolio-muted md:grid md:grid-cols-[minmax(0,260px)_1fr] md:gap-14 md:p-14"
              >
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-portfolio-secondary md:mb-0 md:text-[15px]">
                  [{job.dates}]
                </p>
                <div>
                  <h3 className="font-display text-2xl font-normal text-portfolio-primary md:text-3xl lg:text-4xl">
                    {job.title}
                  </h3>
                  <ul className="mt-8 space-y-4 text-lg leading-relaxed text-portfolio-secondary md:text-xl md:leading-[1.7]">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-portfolio-border" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
