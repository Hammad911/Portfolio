import { motion } from 'framer-motion'

const ROLES = [
  {
    n: '1',
    title: 'Deputy Director, Orientation Guides — NUST',
    body: 'Led 99 guides to onboard 4,500 incoming freshmen',
  },
  {
    n: '2',
    title: 'Deputy Director, Internal Affairs — NUST Olympiad',
    body: 'Managed 45-person ops team for 3,000 participants',
  },
  {
    n: '3',
    title: 'Deputy Director, Marketing — NUST Community Service Club',
    body: 'Raised PKR 1.7M · 1,300 pints of blood collected',
  },
]

export default function Leadership() {
  return (
    <section
      className="border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-14 md:text-[13px]"
        >
          07 — Beyond Code
        </motion.p>

        <motion.h2
          id="leadership-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-14 max-w-3xl font-display text-4xl font-light text-portfolio-primary md:mb-20 md:text-5xl lg:text-6xl"
        >
          Operational leadership alongside deep technical ownership.
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {ROLES.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-portfolio-border p-10 md:p-14"
            >
              <span className="font-display text-7xl font-light text-portfolio-secondary md:text-8xl">
                {r.n}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold leading-snug text-portfolio-primary md:text-3xl">
                {r.title}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-portfolio-secondary md:mt-6 md:text-xl">
                {r.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
