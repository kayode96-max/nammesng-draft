import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container relative py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">About NAMMES</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-slate-700 max-w-3xl">
              The National Association of Medical and Dental Students (NAMMES) is Nigeria’s leading student body for future healthcare professionals — advancing excellence, leadership, and service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: 'Our Mission',
            text: 'To foster academic excellence, professional development, and community service among members.'
          },{
            title: 'Our Vision',
            text: 'A thriving national community of medical and dental students shaping the future of healthcare.'
          },{
            title: 'Our Values',
            text: 'Integrity, Collaboration, Service, and Innovation.'
          }].map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <Card>
                <CardBody>
                  <CardTitle>{b.title}</CardTitle>
                  <p className="text-sm text-slate-600 mt-2">{b.text}</p>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Executive Council</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((id, i) => (
              <Reveal key={id} delay={0.05 * i}>
                <Card>
                  <div className="h-40 bg-[url('https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop')] bg-cover rounded-t-xl"/>
                  <CardBody>
                    <h3 className="font-semibold">Executive {id}</h3>
                    <p className="text-sm text-slate-600">Title • Institution</p>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
