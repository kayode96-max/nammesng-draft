import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

const items = [
  { title: 'NAMMES 2025 Conference', date: 'Mar 02, 2025', tags: ['event'], summary: 'Join us for the annual conference in Lagos with workshops and keynote talks.' },
  { title: 'New Resources Available', date: 'Feb 22, 2025', tags: ['resources'], summary: 'Fresh study materials and clinical guidelines have been added to the library.' },
  { title: 'Member Spotlight', date: 'Feb 10, 2025', tags: ['community'], summary: 'Celebrating outstanding contributions from our members nationwide.' },
]

export default function NewsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">News & Blog</h1>

      <div className="mt-6">
        <input
          type="search"
          placeholder="Search news..."
          className="w-full md:w-96 border rounded px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((n, i) => (
          <Reveal key={n.title} delay={0.05 * i}>
            <Card>
              <CardBody>
                <CardTitle>{n.title}</CardTitle>
                <p className="text-xs text-slate-500 dark:text-slate-400">{n.date}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{n.summary}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {n.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">#{t}</span>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
