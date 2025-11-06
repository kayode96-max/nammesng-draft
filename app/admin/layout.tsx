export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#0b2540] text-white">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Admin Console</h2>
        </div>
        <nav className="mt-6 space-y-2 px-4">
          <a href="/admin" className="block py-2 px-4 rounded hover:bg-white/10">Dashboard</a>
          <a href="/admin/members" className="block py-2 px-4 rounded hover:bg-white/10">Members</a>
          <a href="/admin/certificates" className="block py-2 px-4 rounded hover:bg-white/10">Certificates</a>
          <a href="/admin/payments" className="block py-2 px-4 rounded hover:bg-white/10">Payments</a>
          <a href="/admin/posts" className="block py-2 px-4 rounded hover:bg-white/10">Blog Posts</a>
          <a href="/admin/resources" className="block py-2 px-4 rounded hover:bg-white/10">Resources</a>
          <a href="/admin/gallery" className="block py-2 px-4 rounded hover:bg-white/10">Gallery</a>
          <a href="/admin/placements" className="block py-2 px-4 rounded hover:bg-white/10">Internships</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  )
}
