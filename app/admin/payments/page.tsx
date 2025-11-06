import { prisma } from '@/lib/prisma'

export default async function AdminPaymentsPage() {
  const payments = await prisma.payment.findMany({ take: 10 })

  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Manage Payments</h1>
      <div className="mt-8 bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Payment ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No payments found</td>
              </tr>
            ) : (
              payments.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="px-6 py-4 text-sm">{p.providerPaymentId}</td>
                  <td className="px-6 py-4 text-sm">{p.currency} {p.amount}</td>
                  <td className="px-6 py-4 text-sm">{p.status}</td>
                  <td className="px-6 py-4 text-sm">{p.createdAt.toISOString().split('T')[0]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
