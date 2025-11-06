import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

const testimonials = [
  {
    name: 'Dr. Amina Yusuf',
    role: 'Clinical Microbiologist',
    quote:
      'NAMMES has been pivotal for my professional growth. The resources and community are unmatched.',
  },
  {
    name: 'Emeka Okafor',
    role: 'Medical Scientist',
    quote:
      'The portal is clean, fast, and practical. Certificate issuance and verification are incredibly smooth.',
  },
  {
    name: 'Prof. K. Adewale',
    role: 'NAMMES Fellow',
    quote:
      'A modern experience that reflects the vision of our association. Well done.',
  },
]

export default function Testimonials() {
  return (
    <section className="container py-16">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">What members say</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.05 * i}>
            <Card>
              <CardBody>
                <CardTitle className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                  <div>
                    <div>{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                  </div>
                </CardTitle>
                <p className="mt-4 text-slate-700 dark:text-slate-300">“{t.quote}”</p>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
