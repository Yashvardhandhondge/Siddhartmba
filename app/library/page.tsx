import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Globe, Database } from "lucide-react"
import clientPromise from "@/lib/mongodb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Library",
  description: "Access management journals, case study databases, EBSCO, Prowess, CMIE, and 5000+ books at SIMS library.",
}

async function getLibraryContent() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")
    const content = await db.collection("content").findOne({ section: "library" })
    const resources = await db.collection("library_resources").find({}).sort({ category: 1 }).toArray()
    return { content: content || {}, resources: resources || [] }
  } catch (error) {
    console.error("Error fetching library content:", error)
    return { content: {}, resources: [] }
  }
}

const defaultBooks = [
  { title: "Principles of Management", author: "P.C. Tripathi & P.N. Reddy", description: "Foundation text covering planning, organizing, leading, and controlling functions of management." },
  { title: "Financial Management", author: "I.M. Pandey", description: "Comprehensive guide to corporate finance, investment decisions, and capital structure." },
  { title: "Marketing Management", author: "Philip Kotler", description: "The definitive guide to marketing strategy, consumer behavior, and brand management." },
  { title: "Human Resource Management", author: "Gary Dessler", description: "Strategic approach to recruitment, training, performance management, and labor relations." },
  { title: "Operations Management", author: "Jay Heizer & Barry Render", description: "Production planning, quality management, supply chain, and lean operations." },
  { title: "Business Research Methods", author: "Donald Cooper & Pamela Schindler", description: "Research methodology, data analysis, and business statistics." },
  { title: "Organizational Behavior", author: "Stephen P. Robbins", description: "Understanding individual and group behavior in organizations." },
  { title: "Strategic Management", author: "Fred R. David", description: "Comprehensive approach to strategy formulation, implementation, and evaluation." },
]

const digitalResources = [
  { name: "EBSCO Business Source", description: "Full-text business journals, magazines, and reports" },
  { name: "Prowess (CMIE)", description: "Indian corporate financial database with company-level data" },
  { name: "CMIE Economic Outlook", description: "Macroeconomic data, industry analysis, and business trends" },
  { name: "J-Gate", description: "E-journal gateway providing seamless access to scholarly articles" },
  { name: "DELNET", description: "Network of libraries for resource sharing and inter-library loans" },
  { name: "National Digital Library", description: "Free access to a vast repository of academic content" },
]

export default async function LibraryPage({ searchParams }: { searchParams: { category?: string } }) {
  const { content, resources } = await getLibraryContent()
  const category = searchParams.category || "about"
  const availableBooks = resources.filter((r: any) => r.category === "books").length > 0
    ? resources.filter((r: any) => r.category === "books")
    : defaultBooks

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Knowledge Hub</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Library & Resources</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {category === "about" && (
          <>
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              <div>
                <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">About Our Library</span>
                <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
                  A World of <span className="text-gold-gradient">Knowledge</span>
                </h2>
                <div className="section-divider mb-6" />
                {content.about ? (
                  <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content.about }} />
                ) : (
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      The SIMS library is a comprehensive resource center for management students and faculty. Our library houses an extensive collection of management textbooks, business journals, case studies, magazines, and digital resources.
                    </p>
                    <p>
                      With access to databases like EBSCO, CMIE Prowess, and J-Gate, students can conduct in-depth research on business trends, financial markets, and industry analysis.
                    </p>
                  </div>
                )}
                <div className="mt-8 bg-navy-50 dark:bg-navy-400 rounded-xl p-6">
                  <h3 className="font-heading font-bold text-navy-500 dark:text-white mb-3">Library Hours</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Monday - Friday", "9:00 AM - 7:00 PM"],
                      ["Saturday", "10:00 AM - 5:00 PM"],
                      ["Sunday", "Closed"],
                    ].map(([day, time], i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">{day}</span>
                        <span className="font-medium text-navy-500 dark:text-white">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Digital Resources */}
              <div className="bg-gradient-to-br from-navy-500 to-[#1a2d4a] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-gold-400" />
                  <h3 className="font-heading text-xl font-bold text-gold-400">Digital Resources</h3>
                </div>
                <div className="space-y-4">
                  {digitalResources.map((resource, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                      <h4 className="font-semibold text-white mb-1">{resource.name}</h4>
                      <p className="text-gray-300 text-sm">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {category === "books" && (
          <>
            <div className="text-center mb-12">
              <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">Collection</span>
              <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
                Books & <span className="text-gold-gradient">Journals</span>
              </h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availableBooks.map((book: any, index: number) => (
                <Card key={index} className="border-gold-100 dark:border-navy-400 card-hover">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3">
                      <BookOpen className="h-5 w-5 text-gold-500" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-500 dark:text-white mb-1">{book.title}</h3>
                    {book.author && <p className="text-gold-600 dark:text-gold-400 text-sm mb-2">{book.author}</p>}
                    {book.description && <p className="text-gray-600 dark:text-gray-400 text-sm">{book.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {category === "services" && (
          <>
            <div className="text-center mb-12">
              <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
              <h2 className="font-heading text-3xl font-bold text-navy-500 dark:text-white mt-3 mb-4">
                Library <span className="text-gold-gradient">Services</span>
              </h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Book Lending", desc: "Borrow up to 5 books for 15 days. Renewals available subject to availability.", features: ["15-day loan period", "Online renewal", "Inter-library loans via DELNET"] },
                { title: "Digital Library Access", desc: "Access EBSCO, Prowess, CMIE, and other databases from campus or remotely.", features: ["E-journal access", "Case study databases", "Remote access for students"] },
                { title: "Reading Room", desc: "Quiet study spaces with comfortable seating, Wi-Fi, and proper lighting.", features: ["Silent study area", "Individual carrels", "Group discussion rooms"] },
                { title: "Research Support", desc: "Professional assistance for research methodology, citations, and literature reviews.", features: ["Research guidance", "Citation support", "Literature search help"] },
              ].map((service, i) => (
                <Card key={i} className="border-gold-100 dark:border-navy-400 card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-navy-500 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />{f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
