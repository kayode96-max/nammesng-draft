import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

const resources = [
  { title: 'Study Guide 2025', category: 'Academic', size: '3.2 MB' },
  { title: 'Clinical Skills Manual', category: 'Clinical', size: '5.8 MB' },
  { title: 'Exam Prep Q&A', category: 'Academic', size: '1.4 MB' },
  { title: 'Ethics Handbook', category: 'Policy', size: '2.1 MB' },
]

export default function ResourcesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Resources</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300">Browse and download educational materials.</p>

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <input
          type="search"
          placeholder="Search resources..."
          className="w-full md:w-96 border rounded px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
        />
        <select className="border rounded px-3 py-2 dark:bg-slate-900 dark:border-slate-700">
          <option>All categories</option>
          <option>Academic</option>
          <option>Clinical</option>
          <option>Policy</option>
        </select>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((r, i) => (
          <Reveal key={r.title} delay={0.05 * i}>
            <Card>
              <CardBody>
                <CardTitle>{r.title}</CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-300">Category: {r.category} • {r.size}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 bg-primary text-white rounded text-sm">Download</button>
                  <button className="px-4 py-2 border rounded text-sm dark:bg-slate-900 dark:border-slate-700">Preview</button>
                </div>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
