"use client"
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import ThemeToggle from '@/components/theme/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  // Initialize theme on mount from localStorage or system preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const shouldDark = saved ? saved === 'dark' : prefersDark
      document.documentElement.classList.toggle('dark', shouldDark)
    } catch {}
  }, [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary/90 text-white grid place-content-center font-bold">N</div>
          <span className="font-semibold">NAMMES</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link href="/certificate/register" className="hover:text-primary">Certificate</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link href="/auth/login"><Button size="sm">Login</Button></Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Menu">
          <div className="w-6 h-[2px] bg-slate-800 dark:bg-slate-200 mb-1"/>
          <div className="w-6 h-[2px] bg-slate-800 dark:bg-slate-200 mb-1"/>
          <div className="w-6 h-[2px] bg-slate-800 dark:bg-slate-200"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/certificate/register" onClick={() => setOpen(false)}>Certificate</Link>
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggle compact />
              <Link href="/auth/login" onClick={() => setOpen(false)}><Button variant="secondary" size="sm">Login</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
