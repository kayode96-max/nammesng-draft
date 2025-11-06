"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

const EVENTS = [
  {
    title: 'NAMMES Annual Conference 2025',
    date: 'Mar 10, 2025',
    location: 'Lagos, Nigeria',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Research Symposium',
    date: 'May 02, 2025',
    location: 'Abuja, Nigeria',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Skills Workshop Series',
    date: 'Jun 15, 2025',
    location: 'Virtual',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function EventsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [playing, setPlaying] = useState(true)

  const autoplay = useCallback((api: any | undefined) => {
    if (!api) return
    const id = setInterval(() => {
      api.scrollNext()
    }, 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!playing) return
    return autoplay(emblaApi || undefined)
  }, [emblaApi, autoplay, playing])

  return (
    <section className="container py-8">
      <Reveal>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">Upcoming Events</h2>
          <button className="text-sm text-primary hover:underline" onClick={() => setPlaying((p) => !p)}>
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
      </Reveal>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {EVENTS.map((e, i) => (
            <div className="min-w-0 basis-full md:basis-1/2 lg:basis-1/3" key={i}>
              <Reveal delay={0.05 * i}>
                <Card>
                  <div className="aspect-[16/9] rounded-t-xl bg-cover bg-center" style={{ backgroundImage: `url(${e.img})` }} />
                  <CardBody>
                    <CardTitle>{e.title}</CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{e.date} • {e.location}</p>
                  </CardBody>
                </Card>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
