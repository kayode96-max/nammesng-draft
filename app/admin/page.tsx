export default function AdminDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-lg font-semibold">Total Members</h3>
          <p className="text-3xl font-bold text-primary mt-2">0</p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-lg font-semibold">Certificates Issued</h3>
          <p className="text-3xl font-bold text-primary mt-2">0</p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-3xl font-bold text-primary mt-2">₦0</p>
        </div>
      </div>
    </section>
  )
}
