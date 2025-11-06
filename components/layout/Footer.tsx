export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-[#0b2540] text-white">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/10 grid place-content-center font-bold">N</div>
            <span className="font-semibold">NAMMES</span>
          </div>
          <p className="mt-4 text-white/70">Fostering excellence and community among medical and dental students nationwide.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/certificate/register" className="hover:underline">Certificate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/portal/resources" className="hover:underline">Resources</a></li>
            <li><a href="/portal/news" className="hover:underline">News</a></li>
            <li><a href="/portal/placements" className="hover:underline">IT Placements</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>info@nammes.org</li>
            <li>+234 800 123 4567</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container text-xs py-4 text-white/70">© {new Date().getFullYear()} NAMMES. All rights reserved.</div>
      </div>
    </footer>
  )
}
