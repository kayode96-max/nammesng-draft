"use client"

import { useState, useEffect } from "react"
import { UserPlus, MessageCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const MOCK_MEMBERS = [
  {
    id: 1,
    name: "Prof. Chioma Eze",
    title: "Research Director",
    company: "LASU",
    expertise: "Materials Science",
    connected: false,
  },
  {
    id: 2,
    name: "Dr. Olufemi Okafor",
    title: "Senior Researcher",
    company: "UI",
    expertise: "Metallurgy",
    connected: true,
  },
  {
    id: 3,
    name: "Prof. Amara Muthenge",
    title: "Professor",
    company: "OAU",
    expertise: "Nanotechnology",
    connected: false,
  },
  {
    id: 4,
    name: "Dr. Kayode Adebayo",
    title: "Lead Engineer",
    company: "TechCorp Nigeria",
    expertise: "Materials Engineering",
    connected: false,
  },
  {
    id: 5,
    name: "Ngozi Okonkwo",
    title: "Research Scientist",
    company: "NCRST",
    expertise: "Polymer Science",
    connected: true,
  },
  {
    id: 6,
    name: "Chinedu Obi",
    title: "PhD Candidate",
    company: "Covenant University",
    expertise: "Composite Materials",
    connected: false,
  },
]

export default function PeopleSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [connections, setConnections] = useState<number[]>([2, 5])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredMembers = MOCK_MEMBERS.filter((member) => {
    const query = searchQuery.toLowerCase()
    return (
      member.name.toLowerCase().includes(query) ||
      member.expertise.toLowerCase().includes(query) ||
      member.company.toLowerCase().includes(query)
    )
  })

  const handleConnect = (id: number) => {
    setConnections((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="font-headline text-4xl font-bold text-foreground mb-2">People Directory</h1>
        <p className="text-muted-foreground">Connect with professionals in the materials science community</p>
      </div>

      {/* Search */}
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "100ms" }}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search by name, expertise, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
          />
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member, idx) => (
          <div
            key={member.id}
            className={`p-6 rounded-xl border border-green-900/30 bg-white/5 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${200 + idx * 75}ms` }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600/20 to-green-500/10 border border-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👤</span>
            </div>

            {/* Info */}
            <h3 className="font-headline font-semibold text-foreground group-hover:text-green-500 transition-colors mb-1">
              {member.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-2">{member.title}</p>
            <p className="text-xs text-green-500 mb-4">{member.company}</p>

            {/* Expertise Tag */}
            <div className="inline-block px-2 py-1 rounded-full bg-green-900/20 border border-green-900/30 text-xs text-green-400 mb-4">
              {member.expertise}
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-green-900/20">
              <Button
                onClick={() => handleConnect(member.id)}
                className={`flex-1 py-2 text-sm transition-all duration-300 ${
                  connections.includes(member.id)
                    ? "bg-green-600/30 border border-green-500 text-green-400"
                    : "gradient-btn"
                }`}
              >
                <UserPlus size={14} className="mr-1" />
                {connections.includes(member.id) ? "Connected" : "Connect"}
              </Button>
              <Button
                variant="outline"
                className="px-3 py-2 bg-transparent border-green-500/50 text-foreground hover:bg-green-900/10"
              >
                <MessageCircle size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No members found matching your search</p>
        </div>
      )}
    </div>
  )
}
