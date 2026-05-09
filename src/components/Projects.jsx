import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'ai', label: 'AI' },
  { id: 'distributed', label: 'Distributed' },
  { id: 'ml', label: 'ML' },
]

const PROJECTS = [
  {
    id: 'bookmind',
    title: 'BookMind AI',
    category: 'AI',
    cats: ['all', 'full-stack', 'ai'],
    desc: 'Semantic PDF search with vector embeddings, Gemini-powered chat, and auto-graded quizzes. Shipped end-to-end in six weeks.',
    badges: ['Next.js', 'FastAPI', 'Pinecone', 'Redis', 'AWS', 'Gemini'],
    icon: 'ai',
    featured: true,
    links: { demo: null, code: 'https://github.com/Hammad911/UlearnContent' },
  },
  {
    id: 'hivemind',
    title: 'HiveMind',
    category: 'Full-stack',
    cats: ['all', 'full-stack'],
    desc: 'Real-time messaging with SSR feeds, JWT auth, optimistic UI, and a modular structure built to grow with traffic.',
    badges: ['Next.js', 'TypeScript', 'WebSockets'],
    icon: 'fullstack',
    links: {
      demo: null,
      code: 'https://github.com/CaptainAlpha04/hivemind',
    },
  },
  {
    id: 'swiftbyte',
    title: 'SwiftByte',
    category: 'Full-stack',
    cats: ['all', 'full-stack'],
    desc: 'Multi-portal food delivery flows (SwiftBite demo): ordering, tracking, restaurant and rider portals — static UX with demo auth.',
    badges: ['HTML/CSS', 'JavaScript', 'Firebase'],
    icon: 'fullstack',
    links: { demo: null, code: 'https://github.com/Hammad911/SwiftByte' },
  },
  {
    id: 'edge',
    title: 'Edge–Cloud Replication',
    category: 'Distributed',
    cats: ['all', 'distributed'],
    desc: 'Consensus-backed replication with Raft, hybrid logical clocks, causal updates, and chaos-tested convergence guarantees.',
    badges: ['Go / gRPC', 'Raft', 'HLC'],
    icon: 'system',
    links: { demo: null, code: 'https://github.com/Hammad911/Edge_Cloud' },
  },
  {
    id: 'malware',
    title: 'Android Malware Detection',
    category: 'ML',
    cats: ['all', 'ml'],
    desc: 'Multi-class APK classifier with interpretable SHAP outputs for security review workflows and audit trails.',
    badges: ['Python', 'LightGBM', 'SHAP', 'Streamlit'],
    icon: 'ml',
    links: {
      demo: null,
      code: 'https://github.com/Hammad911/MachineLearningProject-',
    },
  },
  {
    id: 'musify',
    title: 'Old Instrument',
    category: 'Product',
    cats: ['all', 'full-stack'],
    desc: 'Image-driven instrument classification and sample-informed harmonic synthesis — FastAPI backend and Vite/React UI.',
    badges: ['FastAPI', 'React', 'Vite', 'Web Audio'],
    icon: 'creative',
    links: { demo: null, code: 'https://github.com/Hammad911/old-instrument-app' },
  },
]

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
}

function StackGlyph({ name }) {
  switch (name) {
    case 'ai':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <path strokeLinecap="round" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.9 2.9M15.5 15.5l2.9 2.9M5.6 18.4l2.9-2.9M15.5 8.5l2.9-2.9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'fullstack':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3M16 15h-5M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    case 'system':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path strokeLinecap="round" d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      )
    case 'ml':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l4-6 4 3 4-8 4 5" />
          <circle cx="8" cy="11" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="6" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="20" cy="11" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'creative':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13M9 18c0 1.1-1.8 2-4 2s-4-.9-4-2 1.8-2 4-2 4 .9 4 2zm12-2c0 1.1-1.8 2-4 2s-4-.9-4-2M9 10l12-2" />
        </svg>
      )
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4h6v6M10 14L20 4M18 12v8H4V6h8" />
        </svg>
      )
  }
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const ordered = useMemo(() => {
    const list = PROJECTS.filter((p) => p.cats.includes(filter))
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  }, [filter])

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-portfolio-border py-20 md:py-28 lg:py-36"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-14 md:text-[13px]"
        >
          04 — Selected Work
        </motion.p>

        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mb-6 max-w-4xl font-display text-4xl font-light tracking-tight text-portfolio-primary md:text-5xl lg:mb-8 lg:text-6xl"
        >
          Engineering work: interfaces, systems, and ML.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-14 max-w-2xl text-lg leading-relaxed text-portfolio-secondary md:mb-16 md:text-xl"
        >
          Case-style cards with stack and actions — wire live demo or repo links in data when you publish them.
        </motion.p>

        <div className="mb-12 flex flex-wrap gap-2.5 md:mb-14 md:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              data-cursor-pointer
              onClick={() => setFilter(f.id)}
              className={`rounded-md border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-[background-color,color,border-color] duration-200 ease-out md:px-5 md:text-xs ${
                filter === f.id
                  ? 'border-portfolio-primary bg-portfolio-primary text-portfolio-tertiary'
                  : 'border-portfolio-border bg-transparent text-portfolio-secondary hover:border-portfolio-primary hover:text-portfolio-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8">
          {ordered.map((p, idx) => (
            <motion.li
              key={p.id}
              custom={idx}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="flex h-full flex-col rounded-lg border border-portfolio-border bg-portfolio-white transition-[border-color] duration-300 hover:border-portfolio-primary"
            >
              <article className="flex h-full flex-col p-6 md:p-8" aria-labelledby={`project-${p.id}-title`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-md border border-portfolio-border bg-portfolio-tertiary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-portfolio-primary md:text-[11px] md:tracking-[0.16em]">
                    {p.category}
                  </span>
                  <span className="text-portfolio-secondary" aria-hidden title={p.category}>
                    <StackGlyph name={p.icon} />
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <h3
                    id={`project-${p.id}-title`}
                    className="font-display text-2xl font-normal leading-tight tracking-tight text-portfolio-primary md:text-[1.65rem]"
                  >
                    {p.title}
                  </h3>
                  {p.featured ? (
                    <span className="rounded border border-portfolio-border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-portfolio-muted">
                      Featured
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 flex-1 text-[0.95rem] leading-[1.65] text-portfolio-secondary md:text-base md:leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-portfolio-border bg-portfolio-tertiary px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-portfolio-secondary md:text-[11px]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5 border-t border-portfolio-border pt-6">
                  {p.links.demo ? (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-pointer
                      className="inline-flex items-center gap-2 rounded-md border border-portfolio-border bg-transparent px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-portfolio-primary transition-[border-color,background-color] duration-200 hover:border-portfolio-primary hover:bg-portfolio-tertiary md:text-xs"
                    >
                      Live demo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4h6v6M10 14L21 3M18 13v8H5V8h11" />
                      </svg>
                    </a>
                  ) : null}
                  {p.links.code ? (
                    <a
                      href={p.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-pointer
                      className="inline-flex items-center gap-2 rounded-md border border-portfolio-border bg-transparent px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-portfolio-primary transition-[border-color,background-color] duration-200 hover:border-portfolio-primary hover:bg-portfolio-tertiary md:text-xs"
                    >
                      Code
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.391 2.834 8.098 6.759 9.406.491.089.659-.217.659-.478 0-.235-.017-1.018-.026-2.036-3.058.659-3.694-1.461-3.694-1.461-.495-1.248-1.208-1.581-1.208-1.581-.986-.673.074-.659.074-.659 1.091.076 1.665 1.116 1.665 1.116.967 1.657 2.539 1.179 3.157.903.097-.716.379-1.179.689-1.451-2.441-.276-5.009-2.239-5.009-5.038 0-1.115.389-2.029 1.031-2.743-.098-.279-.459-1.385.097-2.892 0 0 .849-.279 2.764 1.052.801-.229 1.662-.347 2.527-.348.867 0 1.734.117 2.527.348 1.911-1.331 2.761-1.052 2.761-1.052.557 1.507.206 2.613.099 2.892.642.714 1.027 1.628 1.027 2.743 0 2.802-2.576 5.761-5.036 6.036.379.337.734 1.003.734 2.036 0 1.478-.026 2.659-.026 3.036 0 .295.173.579.694.489C21.173 19.089 23 14.379 23 12c-.001-5.523-4.478-10-11-10"
                        />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center md:mt-20">
          <a
            href="#contact"
            data-cursor-pointer
            className="rounded-lg border border-portfolio-primary px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-primary transition-[background-color,color] duration-200 hover:bg-portfolio-primary hover:text-portfolio-tertiary"
          >
            Discuss a build →
          </a>
        </div>
      </div>
    </section>
  )
}
