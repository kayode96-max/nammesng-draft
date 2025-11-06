export default function PeoplePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Member Directory</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
          <h3 className="mt-4 font-semibold">Jane Doe</h3>
          <p className="text-sm text-gray-600">Medical Student</p>
          <p className="text-xs text-gray-500">University of Lagos</p>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
          <h3 className="mt-4 font-semibold">John Smith</h3>
          <p className="text-sm text-gray-600">Dental Student</p>
          <p className="text-xs text-gray-500">University of Ibadan</p>
        </div>
      </div>
    </section>
  )
}
