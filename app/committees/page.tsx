import { CommitteeTabs } from "@/components/committees/committee-tabs"
import clientPromise from "@/lib/mongodb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Committees",
  description: "Institute committees at Siddharth Institute of Management Science — Grievance, Anti-Ragging, Anti-Discrimination, and more.",
}

async function getCommittees() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")
    const committees = await db.collection("committees").find({}).toArray()
    return committees
  } catch (error) {
    console.error("Error fetching committees:", error)
    return []
  }
}

export default async function CommitteesPage({ searchParams }: { searchParams: { section?: string } }) {
  const committees = await getCommittees()

  const defaultCommittees = [
    { name: "Placement Cell", members: [] },
    { name: "Grievance Committee", members: [] },
    { name: "Anti-Ragging Committee", members: [] },
    { name: "Anti-Discrimination Cell", members: [] },
    { name: "Vishakha Committee", members: [] },
    { name: "Development Committee", members: [] },
    { name: "Managing Committee", members: [] },
  ]

  const allCommittees = committees.length > 0 ? committees : defaultCommittees
  const section = searchParams.section || "antiragging"

  return (
    <>
      {/* Hero */}
      <div className="relative w-full py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-[#0f2038] to-navy-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center px-4">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Governance</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Committees</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <CommitteeTabs committees={allCommittees} section={section} />
      </main>
    </>
  )
}
