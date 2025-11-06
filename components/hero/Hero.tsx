"use client"
import Reveal from '@/components/animations/Reveal'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="container relative py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gradient">NAMMES National Portal</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-slate-600 text-lg max-w-xl">
              Join, get certified, and access member-only resources, internships, and news. Secure certificate-based login with QR verification.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/certificate/register"><Button size="lg">Join NAMMES</Button></Link>
              <Link href="/auth/login"><Button size="lg" variant="ghost">Login to Portal</Button></Link>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">QR</div>
                <p className="text-xs text-slate-600 mt-1">Certificate Verification</p>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">MVP</div>
                <p className="text-xs text-slate-600 mt-1">Admin Console</p>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">PDF</div>
                <p className="text-xs text-slate-600 mt-1">Signed Download</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 -z-10 bg-radial-primary animate-float rounded-full" />
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl shadow-soft p-6">
              <div className="aspect-video rounded-xl bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
