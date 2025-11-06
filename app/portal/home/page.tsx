import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

export default function PortalHomePage() {
  return (
    <section>
      <Reveal>
        <h1 className="text-3xl font-bold text-primary">Welcome back</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          This is your member dashboard. Quick stats and shortcuts are below.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Membership Status', value: 'Active' },
          { label: 'Certificate ID', value: 'NAMMES/2025/0001' },
          { label: 'Unread Messages', value: '2' },
        ].map((s, i) => (
          <Reveal key={s.label} delay={0.05 * i}>
            <Card>
              <CardBody>
                <CardTitle>{s.label}</CardTitle>
                <p className="text-2xl font-bold text-primary mt-2">{s.value}</p>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal>
          <Card>
            <CardBody>
              <CardTitle>Quick Links</CardTitle>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <li><a className="text-primary underline" href="/portal/resources">Resources</a></li>
                <li><a className="text-primary underline" href="/portal/news">News</a></li>
                <li><a className="text-primary underline" href="/portal/people">Directory</a></li>
                <li><a className="text-primary underline" href="/portal/profile">Profile</a></li>
              </ul>
            </CardBody>
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <Card>
            <CardBody>
              <CardTitle>Recent News</CardTitle>
              <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
                <li>New resources added to the library</li>
                <li>Upcoming NAMMES Conference 2025</li>
                <li>Member spotlight: excellence awards</li>
              </ul>
              <a href="/portal/news" className="inline-block mt-3 text-primary underline text-sm">View all</a>
            </CardBody>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 className="font-semibold">Your Certificate</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Download or reprint your NAMMES certificate anytime.</p>
          <a href="#" className="mt-4 inline-flex px-4 py-2 rounded bg-primary text-white text-sm">Download Certificate</a>
        </div>
      </Reveal>
    </section>
  )
}
