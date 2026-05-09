import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

const PORTRAIT = encodeURI('/Hammad Ahmed.png')

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const container = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: reduceMotion
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.06, delayChildren: 0.04 },
      },
    }),
    [reduceMotion],
  )

  const item = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.2 : 0.55, ease: EASE },
      },
    }),
    [reduceMotion],
  )

  return (
    <section
      aria-label="Introduction"
      className="relative mx-auto w-full max-w-[1720px] px-4 pb-12 pt-6 md:px-6 md:pb-16 md:pt-9 lg:px-12 lg:pb-20 lg:pt-10 xl:px-20 2xl:px-24"
    >
      {/* Edge labels — reference-style vertical cues, borderless */}
      <div
        className="pointer-events-none absolute bottom-28 left-0 top-28 z-10 hidden w-10 items-center justify-between lg:flex lg:flex-col lg:left-1 xl:left-6"
        aria-hidden
      >
        <span className="mx-auto whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.45em] text-portfolio-muted [writing-mode:vertical-rl] rotate-180">
          Full-stack engineer
        </span>
        <span className="mx-auto whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.48em] text-portfolio-muted [writing-mode:vertical-rl] rotate-180 tabular-nums">
          2026
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative flex w-full justify-center"
      >
        <div className="flex w-full max-w-[min(100%,1320px)] flex-col lg:w-fit lg:flex-row lg:items-start lg:justify-center lg:gap-5 xl:gap-8">
          <div className="min-w-0 max-w-xl lg:max-w-[min(100%,36rem)] lg:pt-2 xl:max-w-[42rem]">
            <motion.p
              variants={item}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-portfolio-muted md:mb-6 md:text-[12px] lg:hidden"
            >
              Full-stack · AI · Cloud &amp; security
            </motion.p>

            <motion.div
              variants={item}
              className="mb-8 flex flex-wrap gap-x-10 gap-y-7 md:mb-10 md:gap-x-14"
            >
              <div>
                <p className="font-display text-[clamp(2.85rem,6.75vw,5.05rem)] font-extralight leading-none tracking-[-0.04em] text-portfolio-primary [font-weight:200] tabular-nums">
                  +10
                </p>
                <p className="mt-2.5 max-w-[14rem] text-base font-normal leading-relaxed text-portfolio-secondary md:text-[1.05rem] md:leading-snug">
                  Vulnerabilities patched
                </p>
              </div>
              <div>
                <p className="font-display text-[clamp(2.85rem,6.75vw,5.05rem)] font-extralight leading-none tracking-[-0.04em] text-portfolio-primary [font-weight:200] tabular-nums">
                  +6
                </p>
                <p className="mt-2.5 max-w-[14rem] text-base font-normal leading-relaxed text-portfolio-secondary md:text-[1.05rem] md:leading-snug">
                  Projects shipped end-to-end
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="pt-10 md:pt-12 lg:pt-14">
              <h1 className="font-display text-[clamp(4.05rem,11.25vw,9.35rem)] font-extralight leading-[0.92] tracking-[-0.034em] text-portfolio-primary [font-weight:200]">
                Hello,
              </h1>
              <p className="mt-6 max-w-xl text-[1.115rem] font-normal leading-relaxed tracking-wide text-portfolio-primary md:mt-8 md:text-[1.275rem] md:leading-snug lg:text-[1.325rem] lg:leading-[1.52] xl:max-w-2xl">
                <span className="text-portfolio-muted">—</span> I&apos;m{' '}
                <span className="font-semibold text-portfolio-primary">Hammad Ahmed</span>. I design and ship
                full-stack systems — interfaces, APIs, cloud infra, and secure releases.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-between gap-6 md:mt-12 xl:max-w-xl"
            >
              <a
                href="#work"
                data-cursor-pointer
                className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-portfolio-muted transition-colors duration-200 hover:text-portfolio-primary md:text-[12px]"
              >
                <span className="inline-block h-px w-5 bg-current transition-all duration-300 group-hover:w-9" />
                Scroll down&nbsp;↓
              </a>
              <p className="text-[9px] font-semibold uppercase tracking-[0.48em] text-portfolio-muted tabular-nums lg:hidden">
                2026
              </p>
            </motion.div>
          </div>

          <motion.figure
            variants={item}
            className="relative z-0 mx-auto mt-12 w-full max-w-[min(90vw,360px)] shrink-0 sm:max-w-[400px] lg:mx-0 lg:mt-1 lg:w-auto lg:max-w-[min(46vw,520px)] lg:self-start xl:max-w-[560px]"
          >
            <div className="hero-portrait-wrap">
              <img
                src={PORTRAIT}
                alt="Hammad Ahmed"
                className="relative z-0 block aspect-[3/4] h-full w-full border-0 object-cover object-[center_14%] grayscale brightness-[1.03] contrast-[1.05] outline-none shadow-none ring-0 md:brightness-[1.02] md:contrast-[1.04] dark:brightness-[1.04] dark:contrast-[1.03]"
                width={840}
                height={1120}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/900/1200?grayscale'
                }}
              />
            </div>
          </motion.figure>
        </div>
      </motion.div>
    </section>
  )
}
