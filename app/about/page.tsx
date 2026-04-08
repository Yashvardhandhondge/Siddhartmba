import Image from "next/image"
import { AboutTabs } from "@/components/about/about-tabs"
import clientPromise from "@/lib/mongodb"
import { WithId } from 'mongodb'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Siddharth Institute of Management Science (SIMS), our vision, mission, leadership, and commitment to excellence in management education.",
}

interface AboutContent extends WithId<Document> {
  institute: string
  society: string
  vision?: string
  mission?: string
}

interface Leader extends WithId<Document> {
  name: string
  role: string
  position: string
  message?: string
  imageId?: string
  createdAt: Date
  updatedAt: Date
}

async function getAboutContent() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const aboutContent = await db.collection("content").findOne({ section: "about" }) as AboutContent
    const directors = await db.collection("directors").find({}).sort({ order: 1 }).toArray()
    const leadership = await db.collection("leadership").find({}).toArray() as Leader[]

    return {
      about: aboutContent || { institute: "", society: "" },
      directors: directors || [],
      leadership: leadership || [],
    }
  } catch (error) {
    console.error("Error fetching about content:", error)
    return {
      about: { institute: "", society: "" },
      directors: [],
      leadership: [],
    }
  }
}

function PageHero({ title }: { title: string }) {
  return (
    <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <div className="section-divider mx-auto" />
      </div>
    </div>
  )
}

export default async function AboutPage({ searchParams }: { searchParams: { section?: string } }) {
  const { about, directors, leadership } = await getAboutContent()

  const section =
    searchParams.section === "society"
      ? "society"
      : searchParams.section === "vision"
      ? "vision"
      : searchParams.section === "directors"
      ? "directors"
      : searchParams.section === "leadership"
      ? "leadership"
      : "institute"

  const titles: Record<string, string> = {
    institute: "About SIMS",
    society: "About Our Society",
    vision: "Vision & Mission",
    directors: "Board of Directors",
    leadership: "Messages from Leadership",
  }

  return (
    <div>
      <PageHero title={titles[section] || "About Us"} />
      <div className="container mx-auto px-4 py-12">
        <AboutTabs about={about} directors={directors} leadership={leadership} section={section} />
      </div>
    </div>
  )
}
