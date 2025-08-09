"use client"

import { Button } from "@/components/ui/button"
import { Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="w-full py-16 px-4  overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative">
        {/* Animated Background Elements */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-200 rounded-full blur-xl"></div>
        </div>

        {/* Site Name with Icon */}
        <div
          className={`flex items-center justify-center space-x-3 mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Image src={'/logo/logo1.png'} width={200} height={200} alt="" className="dark:invert"/>
        </div>

        {/* Description */}
        <p
          className={`text-lg md:text-xl dark:invert text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          Your gateway to intelligent cryptocurrency trading and market analysis. Get real-time insights, advanced
          analytics, and make informed investment decisions.
        </p>

        {/* Call-to-Action Button */}
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
