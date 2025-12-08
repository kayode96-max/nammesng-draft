"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/dashboard/news", label: "News" },
  { href: "/dashboard/resources", label: "Resources" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Logo className="mb-8" />
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-foreground hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="md:hidden">
            <Logo />
          </div>
        </div>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/membership">Join Now</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
