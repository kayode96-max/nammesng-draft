"use client"

import { useState, useEffect } from "react"
import { LogOut, Menu, X, Home, Newspaper, BookOpen, Users, ImageIcon, Briefcase, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsSection from "./sections/news"
import ResourcesSection from "./sections/resources"
import GallerySection from "./sections/gallery"
import PeopleSection from "./sections/people"

const DASHBOARD_SECTIONS = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Newspaper, label: "News", id: "news" },
  { icon: BookOpen, label: "Resources", id: "resources" },
  { icon: Users, label: "People", id: "people" },
  { icon: ImageIcon, label: "Gallery", id: "gallery" },
  { icon: Briefcase, label: "IT Placement", id: "placement" },
]

const MOCK_NEWS = [
  { title: "Materials Summit 2025", desc: "Join us for the annual materials science summit", date: "Mar 15, 2025" },
  {
    title: "New Research Collaboration",
    desc: "NAMMES partners with leading research institutions",
    date: "Mar 10, 2025",
  },
  { title: "Members Spotlight", desc: "Celebrating our member achievements this month", date: "Mar 5, 2025" },
]

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userGreeting, setUserGreeting] = useState("")

  useEffect(() => {
    setIsVisible(true)
    // Mock user data
    const hour = new Date().getHours()
    if (hour < 12) setUserGreeting("Good morning")
    else if (hour < 18) setUserGreeting("Good afternoon")
    else setUserGreeting("Good evening")
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-green-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-black rounded-lg px-3 py-2">
                <span className="text-green-500 font-headline font-bold text-xl">NM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-headline font-bold text-foreground">NAMMES</p>
              <p className="text-xs text-muted-foreground">Member Portal</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-green-900/10 rounded-lg transition-colors duration-300">
              <Bell size={20} className="text-foreground hover:text-green-500 transition-colors" />
            </button>
            <button className="p-2 hover:bg-green-900/10 rounded-lg transition-colors duration-300">
              <Settings size={20} className="text-foreground hover:text-green-500 transition-colors" />
            </button>
            <Button className="gradient-btn px-4 py-2 text-sm shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-green-900/10 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-green-900/20 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-4 space-y-2 flex flex-col">
              {DASHBOARD_SECTIONS.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                        : "text-foreground hover:bg-green-900/10"
                    }`}
                  >
                    <Icon size={20} />
                    {section.label}
                  </button>
                )
              })}
              <Button className="w-full gradient-btn mt-4">Logout</Button>
            </div>
          </div>
        )}
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="hidden md:flex fixed left-0 top-20 h-[calc(100vh-80px)] w-64 flex-col bg-background/50 border-r border-green-900/20 overflow-y-auto">
          <div className="p-6 space-y-2">
            {DASHBOARD_SECTIONS.map((section, idx) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                      : "text-foreground hover:bg-green-900/10"
                  }`}
                  style={{
                    animation: isVisible
                      ? `slideInFromLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 50}ms forwards`
                      : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{section.label}</span>
                </button>
              )
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto p-6 border-t border-green-900/20">
            <Button className="w-full gradient-btn shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 w-full md:w-[calc(100%-256px)]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Home Section */}
            {activeSection === "home" && (
              <div
                className={`space-y-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="space-y-4 mb-12">
                  <h1 className="font-headline text-5xl font-bold text-foreground">{userGreeting}, Member!</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Welcome back to your NAMMES member portal. Explore resources, connect with professionals, and
                    advance your career.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {[
                    { label: "Events This Month", value: "5", icon: "📅" },
                    { label: "New Resources", value: "12", icon: "📚" },
                    { label: "Active Connections", value: "347", icon: "👥" },
                    { label: "Certificates", value: "3", icon: "🏆" },
                  ].map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`p-6 rounded-xl border border-green-900/30 bg-white/5 hover:border-green-500/50 transition-all duration-300 group ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${100 + idx * 75}ms` }}
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-headline font-bold text-green-500 mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Latest News */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-6">Latest News</h2>
                  <div className="space-y-4">
                    {MOCK_NEWS.map((item, idx) => (
                      <div
                        key={item.title}
                        className="p-6 rounded-xl border border-green-900/30 bg-white/5 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        style={{
                          animation: isVisible ? `slideInFromLeft 0.5s ease-out ${500 + idx * 100}ms forwards` : "none",
                          opacity: isVisible ? 1 : 0,
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-headline font-semibold text-foreground group-hover:text-green-500 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                          </div>
                          <span className="text-xs text-muted-foreground flex-shrink-0 ml-4">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* News Section */}
            {activeSection === "news" && <NewsSection />}

            {/* Resources Section */}
            {activeSection === "resources" && <ResourcesSection />}

            {/* Gallery Section */}
            {activeSection === "gallery" && <GallerySection />}

            {/* People Section */}
            {activeSection === "people" && <PeopleSection />}

            {/* Placement Section */}
            {activeSection === "placement" && (
              <div
                className={`text-center py-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h1 className="font-headline text-4xl font-bold text-foreground mb-4">IT Placement Portal</h1>
                <p className="text-lg text-muted-foreground">
                  Browse job opportunities and internship positions. Coming soon.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </main>
  )
}
