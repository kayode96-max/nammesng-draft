"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [tab, setTab] = useState<"login" | "forgot">("login")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [formData, setFormData] = useState({
    certificateId: "",
    password: "",
  })

  const [forgotData, setForgotData] = useState({
    email: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleForgotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForgotData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setTimeout(() => {
        // Redirect to dashboard in real implementation
        window.location.href = "/dashboard"
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setTimeout(() => {
        setSubmitStatus("idle")
        setForgotData({ email: "" })
        setTab("login")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden pt-20 flex items-center">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-green-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-30 bg-background/70 backdrop-blur-xl border-b border-green-900/20">
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

      <div className="w-full max-w-md mx-auto px-6 py-12">
        {/* Title */}
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            {tab === "login" ? "Member Login" : "Reset Password"}
          </h1>
          <p className="text-muted-foreground">
            {tab === "login"
              ? "Access your NAMMES member portal"
              : "We'll send you instructions to reset your password"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className={`flex gap-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <button
            onClick={() => {
              setTab("login")
              setSubmitStatus("idle")
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              tab === "login"
                ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                : "bg-white/5 border border-green-900/30 text-foreground hover:border-green-500/50"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setTab("forgot")
              setSubmitStatus("idle")
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              tab === "forgot"
                ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                : "bg-white/5 border border-green-900/30 text-foreground hover:border-green-500/50"
            }`}
          >
            Forgot Password
          </button>
        </div>

        {/* Form Container */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-green-900/30 rounded-xl p-8 space-y-6">
            {tab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Certificate ID */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Certificate ID</label>
                  <input
                    type="text"
                    name="certificateId"
                    value={formData.certificateId}
                    onChange={handleChange}
                    placeholder="e.g., NM-2025-XXXXXX"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                  />
                  <p className="text-xs text-muted-foreground">
                    You received this in your membership confirmation email
                  </p>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-foreground">Password</label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs text-green-500 hover:text-green-400 transition-colors"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </div>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-900/20 border border-emerald-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-emerald-400">Login successful!</p>
                      <p className="text-sm text-emerald-300">Redirecting to dashboard...</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-red-400">Login failed</p>
                      <p className="text-sm text-red-300">Please check your credentials and try again</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-btn py-3 text-base shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </Button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-green-900/20" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-background text-muted-foreground">New member?</span>
                  </div>
                </div>

                {/* Register Link */}
                <Link href="/membership">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-green-500/50 text-foreground hover:bg-green-900/10"
                  >
                    Create Account
                  </Button>
                </Link>

                {/* Forgot Password Link */}
                <button
                  type="button"
                  onClick={() => setTab("forgot")}
                  className="w-full text-sm text-green-500 hover:text-green-400 transition-colors py-2"
                >
                  Forgot your password?
                </button>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={forgotData.email}
                    onChange={handleForgotChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                  />
                  <p className="text-xs text-muted-foreground">Enter the email associated with your account</p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-900/20 border border-emerald-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-emerald-400">Check your email!</p>
                      <p className="text-sm text-emerald-300">We've sent password reset instructions</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-red-400">Something went wrong</p>
                      <p className="text-sm text-red-300">Please try again or contact support</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-btn py-3 text-base shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </Button>

                {/* Back to Login */}
                <button
                  type="button"
                  onClick={() => setTab("login")}
                  className="w-full text-sm text-green-500 hover:text-green-400 transition-colors py-2"
                >
                  Back to Login
                </button>
              </form>
            )}
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Having trouble?{" "}
            <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
