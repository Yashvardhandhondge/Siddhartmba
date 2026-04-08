"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap } from "lucide-react"

export default function FloatingApplyButton() {
  const pathname = usePathname()
  const isAdmin = pathname?.includes("admin")

  if (isAdmin) return null

  return (
    <Link
      href="/academics/admission"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <GraduationCap className="h-5 w-5 transition-transform group-hover:rotate-12" />
      <span className="font-body">Apply Now</span>
    </Link>
  )
}
