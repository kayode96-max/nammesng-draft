'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo mode: redirect without real authentication
    router.push('/portal/home')
  }

  return (
    <section className="container py-16 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-soft p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary text-center">Login to NAMMES Portal</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Certificate ID or Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded px-3 py-2 mt-1"
              placeholder="NAMMES/2025/0001"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 text-center">
          Don't have an account? <a href="/certificate/register" className="text-primary underline">Register here</a>
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">Demo mode: clicking Login redirects to the portal.</p>
      </div>
    </section>
  )
}
