"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Security", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Contact Support", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-green-900/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black rounded-lg px-3 py-2">
                  <span className="text-green-500 font-headline font-bold text-xl">NM</span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">Advancing materials science and engineering across Nigeria.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-headline font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-green-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-green-900/20 space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-headline font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300">
                  <Mail size={16} />
                  <a href="mailto:info@nammes.ng">info@nammes.ng</a>
                </div>
                <div className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300">
                  <Phone size={16} />
                  <a href="tel:+2348000000000">+234 800 000 0000</a>
                </div>
                <div className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300">
                  <MapPin size={16} />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-headline font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="p-2 rounded-lg bg-green-900/20 border border-green-900/40 hover:border-green-500/50 text-green-500 hover:bg-green-500/10 transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-green-900/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 NAMMES NG. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
