import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject, and message are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("fashion_institute")

    await db.collection("contact_messages").insertOne({
      name,
      email,
      phone: phone || "",
      subject,
      message,
      read: false,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, message: "Message saved successfully" })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("fashion_institute")

    const messages = await db
      .collection("contact_messages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ data: messages })
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
