import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart3, Users, Settings, GraduationCap, Clock, IndianRupee, FileText, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MBA Program | Academics",
  description: "Explore the 2-year full-time MBA program at SIMS with specializations in Marketing, Finance, HR, and Operations. AICTE approved, affiliated to Dr. BAMU.",
}

const specializations = [
  {
    icon: BarChart3,
    title: "Marketing Management",
    description: "Master strategic marketing, digital marketing, consumer behavior, brand management, and market research to drive business growth.",
  },
  {
    icon: IndianRupee,
    title: "Financial Management",
    description: "Gain expertise in financial analysis, investment management, corporate finance, banking operations, and risk management.",
  },
  {
    icon: Users,
    title: "Human Resource Management",
    description: "Develop skills in talent acquisition, organizational behavior, performance management, labor laws, and strategic HR.",
  },
  {
    icon: Settings,
    title: "Operations Management",
    description: "Learn supply chain management, quality control, project management, production planning, and lean operations.",
  },
]

function PageHero() {
  return (
    <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 text-center px-4">
        <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Academics</span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          MBA Program
        </h1>
        <div className="section-divider mx-auto mb-4" />
        <p className="text-gray-300 max-w-2xl mx-auto">
          A rigorous 2-year full-time Master of Business Administration program designed to develop future business leaders
        </p>
      </div>
    </div>
  )
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero />
      <div className="container mx-auto px-4 py-16">

        {/* Program Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Program Overview</span>
              <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
                Master of Business <span className="text-gold-gradient">Administration</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                The MBA program at Siddharth Institute of Management Science is approved by AICTE, New Delhi and affiliated to Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhajinagar. The program is designed to equip students with comprehensive management knowledge and practical skills.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our curriculum integrates core business concepts with specialized domain knowledge, case studies, industry projects, and experiential learning to ensure graduates are industry-ready from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold">
                  <Link href="/academics/admission">
                    Apply Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-navy-200 dark:border-navy-400">
                  <Link href="/academics/syllabus">
                    <FileText className="h-4 w-4 mr-2" />
                    View Syllabus
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: "Degree", value: "MBA" },
                { icon: Clock, label: "Duration", value: "2 Years (Full-time)" },
                { icon: ShieldCheck, label: "Approval", value: "AICTE" },
                { icon: Users, label: "Specializations", value: "4 Tracks" },
              ].map((item, i) => (
                <Card key={i} className="border-gold-100 dark:border-navy-400 card-hover">
                  <CardContent className="p-5 text-center">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-5 w-5 text-gold-500" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                    <p className="font-heading font-bold text-navy-500 dark:text-white">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Choose Your Path</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              MBA <span className="text-gold-gradient">Specializations</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-500 to-[#1a2d4a] flex items-center justify-center flex-shrink-0">
                      <spec.icon className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy-500 dark:text-white mb-2">{spec.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{spec.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-navy-500 to-[#1a2d4a] rounded-2xl p-8 sm:p-12 text-white">
            <div className="text-center mb-10">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">How to Get In</span>
              <h2 className="font-heading text-3xl font-bold mt-3 mb-2">Admission Process</h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-gold-400 text-xl">1</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Entrance Exam</h3>
                <p className="text-gray-300 text-sm">Qualify MAH-MBA/MMS CET, CAT, MAT, or equivalent entrance examination</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-gold-400 text-xl">2</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Application & Documents</h3>
                <p className="text-gray-300 text-sm">Submit application form with required documents through the DTE CAP process</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-gold-400 text-xl">3</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Admission & Enrollment</h3>
                <p className="text-gray-300 text-sm">Confirm admission after seat allotment, pay fees, and begin your MBA journey</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-500 font-semibold">
                <Link href="/academics/admission">
                  Start Your Application <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Investment in Your Future</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Fee <span className="text-gold-gradient">Structure</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <Card className="max-w-2xl mx-auto border-gold-100 dark:border-navy-400">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-navy-400">
                  <span className="text-gray-600 dark:text-gray-400">Program</span>
                  <span className="font-semibold text-navy-500 dark:text-white">MBA (Master of Business Administration)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-navy-400">
                  <span className="text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="font-semibold text-navy-500 dark:text-white">2 Years (4 Semesters)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-navy-400">
                  <span className="text-gray-600 dark:text-gray-400">Annual Tuition Fee</span>
                  <span className="font-semibold text-navy-500 dark:text-white">As per DTE Maharashtra norms</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 dark:text-gray-400">Scholarship</span>
                  <span className="font-semibold text-gold-600 dark:text-gold-400">Available (Govt. & Merit-based)</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                Contact the admission office at +91 7888155999 for detailed fee information
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </>
  )
}
