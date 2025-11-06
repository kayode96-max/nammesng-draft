"use client"

import { CheckCircle2 } from "lucide-react"

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
  return (
    <section id="benefits" className="py-20 bg-black/20 backdrop-blur-sm border-y border-green-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Tailored Benefits for
            <span className="block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              Every Professional
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group, idx) => (
            <div
              key={group.title}
              className="p-6 rounded-xl border border-green-900/30 bg-gradient-to-br from-green-900/10 to-transparent hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 100}ms both`,
              }}
            >
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6 group-hover:text-green-500 transition-colors duration-300">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.benefits.map((benefit, bidx) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 group/item"
                    style={{
                      animation: `slideInLeft 0.5s ease-out ${300 + bidx * 75}ms both`,
                    }}
                  >
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300"
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
