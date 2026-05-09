import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '1',
    title: 'Understand',
    body: 'Goals, scope, and technical constraints',
  },
  {
    n: '2',
    title: 'Architect',
    body: 'System design before a single line of code',
  },
  {
    n: '3',
    title: 'Build',
    body: 'Iterative, tested, production-grade development',
  },
  {
    n: '4',
    title: 'Ship',
    body: 'Deploy, monitor, and hand off cleanly',
  },
]

export default function Process() {
  return (
    <section
      className="border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-14 md:text-[13px]"
        >
          06 — How I Work
        </motion.p>

        <motion.h2
          id="process-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-14 max-w-3xl font-display text-4xl font-light text-portfolio-primary md:mb-20 md:text-5xl lg:mb-24 lg:text-6xl"
        >
          Structured delivery from discovery to steady-state operations.
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col border border-portfolio-border p-10 lg:p-12"
            >
              <span className="font-display text-7xl font-light leading-none text-portfolio-secondary md:text-8xl">
                {s.n}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-portfolio-primary md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-portfolio-secondary md:text-xl md:leading-[1.65]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
