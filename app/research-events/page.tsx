import { Card, CardContent } from "@/components/ui/card"
import { Mic, Globe, Trophy, FileText, Calendar, Users, BookOpen, Presentation } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research & Events",
  description: "Explore research initiatives, management fests, guest lectures, industry visits, and academic events at SIMS.",
}

const events = [
  {
    icon: Mic,
    title: "Guest Lectures",
    description: "Regular sessions by industry leaders, corporate executives, and distinguished academicians sharing real-world insights on current business trends and management practices.",
  },
  {
    icon: Trophy,
    title: "Management Fest",
    description: "Annual inter-college management festival featuring business plan competitions, marketing challenges, finance quizzes, and leadership games.",
  },
  {
    icon: Globe,
    title: "Industry Visits",
    description: "Organized visits to leading manufacturing plants, corporate offices, financial institutions, and startups to bridge the gap between theory and practice.",
  },
  {
    icon: FileText,
    title: "Case Study Competitions",
    description: "Regular case study analysis competitions that develop analytical thinking, problem-solving abilities, and presentation skills in students.",
  },
  {
    icon: Presentation,
    title: "Paper Presentations",
    description: "National and state-level paper presentation events encouraging research in management, finance, marketing, and organizational behavior.",
  },
  {
    icon: BookOpen,
    title: "Workshops & Seminars",
    description: "Skill-building workshops on digital marketing, financial modeling, data analytics, and entrepreneurship conducted by industry professionals.",
  },
]

const researchAreas = [
  "Strategic Management & Business Policy",
  "Financial Markets & Investment Analysis",
  "Digital Marketing & Consumer Behavior",
  "Human Capital Management & OB",
  "Supply Chain & Operations Research",
  "Entrepreneurship & Innovation",
  "Rural & Agri-Business Management",
  "Business Analytics & Decision Science",
]

const upcomingEvents = [
  { date: "Aug 2025", title: "Industry Expert Talk Series — Digital Transformation", type: "Guest Lecture" },
  { date: "Sep 2025", title: "SIMS Management Fest 2025 — 'Pinnacle'", type: "Festival" },
  { date: "Oct 2025", title: "National Paper Presentation Conference", type: "Research" },
  { date: "Nov 2025", title: "Corporate Finance Workshop by ICICI Bank", type: "Workshop" },
  { date: "Dec 2025", title: "Industry Visit — Bajaj Auto, Pune", type: "Visit" },
  { date: "Jan 2026", title: "Inter-College Case Study Competition", type: "Competition" },
]

export default function ResearchEventsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Beyond The Classroom</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Research & Events
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Fostering intellectual curiosity, industry exposure, and holistic development through diverse academic activities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Events Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Events & <span className="text-gold-gradient">Activities</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-500 to-[#1a2d4a] flex items-center justify-center mb-4">
                    <event.icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-500 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-navy-500 to-[#1a2d4a] rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Faculty Research</span>
              <h2 className="font-heading text-3xl font-bold text-white mt-3 mb-2">
                Research Focus Areas
              </h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Save The Date</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Upcoming <span className="text-gold-gradient">Events</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover">
                <CardContent className="p-4 sm:p-5 flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="bg-gold-500/10 rounded-lg px-3 py-2">
                      <span className="text-gold-600 dark:text-gold-400 font-heading font-bold text-sm">{event.date}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy-500 dark:text-white">{event.title}</h4>
                  </div>
                  <span className="hidden sm:inline-flex text-xs font-medium bg-navy-50 dark:bg-navy-400 text-navy-400 dark:text-gray-300 px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
