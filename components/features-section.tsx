"use client"

import { BookOpen, Users, Briefcase, Briefcase as Certificate, Network, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Certificate,
    title: "Professional Certification",
    description: "Earn recognized credentials that validate your expertise in materials science and engineering.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Network,
    title: "Global Network",
    description: "Connect with leading professionals and researchers across Nigeria and beyond.",
    color: "from-green-400 to-cyan-400",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access exclusive webinars, research papers, and industry insights curated by experts.",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Discover job placements and collaborations with industry-leading organizations.",
    color: "from-cyan-500 to-green-500",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Participate in conferences, workshops, and networking events throughout the year.",
    color: "from-green-500 to-lime-400",
  },
  {
    icon: Zap,
    title: "Innovation Hub",
    description: "Showcase your research and collaborate on groundbreaking materials science projects.",
    color: "from-lime-400 to-emerald-400",
  },
]

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Why Join{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">NAMMES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits and opportunities designed for materials science professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-transparent rounded-xl border border-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-clip-text inline-block`}
                    >
                      <Icon
                        className="text-green-500 group-hover:text-emerald-400 transition-colors duration-300"
                        size={28}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-green-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-green-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    Learn more <span>→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
