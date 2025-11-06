export default function GalleryPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Gallery</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-300 rounded h-48 flex items-center justify-center text-gray-600">Image 1</div>
        <div className="bg-gray-300 rounded h-48 flex items-center justify-center text-gray-600">Image 2</div>
        <div className="bg-gray-300 rounded h-48 flex items-center justify-center text-gray-600">Image 3</div>
      </div>
    </section>
  )
}
