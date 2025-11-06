export default function PlacementsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">IT Placements</h1>
      <div className="mt-8 space-y-4">
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Software Developer Intern</h3>
          <p className="text-sm text-gray-600">Company: Tech Corp</p>
          <p className="text-sm text-gray-600">Location: Lagos</p>
          <p className="text-sm text-gray-600">Field: Technology</p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Medical Research Assistant</h3>
          <p className="text-sm text-gray-600">Company: Research Institute</p>
          <p className="text-sm text-gray-600">Location: Abuja</p>
          <p className="text-sm text-gray-600">Field: Healthcare</p>
        </div>
      </div>
    </section>
  )
}
