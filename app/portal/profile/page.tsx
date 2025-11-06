import Reveal from '@/components/animations/Reveal'
import { Card, CardBody, CardTitle } from '@/components/ui/Card'

export default function ProfilePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">My Profile</h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
        <Reveal>
          <Card>
            <CardBody>
              <CardTitle>Profile Details</CardTitle>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    defaultValue={'Jane Member'}
                    className="w-full border rounded px-3 py-2 mt-1 dark:bg-slate-900 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    defaultValue={'jane.member@example.com'}
                    className="w-full border rounded px-3 py-2 mt-1 dark:bg-slate-900 dark:border-slate-700"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      defaultValue={'+234 800 000 0000'}
                      className="w-full border rounded px-3 py-2 mt-1 dark:bg-slate-900 dark:border-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Institution</label>
                    <input
                      type="text"
                      defaultValue={'Lagos Teaching Hospital'}
                      className="w-full border rounded px-3 py-2 mt-1 dark:bg-slate-900 dark:border-slate-700"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded">Update Profile</button>
              </div>
            </CardBody>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <Card>
            <CardBody>
              <CardTitle>Change Password</CardTitle>
              <div className="mt-4 space-y-4">
                <input type="password" placeholder="Current Password" className="w-full border rounded px-3 py-2 dark:bg-slate-900 dark:border-slate-700" />
                <input type="password" placeholder="New Password" className="w-full border rounded px-3 py-2 dark:bg-slate-900 dark:border-slate-700" />
                <button className="px-4 py-2 bg-primary text-white rounded">Change Password</button>
              </div>
            </CardBody>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <CardBody>
              <CardTitle>Membership & Certificate</CardTitle>
              <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>Status: Active</li>
                <li>Member ID: NAMMES/2025/0001</li>
                <li>Joined: Jan 10, 2024</li>
                <li>Expires: Jan 10, 2026</li>
              </ul>
              <a href="#" className="mt-4 inline-flex px-4 py-2 rounded bg-primary text-white text-sm">Download Certificate</a>
            </CardBody>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
