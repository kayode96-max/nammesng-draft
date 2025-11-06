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
    <section className="relative py-20 bg-black/30 backdrop-blur-sm border-y border-green-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`text-center space-y-3 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30">
                    <Icon className="text-green-500" size={24} />
                  </div>
                </div>
                <div>
                  <p className="font-headline text-3xl md:text-4xl font-bold text-green-500">
                    {counts[idx]}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
