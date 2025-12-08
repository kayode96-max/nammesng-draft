"use client"

import { useState, useEffect } from "react"
import {
  LogOut,
  Menu,
  X,
  Users,
  CreditCard,
  FileText,
  Settings,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ADMIN_SECTIONS = [
  { icon: BarChart3, label: "Dashboard", id: "dashboard" },
  { icon: Users, label: "Members", id: "members" },
  { icon: CreditCard, label: "Payments", id: "payments" },
  { icon: FileText, label: "Certificates", id: "certificates" },
  { icon: AlertCircle, label: "Moderation", id: "moderation" },
  { icon: Settings, label: "Settings", id: "settings" },
]

const MOCK_MEMBERS = [
  {
    id: 1,
    name: "John Adeyemi",
    email: "john@example.com",
    type: "Professional",
    status: "Active",
    joined: "Jan 2025",
  },
  { id: 2, name: "Zainab Hassan", email: "zainab@example.com", type: "Student", status: "Active", joined: "Feb 2025" },
  {
    id: 3,
    name: "Chukwu Obi",
    email: "chukwu@example.com",
    type: "Researcher",
    status: "Inactive",
    joined: "Dec 2024",
  },
  {
    id: 4,
    name: "Amina Mohammed",
    email: "amina@example.com",
    type: "Professional",
    status: "Active",
    joined: "Mar 2025",
  },
]

const MOCK_PAYMENTS = [
  { id: 1, member: "John Adeyemi", amount: "₦15,000", type: "Professional", date: "Mar 12, 2025", status: "Completed" },
  { id: 2, member: "Zainab Hassan", amount: "₦5,000", type: "Student", date: "Mar 10, 2025", status: "Completed" },
  { id: 3, member: "Amina Mohammed", amount: "₦15,000", type: "Professional", date: "Mar 15, 2025", status: "Pending" },
]

export default function AdminPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-black rounded-lg px-3 py-2">
                <span className="text-red-500 font-headline font-bold text-xl">ADM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-headline font-bold text-foreground">NAMMES Admin</p>
              <p className="text-xs text-muted-foreground">Control Panel</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm shadow-lg hover:shadow-red-500/30 transition-all duration-300">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-red-900/10 rounded-lg transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-red-900/20 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-4 space-y-2 flex flex-col">
              {ADMIN_SECTIONS.map((section) => {
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
                        ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                        : "text-foreground hover:bg-red-900/10"
                    }`}
                  >
                    <Icon size={20} />
                    {section.label}
                  </button>
                )
              })}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">Logout</Button>
            </div>
          </div>
        )}
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="hidden md:flex fixed left-0 top-20 h-[calc(100vh-80px)] w-64 flex-col bg-background/50 border-r border-red-900/20 overflow-y-auto">
          <div className="p-6 space-y-2">
            {ADMIN_SECTIONS.map((section, idx) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                      : "text-foreground hover:bg-red-900/10"
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

          <div className="mt-auto p-6 border-t border-red-900/20">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 w-full md:w-[calc(100%-256px)]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Dashboard */}
            {activeSection === "dashboard" && (
              <div
                className={`space-y-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <h1 className="font-headline text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
                  <p className="text-muted-foreground">Manage NAMMES operations and monitor key metrics</p>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: "Total Members", value: "5,234", change: "+12%", icon: "👥" },
                    { label: "Revenue (YTD)", value: "₦78.5M", change: "+23%", icon: "💰" },
                    { label: "Events Hosted", value: "24", change: "+5", icon: "📅" },
                    { label: "Certificates Issued", value: "1,847", change: "+189", icon: "🏆" },
                  ].map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={`p-6 rounded-xl border border-red-900/30 bg-white/5 hover:border-red-500/50 transition-all duration-300 group ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${100 + idx * 75}ms` }}
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {metric.icon}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-3xl font-headline font-bold text-red-500 mb-2">{metric.value}</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1">
                        <TrendingUp size={14} />
                        {metric.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div
                  className={`p-6 rounded-xl border border-red-900/30 bg-white/5 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <h2 className="font-headline text-xl font-bold text-foreground mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {[
                      { action: "New member registered", time: "5 mins ago", icon: "✨" },
                      { action: "Payment received", time: "2 hours ago", icon: "💳" },
                      { action: "Certificate issued", time: "4 hours ago", icon: "📜" },
                      { action: "Event created", time: "1 day ago", icon: "📌" },
                    ].map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-3 border-b border-red-900/20 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{activity.icon}</span>
                          <span className="text-foreground">{activity.action}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Members Management */}
            {activeSection === "members" && (
              <div
                className={`space-y-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <h1 className="font-headline text-4xl font-bold text-foreground mb-4">Member Management</h1>
                </div>

                <div className="border border-red-900/30 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-red-900/20 bg-white/5">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Joined</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_MEMBERS.map((member, idx) => (
                        <tr
                          key={member.id}
                          className="border-b border-red-900/20 hover:bg-white/5 transition-colors duration-300"
                          style={{
                            animation: isVisible
                              ? `slideInFromLeft 0.5s ease-out ${200 + idx * 75}ms forwards`
                              : "none",
                            opacity: isVisible ? 1 : 0,
                          }}
                        >
                          <td className="px-6 py-4 text-sm text-foreground">{member.name}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{member.type}</td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                member.status === "Active"
                                  ? "bg-emerald-900/20 text-emerald-400"
                                  : "bg-red-900/20 text-red-400"
                              }`}
                            >
                              {member.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{member.joined}</td>
                          <td className="px-6 py-4 text-sm">
                            <Button className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Payments */}
            {activeSection === "payments" && (
              <div
                className={`space-y-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <h1 className="font-headline text-4xl font-bold text-foreground mb-4">Payment Records</h1>
                </div>

                <div className="border border-red-900/30 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-red-900/20 bg-white/5">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Member</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_PAYMENTS.map((payment, idx) => (
                        <tr
                          key={payment.id}
                          className="border-b border-red-900/20 hover:bg-white/5 transition-colors duration-300"
                          style={{
                            animation: isVisible
                              ? `slideInFromLeft 0.5s ease-out ${200 + idx * 75}ms forwards`
                              : "none",
                            opacity: isVisible ? 1 : 0,
                          }}
                        >
                          <td className="px-6 py-4 text-sm text-foreground">{payment.member}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{payment.type}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{payment.date}</td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                                payment.status === "Completed"
                                  ? "bg-emerald-900/20 text-emerald-400"
                                  : "bg-yellow-900/20 text-yellow-400"
                              }`}
                            >
                              {payment.status === "Completed" ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Placeholder sections */}
            {["certificates", "moderation", "settings"].includes(activeSection) && (
              <div
                className={`text-center py-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h1 className="font-headline text-4xl font-bold text-foreground mb-4">
                  {ADMIN_SECTIONS.find((s) => s.id === activeSection)?.label}
                </h1>
                <p className="text-lg text-muted-foreground">Management tools coming soon</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </main>
  )
}
