import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'Full-Stack Development',
    body: 'End-to-end web apps — React/Next.js frontends, FastAPI/Node.js backends, production-ready.',
  },
  {
    title: 'AI Integration',
    body: 'RAG pipelines, semantic search, Gemini AI, vector DBs (Pinecone) — making apps intelligently powerful.',
  },
  {
    title: 'Cloud & DevOps',
    body: 'AWS deployments, Docker, Redis caching, auto-scaling, zero-downtime infrastructure.',
  },
  {
    title: 'Security Auditing',
    body: 'Web penetration testing with Nmap & Metasploit, OWASP-guided vulnerability assessment and patching.',
  },
]

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-14 md:text-[13px]"
        >
          05 — What I Offer
        </motion.p>

        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-14 max-w-3xl font-display text-4xl font-light text-portfolio-primary md:mb-16 md:text-5xl lg:text-6xl"
        >
          End-to-end delivery from interface to infrastructure.
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-x-12 lg:gap-y-10">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8% 0px' }}
              className="group border border-portfolio-border bg-transparent p-10 transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:border-portfolio-primary md:p-12 lg:p-14"
            >
              <h3 className="font-display text-3xl font-normal text-portfolio-primary md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-portfolio-secondary md:mt-8 md:text-xl md:leading-[1.65]">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
