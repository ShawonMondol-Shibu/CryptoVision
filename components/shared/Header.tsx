"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, ArrowRight, Shield, BarChart3, Zap, Users, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Reusing the HeaderSection as the Hero for the Home Page
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-20 px-4 text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${window.scrollY * 0.3}px)`, // Using window.scrollY for initial render, will be updated by parent
        }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          className={`flex items-center justify-center space-x-3 mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg animate-pulse">
            <Eye className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CryptoVision
          </h1>
        </div>

        <p
          className={`text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Your gateway to intelligent cryptocurrency trading and market analysis. Get real-time insights, advanced
          analytics, and make informed investment decisions.
        </p>

        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform"
          >
            Start Trading Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-12 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  // Removed scrolled state and useEffect for scroll listener as navbar is removed

  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Access real-time market data, technical indicators, and AI-powered insights.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Top-Tier Security",
      description: "Your assets are protected with bank-level encryption and multi-factor authentication.",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-600" />,
      title: "Lightning-Fast Trades",
      description: "Execute orders in milliseconds on our high-performance trading engine.",
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "24/7 Expert Support",
      description: "Our dedicated team is always available to assist you with any queries.",
    },
  ]

  const testimonials = [
    {
      quote: "CryptoVision transformed my trading strategy. The analytics are unparalleled!",
      author: "Jane Doe, Professional Trader",
    },
    {
      quote: "Secure, fast, and incredibly user-friendly. Highly recommend for anyone in crypto.",
      author: "John Smith, Crypto Enthusiast",
    },
    {
      quote: "The best platform for real-time insights. My portfolio has never looked better.",
      author: "Emily White, Investor",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Global Navigation - REMOVED */}

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Unlock Your Trading Potential</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Simple Steps to Get Started</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-3xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Create Account</h3>
                <p className="text-slate-600">Sign up in minutes with your email and verify your identity.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-3xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Fund Your Wallet</h3>
                <p className="text-slate-600">Deposit crypto or fiat currency securely to your CryptoVision wallet.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-3xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Start Trading</h3>
                <p className="text-slate-600">Explore markets, analyze data, and execute your first trade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold text-slate-800">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Overview Section (Placeholder) */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Real-Time Market Insights</h2>
            <div className=" p-8 rounded-lg shadow-lg border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-slate-800">Top Cryptocurrencies</h3>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                  View All Markets
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {/* Placeholder for crypto data */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-800">Bitcoin (BTC)</p>
                    <p className="text-sm text-slate-600">$68,500.23</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+2.5%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                  <div>
                    <p className="font-semibold text-slate-800">Ethereum (ETH)</p>
                    <p className="text-sm text-slate-600">$3,800.15</p>
                  </div>
                  <div className="flex items-center text-red-500">
                    <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                    <span>-1.2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                  <div>
                    <p className="font-semibold text-slate-800">Ripple (XRP)</p>
                    <p className="text-sm text-slate-600">$0.58</p>
                  </div>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+0.8%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6">*Data is for demonstration purposes only and not real-time.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Ready to Dive into Crypto?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join CryptoVision today and take control of your digital assets with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
