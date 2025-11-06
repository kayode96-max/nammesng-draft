export default function AdminPostsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-primary">Manage Blog Posts</h1>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Create New Post</button>
      <div className="mt-8 bg-white rounded shadow p-6">
        <p className="text-gray-500 text-center">No posts yet</p>
      </div>
    </section>
  )
}
