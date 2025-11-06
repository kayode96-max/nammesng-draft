
'use client'
import { useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import Button from '@/components/ui/Button'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Failed to send message.')
    }
  }

  return (
    <section className="container py-16">
      <Reveal>
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 focus-visible:shadow-glow"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 focus-visible:shadow-glow"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mt-1 h-32 focus-visible:shadow-glow"
              required
            />
          </div>
          <Button type="submit" className="btn-shadow">Send Message</Button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>

        <div className="space-y-4">
          <Card>
            <CardBody>
              <CardTitle>Contact Details</CardTitle>
              <p className="mt-2 text-sm text-gray-600">Email: info@nammes.org</p>
              <p className="text-sm text-gray-600">Phone: +234 800 123 4567</p>
              <p className="text-sm text-gray-600">Address: Lagos, Nigeria</p>
            </CardBody>
          </Card>
          <div className="glass rounded-xl h-64 flex items-center justify-center text-gray-600">
            Google Maps Embed (Placeholder)
          </div>
        </div>
      </div>
    </section>
  )
}
