"use client"

import { useEffect, useState } from "react"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Members", value: "5,000+", suffix: "" },
  { icon: Award, label: "Events Hosted", value: "150+", suffix: "" },
  { icon: Globe, label: "Countries", value: "12+", suffix: "" },
  { icon: TrendingUp, label: "Job Placements", value: "300+", suffix: "" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = [5000, 150, 12, 300]
    const durations = [2000, 1500, 1000, 1800]
    const animationFrames: NodeJS.Timeout[] = []

    targets.forEach((target, idx) => {
      let current = 0
      const increment = target / (durations[idx] / 16)
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[idx] = Math.floor(current)
          return newCounts
        })
      }, 16)
      animationFrames.push(interval)
    })

    return () => animationFrames.forEach(clearInterval)
  }, [isVisible])

  return (
    <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-green-900/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-green-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-green-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`text-center space-y-3 transition-all duration-700 group hover:scale-105 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30 group-hover:border-green-500/60 group-hover:bg-green-900/40 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                    <Icon
                      className="text-green-500 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-300"
                      size={24}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-headline text-3xl md:text-4xl font-bold text-green-500 group-hover:text-emerald-400 transition-colors duration-300">
                    {counts[idx]}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
