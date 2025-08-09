"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Eye,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Globe,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import { useState } from "react"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      details: ["support@cryptovision.com", "business@cryptovision.com"],
      description: "Get in touch via email",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Speak with our team",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Visit Us",
      details: ["123 Crypto Street", "San Francisco, CA 94105"],
      description: "Our headquarters",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Support Hours",
      details: ["24/7 Live Chat", "Mon-Fri: 9AM-6PM PST"],
      description: "We're here to help",
    },
  ]

  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-600" />,
      title: "Phone Support",
      description: "Speak directly with a crypto expert",
      action: "Call Now",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      action: "Visit Help Center",
    },
  ]

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <section className="py-16 px-4 border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold dark:invert text-slate-800">
              Contact <span className="text-blue-600">CryptoVision</span>
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about cryptocurrency trading? Need technical support? We&apos;re here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <Send className="h-6 w-6 mr-2 text-blue-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                          <p className="text-sm text-slate-600 mb-2">{info.description}</p>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-700 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 dark:invert">Choose Your Support Option</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{option.title}</h3>
                  <p className="text-slate-600 mb-6">{option.description}</p>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 dark:invert">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I get started with CryptoVision?",
                answer:
                  "Simply create an account, complete the verification process, and you can start trading immediately with our user-friendly platform.",
              },
              {
                question: "Is my cryptocurrency safe on CryptoVision?",
                answer:
                  "Yes, we use bank-level security measures including cold storage, multi-signature wallets, and advanced encryption to protect your assets.",
              },
              {
                question: "What trading fees does CryptoVision charge?",
                answer:
                  "We offer competitive trading fees starting from 0.1% per transaction, with discounts available for high-volume traders.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes, we provide 24/7 customer support through live chat, email, and phone to help you with any questions or issues.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 dark:invert mb-2" >{faq.question}</h3>
                  <p className="text-slate-600 dark:invert">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-12 px-4 bg-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="lg" className="text-white hover:bg-slate-700">
              <Twitter className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-slate-700">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-slate-700">
              <Github className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-slate-300">
            Stay updated with the latest crypto news, platform updates, and trading insights.
          </p>
        </div>
      </section>
    </div>
  )
}
