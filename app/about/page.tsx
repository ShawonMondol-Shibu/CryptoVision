/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Shield, TrendingUp, Users, BarChart3, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Bank-Level Security",
      description: "Advanced encryption and multi-layer security protocols to protect your investments.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Real-time market analysis, technical indicators, and AI-powered trading insights.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance trading engine.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Markets",
      description: "Access to 500+ cryptocurrencies and global trading pairs 24/7.",
    },
  ]

  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "$50B+", label: "Trading Volume" },
    { number: "500+", label: "Cryptocurrencies" },
    { number: "99.9%", label: "Uptime" },
  ]

  const values = [
    "Transparency in all operations and fee structures",
    "Cutting-edge technology for superior trading experience",
    "24/7 customer support from crypto experts",
    "Regulatory compliance and user protection",
    "Continuous innovation and platform improvements",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                <Eye className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About CryptoVision
              </h1>
            </div>
            <p className="text-xl dark:invert text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of cryptocurrency traders with advanced analytics, secure trading, and
              unparalleled market insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At CryptoVision, we believe that everyone should have access to professional-grade cryptocurrency
                trading tools. Our mission is to democratize crypto trading by providing advanced analytics, real-time
                market data, and intuitive interfaces that both beginners and experts can use to make informed
                investment decisions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're building the future of digital asset trading, where transparency, security, and innovation come
                together to create the ultimate trading experience.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
                <TrendingUp className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-center text-slate-800">Vision for the Future</h3>
                <p className="text-center text-slate-600 mt-4">
                  To become the world's most trusted and innovative cryptocurrency trading platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Why Choose CryptoVision?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by Millions Worldwide</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Core Values</h2>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-lg text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Co-Founder", experience: "Former Goldman Sachs VP" },
              { name: "Michael Rodriguez", role: "CTO & Co-Founder", experience: "Ex-Google Senior Engineer" },
              { name: "David Kim", role: "Head of Security", experience: "Former NSA Cybersecurity Expert" },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Start Your Crypto Journey?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join millions of traders who trust CryptoVision for their cryptocurrency investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
            >
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
