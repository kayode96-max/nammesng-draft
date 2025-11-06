"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-green-400/10 to-transparent rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 rounded-full backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Sparkles size={16} className="text-green-500" />
          <span className="text-sm font-medium text-green-400">Introducing NAMMES Portal</span>
        </div>

        {/* Main Heading */}
        <div
          className={`space-y-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Shape the Future of
            <span className="block h-24 md:h-32 relative overflow-hidden">
              <span className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <span className="bg-gradient-to-r from-green-500 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Materials Science
                </span>
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join Nigeria's premier network of materials science and engineering professionals. Connect, collaborate, and
            accelerate your career in the evolving materials industry.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-6 text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-1">
            Join as Member
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg border-green-500/50 text-foreground hover:bg-green-900/10 transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicator */}
        <div
          className={`pt-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-4">Trusted by professionals across Nigeria</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"].map((city) => (
              <div
                key={city}
                className="text-xs font-medium text-muted-foreground px-4 py-2 rounded-lg bg-white/5 border border-green-900/20 backdrop-blur-sm"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
