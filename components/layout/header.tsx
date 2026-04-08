"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SIMSLogo from "./sims-logo"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about", dropdown: "about" },
  {
    name: "Academics", href: "/academics", dropdown: "academics",
  },
  { name: "Placements", href: "/placements" },
  { name: "Research & Events", href: "/research-events" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Library", href: "/library" },
  { name: "Contact Us", href: "/contact" },
]

const aboutOptions = [
  { label: "About Institute", href: "/about" },
  { label: "About Society", href: "/about?section=society" },
  { label: "Vision & Mission", href: "/about?section=vision" },
  { label: "Directors", href: "/about?section=directors" },
  { label: "Leadership", href: "/about?section=leadership" },
]

const academicsOptions = [
  { label: "MBA Program", href: "/academics" },
  { label: "Faculty", href: "/academics/faculty" },
  { label: "Admission", href: "/academics/admission" },
  { label: "Syllabus", href: "/academics/syllabus" },
  { label: "Exam Schedule", href: "/academics/exams" },
  { label: "Academic Calendar", href: "/academics/calendar" },
]

const libraryOptions = [
  { label: "About", href: "/library" },
  { label: "Books & Journals", href: "/library?category=books" },
  { label: "Services", href: "/library?category=services" },
]

type DropdownKey = "about" | "academics" | "library"

const dropdownMap: Record<DropdownKey, { label: string; href: string }[]> = {
  about: aboutOptions,
  academics: academicsOptions,
  library: libraryOptions,
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  return (
    <header className="bg-white dark:bg-navy-500 shadow-sm border-b border-navy-50 dark:border-navy-700 sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-navy-500 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              <span>Mitmita, Chhatrapati Sambhajinagar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-gold-400" />
              <a href="tel:+917888155999" className="hover:text-gold-300 transition-colors">+91 7888155999</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-gold-400" />
              <a href="mailto:collagesiddharth7@gmail.com" className="hover:text-gold-300 transition-colors">collagesiddharth7@gmail.com</a>
            </div>
          </div>
          <div className="text-gold-300 font-medium">
            Affiliated to Dr. Babasaheb Ambedkar Marathwada University
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <SIMSLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const dropdownKey = item.dropdown as DropdownKey | undefined
            if (dropdownKey && dropdownMap[dropdownKey]) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-medium text-navy-500 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-navy-400">
                      {item.name}
                      <ChevronDown className="ml-1 h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[180px]">
                    {dropdownMap[dropdownKey].map((opt) => (
                      <DropdownMenuItem key={opt.href} asChild>
                        <Link href={opt.href}>{opt.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-navy-500 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-navy-400"
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold shadow-md">
            <Link href="/academics/admission">Apply Now</Link>
          </Button>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-navy-500 dark:text-gray-200 hover:bg-navy-50 dark:hover:bg-navy-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-500 border-t shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => {
              const dropdownKey = item.dropdown as DropdownKey | undefined
              if (dropdownKey && dropdownMap[dropdownKey]) {
                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-base font-medium text-navy-500 dark:text-gray-200 hover:bg-navy-50 dark:hover:bg-navy-400"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdowns.includes(item.name) ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdowns.includes(item.name) && (
                      <div className="pl-4 space-y-1">
                        {dropdownMap[dropdownKey].map((opt) => (
                          <Link
                            key={opt.href}
                            href={opt.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gold-600 hover:bg-navy-50 dark:hover:bg-navy-400"
                            onClick={() => { setMobileMenuOpen(false); setOpenDropdowns([]) }}
                          >
                            {opt.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-navy-500 dark:text-gray-200 hover:text-gold-600 hover:bg-navy-50 dark:hover:bg-navy-400"
                  onClick={() => { setMobileMenuOpen(false); setOpenDropdowns([]) }}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-2">
              <Button asChild className="w-full bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold">
                <Link href="/academics/admission">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
