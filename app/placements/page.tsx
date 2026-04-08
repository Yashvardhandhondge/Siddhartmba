import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Building2, IndianRupee, Users, Award, ArrowUpRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Placements",
  description: "SIMS has a 95% placement record with top recruiters like TCS, Infosys, HDFC, Deloitte. Discover placement stats, process, and recruiter details.",
}

const placementStats = [
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  { icon: IndianRupee, value: "4.5 LPA", label: "Average Package" },
  { icon: IndianRupee, value: "8.5 LPA", label: "Highest Package" },
  { icon: Building2, value: "50+", label: "Recruiting Companies" },
]

const topRecruiters = [
  "TCS", "Infosys", "Wipro", "HDFC Bank", "Deloitte", "Accenture",
  "Cognizant", "ICICI Bank", "Amazon", "Reliance Industries",
  "Bajaj Finserv", "Axis Bank", "Capgemini", "HCL Technologies",
  "Kotak Mahindra", "L&T", "Mahindra & Mahindra", "Asian Paints",
  "Godrej", "ITC", "KPMG", "EY", "PwC", "Jio",
]

const placementProcess = [
  {
    step: "1",
    title: "Pre-Placement Training",
    description: "Resume building, aptitude training, group discussion practice, mock interviews, and soft skills development starting from Semester 3.",
  },
  {
    step: "2",
    title: "Industry Interaction",
    description: "Guest lectures, industry visits, corporate mentorship programs, and networking events with HR professionals and alumni.",
  },
  {
    step: "3",
    title: "Summer Internship",
    description: "8-week mandatory summer internship after first year with leading companies, providing real-world industry exposure.",
  },
  {
    step: "4",
    title: "Campus Recruitment",
    description: "On-campus and off-campus placement drives with pre-placement talks, aptitude tests, group discussions, and personal interviews.",
  },
]

const testimonials = [
  {
    name: "Priya Deshmukh",
    batch: "MBA 2023",
    company: "Deloitte",
    package: "7.2 LPA",
    quote: "The placement cell at SIMS was incredibly supportive. The rigorous training and mock interviews prepared me well for the corporate recruitment process.",
  },
  {
    name: "Rohit Patil",
    batch: "MBA 2022",
    company: "HDFC Bank",
    package: "5.8 LPA",
    quote: "My Finance specialization and the practical approach to learning at SIMS gave me the edge during the campus placement at HDFC Bank.",
  },
  {
    name: "Sneha Kulkarni",
    batch: "MBA 2023",
    company: "TCS",
    package: "4.5 LPA",
    quote: "SIMS not only helped me get placed but also shaped my personality. The training sessions on communication and leadership were transformational.",
  },
]

export default function PlacementsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Career Launch</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Placements at SIMS
          </h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our dedicated placement cell ensures every student gets the opportunity to build a rewarding career
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => (
              <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-navy-500 dark:text-gold-400">{stat.value}</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Our Partners</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Top <span className="text-gold-gradient">Recruiters</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiters.map((name, index) => (
              <div
                key={index}
                className="px-4 py-4 bg-gray-50 dark:bg-navy-400 border border-gray-100 dark:border-navy-300 rounded-lg flex items-center justify-center hover:border-gold-400 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="font-medium text-navy-400 dark:text-gray-300 text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Our Approach</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Placement <span className="text-gold-gradient">Process</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementProcess.map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-gold-100 dark:border-navy-400 card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-500 to-[#1a2d4a] flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-gold-400 text-lg">{item.step}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy-500 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Success Stories</span>
            <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
              Placed <span className="text-gold-gradient">Students</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-heading font-bold text-navy-500 dark:text-white">{t.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.batch}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gold-600 dark:text-gold-400">{t.company}</p>
                      <p className="text-sm text-gray-500">{t.package}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
