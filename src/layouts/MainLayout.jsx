import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (location.pathname !== '/') return
    const raw = location.hash.replace('#', '').trim()
    if (!raw) return

    const id = decodeURIComponent(raw)
    const el = document.getElementById(id)
    if (!el) return

    const behavior = reduceMotion ? 'auto' : 'smooth'

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior, block: 'start' })
    })
  }, [location.pathname, location.hash, reduceMotion])

  return (
    <div className="min-h-svh bg-portfolio-tertiary text-portfolio-primary">
      <a
        href="#about"
        className="fixed left-4 top-4 z-[300] pointer-events-none -translate-y-3 border border-portfolio-primary bg-portfolio-tertiary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-primary opacity-0 outline-none ring-offset-2 ring-offset-portfolio-tertiary transition-[transform,opacity] duration-200 ease-out focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-portfolio-primary"
      >
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
