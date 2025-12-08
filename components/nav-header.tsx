"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavHeader({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "Community", href: "#community" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-green-900/20 shadow-lg" : "bg-background"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with enhanced hover effect */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-black rounded-lg px-3 py-2">
                <span className="text-green-500 font-headline font-bold text-xl">NM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-headline font-bold text-foreground">NAMMES</p>
              <p className="text-xs text-muted-foreground">NG Portal</p>
            </div>
          </Link>

          {/* Desktop Menu with improved animations */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-green-500 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Auth Buttons with better styling */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-green-500 hover:bg-green-900/10 transition-all duration-300"
            >
              Login
            </Button>
            <Button className="gradient-btn shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-green-900/10 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-green-900/20 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-foreground hover:text-green-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-green-900/20">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Login
                </Button>
                <Button className="flex-1 gradient-btn text-white">Register</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
