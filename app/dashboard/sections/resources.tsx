"use client"

import { useState, useEffect } from "react"
import { BookOpen, Video, FileText, Download, Clock, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const MOCK_RESOURCES = [
  {
    id: 1,
    title: "Materials Science Fundamentals",
    type: "Webinar",
    duration: "2 hours",
    instructor: "Prof. Chioma Eze",
    level: "Beginner",
    description: "Comprehensive introduction to materials science principles and applications",
    date: "Available Now",
    icon: Video,
  },
  {
    id: 2,
    title: "Advanced Metallurgy Techniques",
    type: "Course",
    duration: "5 hours",
    instructor: "Dr. Olufemi Okafor",
    level: "Advanced",
    description: "Deep dive into modern metallurgical processes and innovations",
    date: "Self-paced",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Sustainability in Materials Production",
    type: "Paper",
    duration: "15 min read",
    instructor: "Prof. Amara Muthenge",
    level: "Intermediate",
    description: "Latest research on eco-friendly material manufacturing",
    date: "Published Mar 2025",
    icon: FileText,
  },
  {
    id: 4,
    title: "Nanomaterials: The Future",
    type: "Webinar",
    duration: "1.5 hours",
    instructor: "Dr. Kayode Adebayo",
    level: "Intermediate",
    description: "Exploring applications and challenges of nanomaterials",
    date: "Available Now",
    icon: Video,
  },
]

export default function ResourcesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const levels = ["All", "Beginner", "Intermediate", "Advanced"]
  const types = ["All", "Webinar", "Course", "Paper"]

  const filteredResources = MOCK_RESOURCES.filter((resource) => {
    const matchLevel = selectedLevel === "All" || resource.level === selectedLevel
    const matchType = selectedType === "All" || resource.type === selectedType
    const matchSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchLevel && matchType && matchSearch
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="font-headline text-4xl font-bold text-foreground mb-2">Learning Resources</h1>
        <p className="text-muted-foreground">Access webinars, courses, papers, and more</p>
      </div>

      {/* Search and Filters */}
      <div
        className={`space-y-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
          />
        </div>

        {/* Level Filter */}
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">Level</p>
          <div className="flex gap-2 flex-wrap">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                  selectedLevel === level
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                    : "bg-white/5 border border-green-900/30 text-foreground hover:border-green-500/50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">Type</p>
          <div className="flex gap-2 flex-wrap">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                  selectedType === type
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                    : "bg-white/5 border border-green-900/30 text-foreground hover:border-green-500/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredResources.map((resource, idx) => {
          const Icon = resource.icon
          return (
            <div
              key={resource.id}
              className={`p-6 rounded-xl border border-green-900/30 bg-white/5 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + idx * 75}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-900/20 border border-green-900/30 group-hover:border-green-500/50 transition-all duration-300">
                  <Icon className="text-green-500 group-hover:text-emerald-400 transition-colors" size={24} />
                </div>
                <span className="px-2 py-1 rounded-full bg-green-900/20 text-xs font-medium text-green-400">
                  {resource.level}
                </span>
              </div>

              <h3 className="font-headline font-semibold text-foreground group-hover:text-green-500 transition-colors mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

              <div className="space-y-3 mb-4 pb-4 border-b border-green-900/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={14} />
                  {resource.duration}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User size={14} />
                  {resource.instructor}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 text-sm shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                  Access
                </Button>
                <Button
                  variant="outline"
                  className="px-3 py-2 bg-transparent border-green-500/50 text-foreground hover:bg-green-900/10"
                >
                  <Download size={16} />
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No resources found matching your criteria</p>
        </div>
      )}
    </div>
  )
}
