import Link from "next/link"
import { Eye, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CryptoVision
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Empowering your crypto journey with advanced insights and secure trading.
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} CryptoVision. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/coins" className="text-sm hover:text-blue-400 transition-colors">
                Coins
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links (Placeholder) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-sm hover:text-blue-400 transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
          <p className="text-sm">Stay updated with the latest crypto news and platform updates.</p>
        </div>
      </div>
    </footer>
  )
}
