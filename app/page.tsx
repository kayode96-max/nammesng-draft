import Hero from '@/components/hero/Hero'
import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'
import EventsCarousel from '@/components/sections/EventsCarousel'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quick Links</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'News', desc: 'Latest updates and announcements', href: '/portal/news' },
            { title: 'Resources', desc: 'Guides, PDFs and study materials', href: '/portal/resources' },
            { title: 'People', desc: 'Directory of members', href: '/portal/people' },
            { title: 'Gallery', desc: 'Event photos and videos', href: '/portal/gallery' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <a href={item.href} className="block">
                <Card>
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                  </CardBody>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

  <EventsCarousel />

    <Testimonials />

      <section className="container py-10">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-soft p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Ready to become a member?</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Register now and get your NAMMES certificate instantly.</p>
          </div>
          <a href="/certificate/register" className="px-6 h-12 inline-flex items-center rounded-md bg-gold text-white font-semibold btn-shadow">Join NAMMES</a>
        </div>
      </section>
    </>
  )
}
