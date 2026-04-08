import Link from "next/link"
import { Mail, Phone, Clock, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      {/* Affiliation bar */}
      <div className="border-b border-navy-400">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gold-300 text-center">
          <span>Affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar</span>
          <span className="hidden sm:inline text-navy-300">|</span>
          <span>Approved by AICTE | Recognized by Govt. of Maharashtra</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About SIMS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 64 68" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerShield" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#1a2d4a" }} />
                    <stop offset="100%" style={{ stopColor: "#2a4470" }} />
                  </linearGradient>
                  <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#C9A84C" }} />
                    <stop offset="50%" style={{ stopColor: "#E8D48B" }} />
                    <stop offset="100%" style={{ stopColor: "#C9A84C" }} />
                  </linearGradient>
                </defs>
                <path d="M32 2 L58 14 L58 36 C58 50 46 60 32 64 C18 60 6 50 6 36 L6 14 Z" fill="url(#footerShield)" stroke="url(#footerGold)" strokeWidth="2.5" />
                <text x="32" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18" fill="url(#footerGold)">SIMS</text>
              </svg>
              <div>
                <h3 className="text-lg font-heading font-bold text-gold-400">SIMS</h3>
                <p className="text-xs text-gray-400">Siddharth Institute of Management Science</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Shaping tomorrow&apos;s business leaders through world-class management education, ethical values, and industry-ready skills.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-navy-400 hover:bg-gold-500 hover:text-navy-500 flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-400 hover:bg-gold-500 hover:text-navy-500 flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-400 hover:bg-gold-500 hover:text-navy-500 flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-400 hover:bg-gold-500 hover:text-navy-500 flex items-center justify-center transition-all duration-300" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "MBA Program", href: "/academics" },
                { label: "Admissions", href: "/academics/admission" },
                { label: "Placements", href: "/placements" },
                { label: "Research & Events", href: "/research-events" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gold-400">Resources</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Library", href: "/library" },
                { label: "Gallery", href: "/gallery" },
                { label: "Facilities", href: "/facilities" },
                { label: "Faculty", href: "/academics/faculty" },
                { label: "Syllabus", href: "/academics/syllabus" },
                { label: "Academic Calendar", href: "/academics/calendar" },
                { label: "Exam Schedule", href: "/academics/exams" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gold-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Siddharth Institute of Management Science, Mitmita, Chhatrapati Sambhajinagar - 431002</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-2.5 flex-shrink-0" />
                <a href="mailto:collagesiddharth7@gmail.com" className="text-gray-400 hover:text-gold-300 transition-colors text-sm">
                  collagesiddharth7@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-2.5 flex-shrink-0" />
                <a href="tel:+917888155999" className="text-gray-400 hover:text-gold-300 transition-colors text-sm">
                  +91 7888155999
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-gold-400 mr-2.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-navy-400 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Siddharth Institute of Management Science. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
