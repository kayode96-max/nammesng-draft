'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CertificateRegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [institution, setInstitution] = useState('')
  const [status, setStatus] = useState('')
  const [result, setResult] = useState<any>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Processing...')

    // Step 1: Initiate checkout
    const checkoutRes = await fetch('/api/certificate/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, amount: 5000, currency: 'NGN' }),
    })

    if (!checkoutRes.ok) {
      setStatus('Checkout failed')
      return
    }

    const checkoutData = await checkoutRes.json()

    // Step 2: Simulate payment success (mock webhook)
    await fetch('/api/webhooks/payments/mock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        providerPaymentId: checkoutData.providerPaymentId,
        status: 'completed',
        amount: 5000,
        currency: 'NGN',
      }),
    })

    // Step 3: Register user and create certificate
    const regRes = await fetch('/api/certificate/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, institution }),
    })

    if (regRes.ok) {
      const data = await regRes.json()
      setResult(data)
      setStatus('Registration successful!')
    } else {
      setStatus('Registration failed')
    }
  }

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold text-primary text-center">Join NAMMES</h1>
      <div className="mt-8 max-w-lg mx-auto bg-white rounded shadow p-8">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Institution</label>
              <input
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-gold text-white rounded">
              Complete Registration (₦5,000)
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
            <p className="mt-4 text-gray-700">Your certificate has been issued.</p>
            <div className="mt-4 bg-gray-100 rounded p-4 text-left">
              <p><strong>Certificate ID (Username):</strong> {result.certificateId}</p>
              <p><strong>Temporary Password:</strong> {result.tempPassword}</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Please save these credentials. You will be required to change your password on first login.
            </p>
            <button
              onClick={() => router.push('/auth/login')}
              className="mt-6 px-4 py-2 bg-primary text-white rounded"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
