"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

const benefitGroups = [
  {
    title: "For Students",
    benefits: [
      "Mentorship from industry leaders",
      "Scholarship opportunities",
      "Early career guidance",
      "Access to internships",
    ],
  },
  {
    title: "For Professionals",
    benefits: [
      "Networking with peers",
      "Career advancement resources",
      "Technical certifications",
      "Executive networking events",
    ],
  },
  {
    title: "For Researchers",
    benefits: [
      "Collaboration opportunities",
      "Research dissemination platform",
      "Grant information sharing",
      "Journal access privileges",
    ],
  },
]

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="benefits"
      className="relative py-20 bg-black/20 backdrop-blur-sm border-y border-green-900/20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-green-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/5 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Tailored Benefits for
            <span className="block gradient-text">Every Professional</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group, idx) => (
            <div
              key={group.title}
              className={`p-6 rounded-xl border border-green-900/30 bg-gradient-to-br from-green-900/10 to-transparent hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6 group-hover:text-green-500 transition-colors duration-300">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.benefits.map((benefit, bidx) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 group/item transition-all duration-300"
                    style={{
                      animation: isVisible ? `slideInFromLeft 0.5s ease-out ${300 + bidx * 75}ms forwards` : "none",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:text-emerald-400 transition-all duration-300"
                      size={20}
                    />
                    <span className="text-foreground group-hover/item:text-green-400 transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
