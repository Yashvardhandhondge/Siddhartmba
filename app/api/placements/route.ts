import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")
    const data = await db.collection("placements").findOne({ section: "placements" })
    return NextResponse.json({ data: data || null })
  } catch (error) {
    console.error("Error fetching placements:", error)
    return NextResponse.json({ error: "Failed to fetch placements" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("fashion_institute")

    await db.collection("placements").updateOne(
      { section: "placements" },
      {
        $set: {
          section: "placements",
          stats: body.stats,
          recruiters: body.recruiters,
          testimonials: body.testimonials,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving placements:", error)
    return NextResponse.json({ error: "Failed to save placements" }, { status: 500 })
  }
}
