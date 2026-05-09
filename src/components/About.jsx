import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useCountUp(active, end, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return undefined
    let raf
    const start = performance.now()
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setVal(Math.round(eased * end))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, end, duration])
  return val
}

const BIO =
  "CS student at NUST building production-grade full-stack systems. I work across React/Next.js frontends, FastAPI/Node.js backends, and AWS deployments with Docker. I've shipped AI-powered products, real-time infrastructure, distributed systems, and led teams of up to 99 people."

const HIGHLIGHTS = [
  'Full-stack (React / Next · FastAPI / Node)',
  'AI & RAG (Gemini · vector search)',
  'Cloud & ops (AWS · Docker · Redis)',
  'Security testing (web pen · OWASP)',
]

const MARQUEE =
  'Available for Work · Full-Stack Dev · AI Integration · Cloud Systems · Cybersecurity · Open to Internships · '

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const c10 = useCountUp(inView, 10)
  const c6 = useCountUp(inView, 6)

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 border-t border-portfolio-border py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1720px] px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.p
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-12 text-xs font-semibold uppercase tracking-[0.26em] text-portfolio-secondary md:mb-16 md:text-[13px]"
        >
          01 — About Me
        </motion.p>

        <div className="mb-14 flex flex-wrap items-end gap-12 border border-portfolio-border px-8 py-10 transition-colors duration-300 hover:border-portfolio-muted md:mb-16 md:px-12 lg:justify-between lg:gap-20 lg:py-12">
          <div>
            <p className="font-display text-7xl font-light leading-none text-portfolio-secondary md:text-8xl lg:text-9xl">
              +
              <span>{c10}</span>
            </p>
            <p className="mt-3 max-w-[13rem] text-base font-medium leading-snug text-portfolio-secondary md:text-lg">
              vulnerabilities patched across audits
            </p>
          </div>
          <div>
            <p className="font-display text-7xl font-light leading-none text-portfolio-secondary md:text-8xl lg:text-9xl">
              +
              <span>{c6}</span>
            </p>
            <p className="mt-3 max-w-[13rem] text-base font-medium leading-snug text-portfolio-secondary md:text-lg">
              shipped projects delivered end-to-end
            </p>
          </div>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-5"
          >
            <span className="font-display text-9xl font-light leading-none text-portfolio-secondary/80 md:text-[10rem] lg:text-[11rem]">
              01
            </span>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.06] tracking-tight text-portfolio-primary md:text-5xl lg:text-6xl">
              Designing systems with precision and care.
            </h2>
          </motion.div>

          <motion.div
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-7"
          >
            <p className="max-w-3xl text-lg font-normal leading-[1.8] text-portfolio-primary md:text-xl md:font-medium lg:text-[1.35rem] lg:leading-[1.85]">
              {BIO}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-portfolio-secondary md:mt-10 md:text-lg md:leading-[1.7]">
              For languages, frameworks, data stores, and tooling with brand marks, see the{' '}
              <a
                data-cursor-pointer
                href="#skills"
                className="font-semibold text-portfolio-primary underline decoration-portfolio-muted underline-offset-[0.22em] transition-colors duration-200 hover:decoration-portfolio-primary"
              >
                Skills
              </a>{' '}
              section.
            </p>
            <div className="mt-10 flex flex-wrap gap-2.5 md:mt-12 md:gap-3">
              {HIGHLIGHTS.map((s) => (
                <span
                  key={s}
                  className="border border-portfolio-border bg-portfolio-tertiary px-4 py-2 text-xs font-semibold uppercase tracking-[0.11em] text-portfolio-secondary transition-[border-color,color] duration-200 hover:border-portfolio-primary hover:text-portfolio-primary md:text-[13px]"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              data-cursor-pointer
              href="/Hammad_Ahmed_Resume.pdf"
              download="Hammad_Ahmed_Resume.pdf"
              className="mt-12 inline-block border border-portfolio-primary px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-primary transition-[background-color,color] duration-200 ease-out hover:bg-portfolio-white"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <div className="relative mt-20 overflow-hidden border-y border-portfolio-border py-5 md:mt-24">
          <div className="flex w-max animate-marquee">
            <p className="whitespace-nowrap px-5 text-sm font-semibold uppercase tracking-[0.32em] text-portfolio-secondary md:text-base">
              {MARQUEE.repeat(4)}
            </p>
            <p
              className="whitespace-nowrap px-5 text-sm font-semibold uppercase tracking-[0.32em] text-portfolio-secondary md:text-base"
              aria-hidden
            >
              {MARQUEE.repeat(4)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
