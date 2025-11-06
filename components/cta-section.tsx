"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-green-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/50 rounded-full backdrop-blur-sm">
          <Sparkles size={16} className="text-green-500" />
          <span className="text-sm font-medium text-green-400">Ready to take the next step?</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-foreground">Join NAMMES Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of Nigeria's most dynamic materials science community. Connect, learn, and grow with
            professionals shaping the future of the industry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-6 text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-1">
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg border-green-500/50 text-foreground hover:bg-green-900/10 transition-all duration-300 bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
