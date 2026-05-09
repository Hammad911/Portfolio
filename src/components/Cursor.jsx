import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const SPRING = { stiffness: 700, damping: 48, mass: 0.1 }

export default function Cursor() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const px = useMotionValue(-100)
  const py = useMotionValue(-100)
  const sx = useSpring(px, SPRING)
  const sy = useSpring(py, SPRING)

  useEffect(() => {
    const fineMq = window.matchMedia(
      '(min-width: 768px) and (hover: hover) and (pointer: fine)',
    )
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const apply = () => {
      const ok = fineMq.matches && !reduceMq.matches
      setActive(ok)
      document.body.classList.toggle('use-custom-cursor', ok)
    }
    apply()
    fineMq.addEventListener('change', apply)
    reduceMq.addEventListener('change', apply)
    return () => {
      fineMq.removeEventListener('change', apply)
      reduceMq.removeEventListener('change', apply)
      document.body.classList.remove('use-custom-cursor')
    }
  }, [])

  useEffect(() => {
    if (!active) return undefined

    const move = (e) => {
      px.set(e.clientX)
      py.set(e.clientY)
      setVisible(true)
      const interactive = e.target.closest(
        'a, button, input, textarea, select, [data-cursor-pointer]',
      )
      setHovered(Boolean(interactive))
    }

    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [active, px, py])

  if (!active) return null

  const diameter = hovered ? 40 : 10

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      aria-hidden="true"
      style={{
        x: sx,
        y: sy,
      }}
      animate={{
        marginLeft: -diameter / 2,
        marginTop: -diameter / 2,
        width: diameter,
        height: diameter,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.15 },
        width: { type: 'spring', stiffness: 500, damping: 32 },
        height: { type: 'spring', stiffness: 500, damping: 32 },
        marginLeft: { type: 'spring', stiffness: 500, damping: 32 },
        marginTop: { type: 'spring', stiffness: 500, damping: 32 },
      }}
    >
      <div className="h-full w-full rounded-full border border-portfolio-primary bg-portfolio-white" />
    </motion.div>
  )
}
