import { prisma } from '@/lib/prisma'

export default async function AdminMembersPage() {
  const members = await prisma.user.findMany({ take: 10 })

  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Manage Members</h1>
      <div className="mt-8 bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Certificate ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">No members found</td>
              </tr>
            ) : (
              members.map((m) => (
                <tr key={m.id} className="border-t">
                  <td className="px-6 py-4 text-sm">{m.name}</td>
                  <td className="px-6 py-4 text-sm">{m.email}</td>
                  <td className="px-6 py-4 text-sm">{m.certificateId || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{m.role}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-primary underline">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
