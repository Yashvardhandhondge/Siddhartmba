"use client"

import { ShieldCheck, GraduationCap, Users, Building2 } from "lucide-react"

const credentials = [
  { icon: ShieldCheck, title: "AICTE Approved", description: "Recognized by AICTE" },
  { icon: GraduationCap, title: "BAMU Affiliated", description: "Dr. B.A.M. University" },
  { icon: Users, title: "Experienced Faculty", description: "Qualified educators" },
  { icon: Building2, title: "Modern Campus", description: "State-of-the-art facilities" },
]

export default function StatsBar() {
  return (
    <section className="relative bg-navy-500 py-12 -mt-1">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-[#0f2038] to-navy-500" />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-all duration-300">
                <item.icon className="h-6 w-6 text-gold-400" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-gold-400 font-heading">
                {item.title}
              </div>
              <p className="text-gray-400 text-sm mt-1 font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
