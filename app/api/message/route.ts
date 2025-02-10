import { type NextRequest, NextResponse } from "next/server"

const PANTRY_ID = process.env.PANTRY_ID
const BUCKET_NAME = process.env.BUCKET_NAME
const BASE_URL = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BUCKET_NAME}`

interface Message {
  id: string
  name: string
  email: string
  message: string
  date: string
  type: "message" | "email"
}

export async function GET() {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error("Failed to retrieve messages")
    const data = await response.json()
    const messages: Message[] = data.messages || []
    return NextResponse.json(messages, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Retrieval failed" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, type } = await req.json()
    if (!name || !email || !message || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const res = await fetch(BASE_URL)
    let existingMessages: Message[] = []
    if (res.ok) {
      const data = await res.json()
      existingMessages = data.messages || []
    }
    const newMessage: Message = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      date: new Date().toISOString(),
      type,
    }
    existingMessages.push(newMessage)
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: existingMessages }),
    })
    return NextResponse.json(newMessage, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    console.log("Deleting ID:", id); // Debugging

    if (!id) {
      return NextResponse.json({ error: "Invalid delete request" }, { status: 400 });
    }

    const res = await fetch(BASE_URL);
    let messages: Message[] = [];

    if (res.ok) {
      const data = await res.json();
      messages = data.messages || [];
    }

    const existingMessage = messages.find((msg) => msg.id === id);
    if (!existingMessage) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    const updatedMessages = messages.filter((msg) => msg.id !== id);

    const putResponse = await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const putResult = await putResponse.text(); // Debugging
    console.log("PUT response:", putResult);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Deletion failed:", error);
    return NextResponse.json({ error: "Deletion failed" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const res = await fetch(BASE_URL)
    if (!res.ok) throw new Error("Failed to retrieve messages")
    const data = await res.json()
    const messages: Message[] = data.messages || []

    const analytics = messages.reduce(
      (acc, message) => {
        const date = new Date(message.date)
        const day = date.toLocaleString("en-US", { weekday: "short" })
        if (!acc[day]) {
          acc[day] = { messages: 0, emails: 0 }
        }
        acc[day][message.type === "email" ? "emails" : "messages"]++
        return acc
      },
      {} as Record<string, { messages: number; emails: number }>,
    )

    return NextResponse.json(analytics, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Analytics retrieval failed" }, { status: 500 })
  }
}

