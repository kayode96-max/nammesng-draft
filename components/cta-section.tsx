"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced background elements with animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-green-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-green-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto px-6 text-center space-y-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 rounded-full backdrop-blur-sm hover:border-green-500/100 hover:bg-green-900/40 transition-all duration-300 group">
          <Sparkles size={16} className="text-green-500 group-hover:animate-spin" style={{ animationDuration: "2s" }} />
          <span className="text-sm font-medium text-green-400">Ready to take the next step?</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-foreground">Join NAMMES Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Become part of Nigeria's most dynamic materials science community. Connect, learn, and grow with
            professionals shaping the future of the industry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button className="gradient-btn px-8 py-6 text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-1">
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg border-green-500/50 text-foreground hover:bg-green-900/10 transition-all duration-300 bg-transparent hover:border-green-500/100"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
