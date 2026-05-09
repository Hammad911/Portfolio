import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

const ThemeContext = createContext(null)

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark' || v === 'system') return v
  } catch {
    /* ignore */
  }
  return 'system'
}

function applyHtmlClass(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStored)
  const [systemDark, setSystemDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const sync = () => setSystemDark(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const resolved = useMemo(
    () => (theme === 'system' ? (systemDark ? 'dark' : 'light') : theme),
    [theme, systemDark],
  )

  useEffect(() => {
    applyHtmlClass(resolved === 'dark')
  }, [resolved])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const cycleTheme = useCallback(() => {
    setTheme(resolved === 'dark' ? 'light' : 'dark')
  }, [resolved])

  const value = useMemo(
    () => ({ theme, resolved, cycleTheme, setTheme }),
    [theme, resolved, cycleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Hook colocated with provider for ThemeProvider-style modules.
// eslint-disable-next-line react-refresh/only-export-components -- paired hook export
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}