"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MembershipPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    category: "",
    expertise: "",
    agreeTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        institution: "",
        category: "",
        expertise: "",
        agreeTerms: false,
      })
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-bl from-green-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-20 z-30 bg-background/70 backdrop-blur-xl border-b border-green-900/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-black rounded-lg px-3 py-2">
                <span className="text-green-500 font-headline font-bold text-xl">NM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-headline font-bold text-foreground text-sm">NAMMES</p>
            </div>
          </Link>
          <Link href="/" className="text-foreground hover:text-green-500 transition-colors duration-300">
            Back to Home
          </Link>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">Join NAMMES Today</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Take the first step towards advancing your career in materials science. Complete your membership application
            in just a few minutes.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-green-900/30 rounded-xl p-8 hover:border-green-900/60 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              {/* Institution */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Institution/Organization</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Your company or university"
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              {/* Membership Category */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Membership Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                >
                  <option value="">Select a category</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="researcher">Researcher</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>

              {/* Expertise */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Area of Expertise</label>
                <textarea
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="Describe your expertise and interests..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3 p-4 bg-green-900/10 border border-green-900/30 rounded-lg">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-green-900/30 cursor-pointer"
                />
                <label className="text-sm text-muted-foreground cursor-pointer">
                  I agree to NAMMES Terms of Service and Privacy Policy, and would like to receive updates about events
                  and opportunities.
                </label>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-start gap-3 p-4 bg-emerald-900/20 border border-emerald-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-emerald-400">Application submitted successfully!</p>
                    <p className="text-sm text-emerald-300">You'll receive a confirmation email shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-red-400">Something went wrong</p>
                    <p className="text-sm text-red-300">Please try again or contact support.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.agreeTerms}
                className="w-full gradient-btn py-6 text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue to Payment
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </Button>

              {/* Additional Info */}
              <p className="text-center text-sm text-muted-foreground pt-4">
                By proceeding, you'll be redirected to our secure payment system.
              </p>
            </form>
          </div>
        </div>

        {/* Benefits Preview */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {[
            { icon: "🎓", title: "Quality Education", desc: "Access to exclusive webinars and training" },
            { icon: "🤝", title: "Network", desc: "Connect with industry professionals" },
            { icon: "💼", title: "Opportunities", desc: "Career growth and placement support" },
          ].map((benefit, idx) => (
            <div
              key={benefit.title}
              className="p-6 rounded-lg border border-green-900/20 bg-white/5 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group"
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-headline font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
