import { type NextRequest, NextResponse } from "next/server";

const PANTRY_ID = process.env.PANTRY_ID;
const BUCKET_NAME = process.env.BUCKET_NAME;
const BASE_URL = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BUCKET_NAME}`;

export const runtime = "edge";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export async function GET() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to retrieve messages");
    const data = await response.json();
    const messages: Message[] = data.messages || [];
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Retrieval failed" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const res = await fetch(BASE_URL);
    let existingMessages: Message[] = [];
    if (res.ok) {
      const data = await res.json();
      existingMessages = data.messages || [];
    }
    const newMessage: Message = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    };
    existingMessages.push(newMessage);
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: existingMessages }),
    });
    return NextResponse.json(newMessage, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Invalid delete request" }, { status: 400 });
    }
    const res = await fetch(BASE_URL);
    let messages: Message[] = [];
    if (res.ok) {
      const data = await res.json();
      messages = data.messages || [];
    }
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    if (messages.length === updatedMessages.length) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Deletion failed" }, { status: 500 });
  }
}
