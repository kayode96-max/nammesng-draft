"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Check, ArrowLeft, CreditCard, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MEMBERSHIP_PLANS = {
  student: {
    name: "Student",
    price: 5000,
    currency: "₦",
    duration: "per year",
    features: ["Access to Learning Resources", "Community Access", "Certificate", "Job Alerts"],
  },
  professional: {
    name: "Professional",
    price: 15000,
    currency: "₦",
    duration: "per year",
    features: ["All Student Benefits", "Networking Events", "Career Guidance", "Priority Support"],
  },
  researcher: {
    name: "Researcher",
    price: 25000,
    currency: "₦",
    duration: "per year",
    features: ["All Professional Benefits", "Publication Platform", "Research Grants Info", "Journal Access"],
  },
  corporate: {
    name: "Corporate",
    price: 100000,
    currency: "₦",
    duration: "per year",
    features: ["All Features", "Team Accounts (10)", "Custom Training", "Dedicated Support"],
  },
}

export default function CheckoutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStep, setPaymentStep] = useState<"select" | "details" | "confirm">("select")
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePaymentSubmit = async () => {
    setIsProcessing(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500))
      setPaymentStep("confirm")
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  const plan = MEMBERSHIP_PLANS[selectedPlan as keyof typeof MEMBERSHIP_PLANS]

  return (
    <main className="min-h-screen bg-background overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
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
          </Link>
          <Link
            href="/membership"
            className="flex items-center gap-2 text-foreground hover:text-green-500 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
        </nav>
      </header>

      {paymentStep === "confirm" ? (
        // Success State
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-in scale-in duration-500">
                <Check size={40} className="text-white" />
              </div>
            </div>
            <h1 className="font-headline text-5xl font-bold text-foreground mb-4">Payment Successful!</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Thank you for joining NAMMES. Your membership is now active. Check your email for your certificate and
              login credentials.
            </p>
            <div className="bg-white/5 border border-green-900/30 rounded-xl p-8 mb-8">
              <h2 className="font-headline text-2xl font-bold text-foreground mb-6">Confirmation Details</h2>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center pb-4 border-b border-green-900/20">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-semibold text-foreground">{plan.name} Membership</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-green-900/20">
                  <span className="text-muted-foreground">Amount Paid</span>
                  <span className="font-headline font-bold text-green-500">
                    {plan.currency}
                    {plan.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Certificate ID</span>
                  <span className="font-mono text-sm text-foreground">
                    NM-2025-{Math.random().toString(36).substring(7).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            <Link href="/">
              <Button className="gradient-btn px-8 py-6 text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-1">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {["select", "details", "confirm"].map((step, idx) => (
              <div
                key={step}
                className={`flex-1 flex items-center ${idx < 2 ? "after:flex-1 after:h-0.5 after:bg-green-900/20 after:mx-4" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-headline font-bold transition-all duration-300 ${
                    paymentStep === step
                      ? "bg-green-600 text-white scale-110"
                      : ["select", "details"].includes(paymentStep) &&
                          ["select", "details"].indexOf(paymentStep) > ["select", "details"].indexOf(step)
                        ? "bg-green-500/30 text-green-400"
                        : "bg-green-900/20 text-muted-foreground"
                  }`}
                >
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>

          {paymentStep === "select" && (
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="font-headline text-4xl font-bold text-foreground mb-4">Select Your Plan</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Choose the membership plan that best fits your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {Object.entries(MEMBERSHIP_PLANS).map(([key, plan]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                      selectedPlan === key
                        ? "border-green-500 bg-green-900/10 shadow-lg shadow-green-500/20"
                        : "border-green-900/30 bg-white/5 hover:border-green-500/50"
                    }`}
                  >
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-headline text-4xl font-bold text-green-500">
                        {plan.currency}
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">{plan.duration}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setPaymentStep("details")}
                className="w-full gradient-btn py-6 text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                Continue to Payment Details
              </Button>
            </div>
          )}

          {paymentStep === "details" && (
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="font-headline text-4xl font-bold text-foreground mb-4">Payment Details</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Enter your card information to complete the purchase.
              </p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Payment Form */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white/5 border border-green-900/30 rounded-xl p-8">
                    <h2 className="font-headline text-xl font-bold text-foreground mb-6">Card Information</h2>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          name="cardName"
                          value={cardData.cardName}
                          onChange={handleCardChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={cardData.cardNumber}
                          onChange={handleCardChange}
                          placeholder="4532 1234 5678 9010"
                          maxLength={19}
                          className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={cardData.expiryDate}
                            onChange={handleCardChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={cardData.cvv}
                            onChange={handleCardChange}
                            placeholder="123"
                            maxLength={3}
                            className="w-full px-4 py-3 bg-white/10 border border-green-900/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-white/20 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </form>

                    {/* Security Badge */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock size={16} className="text-green-500" />
                      Your payment information is secure and encrypted
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32 bg-white/5 border border-green-900/30 rounded-xl p-6 space-y-6">
                    <h2 className="font-headline text-xl font-bold text-foreground">Order Summary</h2>

                    <div className="space-y-3 pb-6 border-b border-green-900/20">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{plan.name} Membership</span>
                        <span className="font-semibold text-foreground">
                          {plan.currency}
                          {plan.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Processing Fee</span>
                        <span className="text-foreground">Free</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-headline font-bold text-foreground">Total</span>
                      <span className="font-headline text-2xl font-bold text-green-500">
                        {plan.currency}
                        {plan.price.toLocaleString()}
                      </span>
                    </div>

                    <Button
                      onClick={handlePaymentSubmit}
                      disabled={
                        isProcessing ||
                        !cardData.cardName ||
                        !cardData.cardNumber ||
                        !cardData.expiryDate ||
                        !cardData.cvv
                      }
                      className="w-full gradient-btn py-4 shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:-translate-y-0.5"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-5 w-5" />
                          Complete Payment
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setPaymentStep("select")}
                      className="w-full bg-transparent border-green-500/50 text-foreground hover:bg-green-900/10"
                    >
                      Change Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}
