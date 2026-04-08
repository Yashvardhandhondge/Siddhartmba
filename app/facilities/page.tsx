import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import clientPromise from "@/lib/mongodb"
import { Monitor, Laptop, Users, Wifi, Trophy, Coffee, Home, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore world-class facilities at SIMS — Smart Classrooms, Computer Lab, Seminar Hall, Wi-Fi Campus, Sports Complex, Canteen, Hostel, and Library.",
}

const defaultFacilities = [
  { id: "smart-classrooms", name: "Smart Classrooms", icon: "Monitor", description: "Technology-enabled classrooms with projectors, smart boards, and audio-visual equipment for interactive learning sessions, case study discussions, and multimedia presentations.", features: ["Smart boards & projectors", "Audio-visual equipment", "Air-conditioned", "Wi-Fi enabled"] },
  { id: "computer-lab", name: "Computer Lab", icon: "Laptop", description: "State-of-the-art computer lab equipped with the latest hardware and software for data analytics, financial modeling, ERP training, and research work.", features: ["Latest hardware & software", "High-speed internet", "Statistical software (SPSS, Excel)", "ERP & SAP training tools"] },
  { id: "seminar-hall", name: "Seminar Hall", icon: "Users", description: "A spacious seminar hall for guest lectures, workshops, paper presentations, management fests, and corporate interactions.", features: ["200+ seating capacity", "Professional sound system", "Stage & podium", "Air-conditioned"] },
  { id: "wifi-campus", name: "Wi-Fi Campus", icon: "Wifi", description: "The entire campus is covered with high-speed Wi-Fi connectivity, enabling students and faculty to access online resources, research databases, and e-learning platforms seamlessly.", features: ["Campus-wide coverage", "High-speed internet", "E-library access", "Cloud-based learning"] },
  { id: "sports", name: "Sports Complex", icon: "Trophy", description: "Comprehensive sports facilities for physical fitness and team-building activities, including indoor and outdoor sports options.", features: ["Cricket & football ground", "Indoor games", "Gym & fitness center", "Annual sports events"] },
  { id: "canteen", name: "Canteen", icon: "Coffee", description: "A hygienic and affordable canteen serving nutritious meals, snacks, and beverages in a comfortable dining environment.", features: ["Hygienic food preparation", "Affordable pricing", "Variety of cuisines", "Spacious seating"] },
  { id: "hostel", name: "Hostel", icon: "Home", description: "Separate hostel facilities for boys and girls with comfortable rooms, mess facilities, and 24/7 security for outstation students.", features: ["Separate boys & girls hostel", "Furnished rooms", "Mess facility", "24/7 security & CCTV"] },
  { id: "library", name: "Library", icon: "BookOpen", description: "A well-stocked library with management books, journals, case studies, newspapers, and digital resources for comprehensive academic support.", features: ["5000+ books & journals", "Digital library access", "Reading room", "EBSCO & Prowess databases"] },
]

const iconMap: Record<string, any> = { Monitor, Laptop, Users, Wifi, Trophy, Coffee, Home, BookOpen }

async function getFacilities() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")
    const facilities = await db.collection("facilities").find({}).sort({ order: 1 }).toArray()
    return facilities || []
  } catch (error) {
    console.error("Error fetching facilities:", error)
    return []
  }
}

export default async function FacilitiesPage() {
  const dbFacilities = await getFacilities()
  const facilities = dbFacilities.length > 0 ? dbFacilities : defaultFacilities

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Infrastructure</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Our Facilities</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {facilities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((facility: any, index: number) => {
              const Icon = iconMap[facility.icon] || Monitor
              return (
                <Card key={facility.id || index} className="border-gold-100 dark:border-navy-400 card-hover overflow-hidden">
                  {facility.images && facility.images[0] && (
                    <div className="relative h-48 w-full">
                      <Image src={facility.images[0]} alt={facility.name} fill className="object-cover" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-gold-500" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy-500 dark:text-white mb-2">{facility.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {typeof facility.description === "string" ? facility.description : ""}
                    </p>
                    {facility.features && facility.features.length > 0 && (
                      <ul className="space-y-1.5">
                        {facility.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">Facilities information coming soon.</p>
          </div>
        )}
      </div>
    </>
  )
}
