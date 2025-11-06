export default function PortalLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-primary text-white">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Member Portal</h2>
        </div>
        <nav className="mt-6 space-y-2 px-4">
          <a href="/portal/home" className="block py-2 px-4 rounded hover:bg-white/10">Home</a>
          <a href="/portal/news" className="block py-2 px-4 rounded hover:bg-white/10">News</a>
          <a href="/portal/resources" className="block py-2 px-4 rounded hover:bg-white/10">Resources</a>
          <a href="/portal/people" className="block py-2 px-4 rounded hover:bg-white/10">People</a>
          <a href="/portal/gallery" className="block py-2 px-4 rounded hover:bg-white/10">Gallery</a>
          <a href="/portal/placements" className="block py-2 px-4 rounded hover:bg-white/10">IT Placements</a>
          <a href="/portal/profile" className="block py-2 px-4 rounded hover:bg-white/10">Profile</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  )
}
