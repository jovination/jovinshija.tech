"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface Message {
  id: number
  name: string
  email: string
  message: string
  date: Date
  type: "message" | "email"
}

export default function InboxPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      message: "Hi, I'm interested in your services. Can we schedule a call?",
      date: new Date(),
      type: "email",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      message: "Great work on the last project! I have another opportunity to discuss.",
      date: new Date(),
      type: "message",
    },
  ])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [reply, setReply] = useState("")

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id))
    if (selectedMessage?.id === id) {
      setSelectedMessage(null)
    }
  }

  const handleSendReply = () => {
    if (reply.trim()) {
      // Here you would typically send the reply to your backend
      console.log("Sending reply:", reply)
      setReply("")
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-6">
      {/* Message List - Full width on mobile, 5 columns on desktop */}
      <div className={`${selectedMessage ? 'hidden md:block' : ''} md:col-span-5`}>
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`cursor-pointer border-[#222323] transition-colors hover:bg-[#222323] rounded-2xl ${
                selectedMessage?.id === message.id ? "bg-[#222323]" : "bg-[#131312]"
              }`}
              onClick={() => setSelectedMessage(message)}
            >
              <CardHeader className="flex flex-row items-start justify-between p-4">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium text-[#FFFFFE]">{message.name}</CardTitle>
                  <CardDescription className="text-xs text-[#FFFFFE]/60">{message.email}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#FFFFFE]/60">{format(message.date, "MMM d, h:mm a")}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-[#FFFFFE]/60 hover:text-[#2B28FF] rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteMessage(message.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Message Detail - Full width on mobile, 7 columns on desktop */}
      <div className={`${!selectedMessage ? 'hidden md:block' : ''} md:col-span-7`}>
        {selectedMessage ? (
          <Card className="border-[#222323] bg-[#222323] rounded-2xl">
            <CardHeader className="border-b border-[#131312] p-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-8 w-8 text-[#FFFFFE]/60"
                  onClick={() => setSelectedMessage(null)}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <CardTitle className="text-lg font-medium text-[#FFFFFE]">{selectedMessage.name}</CardTitle>
                  <CardDescription className="text-sm text-[#FFFFFE]/60">{selectedMessage.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-8 whitespace-pre-wrap text-[#FFFFFE]">{selectedMessage.message}</div>
              <div className="space-y-4">
                <Textarea
                  placeholder="Type your reply..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="min-h-[100px] bg-[#131312] border-[#131312] text-[#FFFFFE] placeholder:text-[#FFFFFE]/60 rounded-xl"
                />
                <Button
                  className="w-full md:w-auto bg-[#2B28FF] hover:bg-[#2B28FF]/90 text-[#FFFFFE] rounded-xl"
                  onClick={handleSendReply}
                >
                  Send Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-[#222323] bg-[#222323] rounded-2xl">
            <CardContent className="flex h-[400px] items-center justify-center text-[#FFFFFE]/60">
              Select a message to view
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}