import {
  siBurpsuite,
  siC,
  siDocker,
  siElasticsearch,
  siFastapi,
  siGooglegemini,
  siJavascript,
  siLangchain,
  siMetasploit,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siOwasp,
  siPrometheus,
  siPython,
  siReact,
  siRedis,
  siTypescript,
} from 'simple-icons'
import { motion } from 'framer-motion'

const CARDS = [
  {
    title: 'Languages & web',
    categoryIcon: 'code',
    skills: [
      { icon: siJavascript, label: 'JavaScript' },
      { icon: siTypescript, label: 'TypeScript' },
      { icon: siPython, label: 'Python' },
      { icon: siOpenjdk, label: 'Java' },
      { icon: siC, label: 'C' },
      { icon: siReact, label: 'React' },
      { icon: siNextdotjs, label: 'Next.js' },
      { icon: siNodedotjs, label: 'Node.js' },
      { icon: siFastapi, label: 'FastAPI' },
    ],
  },
  {
    title: 'Data & platform',
    categoryIcon: 'stack',
    skills: [
      { icon: siMysql, label: 'MySQL' },
      { icon: siRedis, label: 'Redis' },
      { icon: null, label: 'Pinecone', initials: 'Pc' },
      { icon: siDocker, label: 'Docker' },
      { icon: null, label: 'AWS', initials: 'AWS' },
      { icon: siPrometheus, label: 'Prometheus' },
    ],
  },
  {
    title: 'AI & security',
    categoryIcon: 'bolt',
    skills: [
      { icon: siGooglegemini, label: 'Gemini' },
      { icon: siLangchain, label: 'RAG' },
      { icon: siElasticsearch, label: 'Semantic search' },
      { icon: null, label: 'Nmap', initials: 'Nm' },
      { icon: siMetasploit, label: 'Metasploit' },
      { icon: siOwasp, label: 'OWASP' },
      { icon: siBurpsuite, label: 'Web pen testing' },
    ],
  },
]

function CategoryGlyph({ name }) {
  const cls = 'h-5 w-5 shrink-0 text-portfolio-primary md:h-[1.35rem] md:w-[1.35rem]'
  switch (name) {
    case 'code':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 16l-2-9" />
        </svg>
      )
    case 'stack':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path strokeLinecap="round" d="M5 17h14M8 13h11M11 9h10M13 5h8" />
        </svg>
      )
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h7l-1 7 13-17h-8l2-11z" />
        </svg>
      )
  }
}

function SkillChip({ icon, label, initials }) {
  const shell =
    'inline-flex max-w-full items-center gap-2.5 rounded-md border-2 border-portfolio-border bg-portfolio-tertiary px-2.5 py-2 transition-[border-color] duration-200 hover:border-portfolio-primary/45 md:gap-3 md:px-3 md:py-2.5'

  if (!icon) {
    const text = initials ?? label.slice(0, 3)
    return (
      <div className={shell}>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-portfolio-border bg-portfolio-white text-[8px] font-bold uppercase leading-none tracking-tight text-portfolio-primary md:h-9 md:w-9 md:text-[9px]">
          {text}
        </span>
        <span className="min-w-0 text-sm font-semibold leading-tight tracking-tight text-portfolio-primary md:text-[0.9375rem]">
          {label}
        </span>
      </div>
    )
  }

  const { path, hex, title } = icon
  const safeHex = `#${hex}`

  return (
    <div className={shell}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={title}
        className="h-8 w-8 shrink-0 md:h-9 md:w-9"
      >
        <path fill={safeHex} d={path} />
      </svg>
      <span className="min-w-0 text-sm font-semibold leading-tight tracking-tight text-portfolio-primary md:text-[0.9375rem]">
        {label}
      </span>
    </div>
  )
}

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-portfolio-border py-14 md:py-20 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-portfolio-secondary md:mb-3.5 md:text-[11px]"
        >
          02 — Skills
        </motion.p>

        <motion.h2
          id="skills-heading"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          className="mb-8 max-w-2xl font-display text-3xl font-normal tracking-tight text-portfolio-primary md:mb-10 md:text-4xl lg:text-[2.75rem]"
        >
          Stack at a glance
        </motion.h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card, i) => (
            <motion.li
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ delay: i * 0.05 }}
              variants={fade}
              className="min-w-0"
            >
              <article className="flex h-full flex-col rounded-lg border-2 border-portfolio-border bg-portfolio-white p-4 md:p-5 xl:p-6">
                <div className="flex items-center gap-3 border-b-2 border-portfolio-border pb-3 md:gap-3.5 md:pb-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-portfolio-border bg-portfolio-tertiary md:h-11 md:w-11"
                    aria-hidden
                  >
                    <CategoryGlyph name={card.categoryIcon} />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-portfolio-primary md:text-lg md:leading-snug">
                    {card.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2.5 md:mt-5 md:gap-3">
                  {card.skills.map((s) => (
                    <SkillChip key={s.label} icon={s.icon} label={s.label} initials={s.initials} />
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
