"use client"
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = saved ? saved === 'dark' : prefersDark
      setIsDark(initial)
    } catch {}
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    try {
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={clsx(
        'inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 transition-colors',
        compact ? 'w-9 h-9' : 'w-10 h-10'
      )}
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path fillRule="evenodd" d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-7a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm13.657 6.657a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.464 6.343A1 1 0 016.05 4.929l.707-.707A1 1 0 018.17 5.636l-.707.707zM17.95 4.929a1 1 0 00-1.414-1.414l-.707.707A1 1 0 0017.95 6.343l.707-.707zM6.343 17.657a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-700">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  )
}
