"use client"

import Link from "next/link"
import { GraduationCap, Briefcase, Globe, BookOpen, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "MBA Programs",
    description: "2-year full-time MBA with specializations in Marketing, Finance, HR, and Operations Management.",
    link: "/academics",
    color: "from-navy-500 to-[#1a2d4a]",
  },
  {
    icon: Briefcase,
    title: "Placements",
    description: "95% placement record with 50+ top recruiters including TCS, Infosys, HDFC, Deloitte, and more.",
    link: "/placements",
    color: "from-gold-700 to-gold-600",
  },
  {
    icon: Globe,
    title: "Industry Connect",
    description: "Regular guest lectures, industry visits, internship programs, and live project opportunities.",
    link: "/research-events",
    color: "from-navy-500 to-[#1a2d4a]",
  },
  {
    icon: BookOpen,
    title: "Research",
    description: "Faculty-led research initiatives, case study competitions, and national paper presentations.",
    link: "/research-events",
    color: "from-gold-700 to-gold-600",
  },
]

export default function InstituteHighlights() {
  return (
    <section className="py-20 bg-white dark:bg-navy-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Why SIMS</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
            Welcome to Siddharth Institute of <span className="text-gold-gradient">Management Science</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Ramai Pratishthan&apos;s Siddharth Institute of Management Science (SIMS) is committed to nurturing future business leaders through rigorous academics, ethical values, and industry-focused learning at Mitmita, Chhatrapati Sambhajinagar.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br p-6 text-white shadow-lg card-hover"
              style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#0A1628, #1a2d4a' : '#8F7533, #C9A84C'})` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
