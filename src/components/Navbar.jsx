import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext.jsx'

const NAV = [
  { label: 'About', to: '/#about', sectionId: 'about' },
  { label: 'Skills', to: '/#skills', sectionId: 'skills' },
  { label: 'Work', to: '/#work', sectionId: 'work' },
  { label: 'Services', to: '/#services', sectionId: 'services' },
  { label: 'Contact', to: '/#contact', sectionId: 'contact' },
]

function NavbarLogo({ onClick }) {
  return (
    <Link
      to="/"
      data-cursor-pointer
      onClick={onClick}
      className="group inline-flex items-center gap-2 text-portfolio-primary transition-[color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-primary"
      aria-label="Home"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="border border-portfolio-border transition-[border-color] duration-300 ease-out group-hover:border-portfolio-muted"
      >
        <rect x="1" y="1" width="38" height="38" className="fill-portfolio-tertiary" />
        <text
          x="20"
          y="26"
          className="fill-portfolio-primary"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
        >
          HA
        </text>
      </svg>
    </Link>
  )
}

function navLinkClasses(active) {
  const base =
    'text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-primary md:text-sm'
  const tone = active
    ? ' text-portfolio-primary'
    : ' text-portfolio-secondary hover:text-portfolio-primary'
  return `${base}${tone}`
}

function ThemeCycleButton() {
  const { theme, resolved, cycleTheme } = useTheme()
  const label =
    theme === 'system'
      ? `Following system (${resolved} mode). Click to switch to ${resolved === 'dark' ? 'light' : 'dark'} mode.`
      : `Appearance: ${theme} mode. Click to switch to ${resolved === 'dark' ? 'light' : 'dark'} mode.`

  return (
    <button
      type="button"
      data-cursor-pointer
      onClick={cycleTheme}
      className="flex h-11 w-11 items-center justify-center border border-portfolio-border text-portfolio-primary transition-[border-color,background-color] duration-200 ease-out hover:border-portfolio-primary hover:bg-portfolio-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-primary"
      aria-label={label}
      title={label}
    >
      {theme === 'system' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="1" />
          <path strokeLinecap="round" d="M8 21h8M12 18v3" />
        </svg>
      ) : theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 14.8A8.48 8.48 0 0111.2 4a8.54 8.54 0 009.8 10.8z"
          />
        </svg>
      )}
    </button>
  )
}

function headerScrollOffset() {
  return window.matchMedia('(min-width: 768px)').matches ? 104 : 92
}

function scrollToSectionId(sectionId, { smooth = true } = {}) {
  const el = document.getElementById(sectionId)
  if (!el) return
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior = prefersReduce || !smooth ? 'auto' : 'smooth'
  el.scrollIntoView({ behavior, block: 'start' })
}

export default function Navbar() {
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [elevated, setElevated] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setElevated(y > 6)
      if (y < 48) {
        setHidden(false)
        lastY.current = y
        return
      }
      if (y > lastY.current + 12) setHidden(true)
      if (y < lastY.current - 6) setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const flush =
      typeof queueMicrotask === 'function' ? queueMicrotask : (fn) => Promise.resolve().then(fn)

    if (location.pathname !== '/') {
      flush(() => {
        setActiveSection('')
      })
      return undefined
    }

    function pickActive() {
      const about = document.getElementById('about')
      if (!about) {
        setActiveSection('')
        return
      }

      const aboutTop = about.getBoundingClientRect().top + window.scrollY

      const headerPad = headerScrollOffset() + 8
      if (window.scrollY + headerPad < aboutTop - 32) {
        setActiveSection('')
        return
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 64
      if (nearBottom) {
        setActiveSection('contact')
        return
      }

      let current = NAV[0].sectionId
      const trigger = window.scrollY + headerScrollOffset() + 48

      for (const item of NAV) {
        const el = document.getElementById(item.sectionId)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (trigger >= top - 12) current = item.sectionId
      }
      setActiveSection(current)
    }

    flush(() => {
      pickActive()
    })

    window.addEventListener('scroll', pickActive, { passive: true })
    window.addEventListener('resize', pickActive)

    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => pickActive())
        : null

    NAV.forEach((item) => {
      const section = document.getElementById(item.sectionId)
      if (section && ro) ro.observe(section)
    })

    const aboutSection = document.getElementById('about')
    if (aboutSection && ro) ro.observe(aboutSection)

    return () => {
      window.removeEventListener('scroll', pickActive)
      window.removeEventListener('resize', pickActive)
      ro?.disconnect()
    }
  }, [location.pathname])

  const handleNavClick = () => setOpen(false)

  const hashLinkNavigate = (e, sectionId) => {
    handleNavClick()
    if (location.pathname !== '/') return
    e.preventDefault()
    scrollToSectionId(sectionId, { smooth: true })
    window.history.replaceState(null, '', `#${sectionId}`)
  }

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-[200] border-b transition-[border-color,background-color,backdrop-filter] duration-500 ease-out ${
          elevated
            ? 'border-portfolio-border/90 bg-portfolio-tertiary/80 supports-[backdrop-filter]:backdrop-blur-xl supports-[backdrop-filter]:bg-portfolio-tertiary/70'
            : 'border-portfolio-border bg-portfolio-tertiary'
        }`}
        initial={false}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="mx-auto grid w-full max-w-[1720px] grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-5 md:grid-cols-[minmax(140px,auto)_1fr_auto] md:gap-x-8 md:px-6 lg:px-10 xl:py-6"
          aria-label="Primary"
        >
          <NavbarLogo />

          <ul className="hidden items-center justify-center gap-x-8 md:col-start-2 md:flex xl:gap-x-12">
            {NAV.map((item) => {
              const isActive =
                location.pathname === '/' && activeSection === item.sectionId
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    data-cursor-pointer
                    aria-current={isActive ? 'page' : undefined}
                    className={`${navLinkClasses(isActive)} ${isActive ? 'border-b border-portfolio-primary pb-0.5' : ''}`}
                    onClick={(e) => hashLinkNavigate(e, item.sectionId)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center justify-end gap-4 md:col-start-3 md:flex lg:gap-5">
            <ThemeCycleButton />
            <Link
              data-cursor-pointer
              to="/#contact"
              aria-current={
                location.pathname === '/' && activeSection === 'contact' ? 'page' : undefined
              }
              className="border border-portfolio-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-primary transition-[background-color,color,border-color] duration-200 ease-out hover:bg-portfolio-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-primary md:text-sm md:tracking-[0.2em]"
              onClick={(e) => hashLinkNavigate(e, 'contact')}
            >
              Book A Call ↗
            </Link>
          </div>

          <div className="col-start-2 flex items-center justify-end gap-2 justify-self-end md:hidden">
            <ThemeCycleButton />
            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-2 border border-portfolio-border"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block h-px w-6 bg-portfolio-primary transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-portfolio-primary transition-opacity ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-portfolio-primary transition-transform ${open ? '-translate-y-[4px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col bg-portfolio-tertiary md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-portfolio-border px-5 py-5">
              <NavbarLogo onClick={handleNavClick} />
              <div className="flex items-center gap-2">
                <ThemeCycleButton />
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center border border-portfolio-border text-2xl font-light leading-none text-portfolio-primary"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
            <nav className="flex flex-1 flex-col px-6 py-10" aria-label="Mobile primary">
              {NAV.map((item, i) => {
                const isActive =
                  location.pathname === '/' && activeSection === item.sectionId
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={item.to}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => hashLinkNavigate(e, item.sectionId)}
                      className={`block border-b border-portfolio-border py-6 font-display text-4xl font-light leading-tight ${
                        isActive ? 'text-portfolio-primary' : 'text-portfolio-secondary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="mt-14">
                <Link
                  to="/#contact"
                  onClick={(e) => hashLinkNavigate(e, 'contact')}
                  className="inline-block border border-portfolio-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-primary transition-[background-color,color] duration-200 ease-out hover:bg-portfolio-white"
                >
                  Book A Call ↗
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-[92px] md:h-[104px]" aria-hidden />
    </>
  )
}
