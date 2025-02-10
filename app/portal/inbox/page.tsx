"use client"

import { useState, useEffect, useCallback } from "react"
import { format } from "date-fns"
import { ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface Message {
  id: string
  name: string
  email: string
  message: string
  date: string
  type: "message" | "email"
}

export default function InboxPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [reply, setReply] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/message", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to fetch messages")
      const data: Message[] = await res.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
      toast({
        title: "Error",
        description: "Failed to fetch messages. Please try again.",
        variant: "destructive",
      })
    }
  }, [])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  const deleteMessage = async (id: string) => {
    if (!id) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/message", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete message");
      }
  
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
  
      if (selectedMessage?.id === id) setSelectedMessage(null);
  
      toast({
        title: "Success",
        description: "Message deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleSendReply = async () => {
    if (!reply.trim() || !selectedMessage) return
    setLoading(true)
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Admin",
          email: "admin@example.com",
          message: reply,
          type: "email",
        }),
      })
      if (!res.ok) throw new Error("Failed to send reply")
      setReply("")
      await fetchMessages()
      toast({
        title: "Success",
        description: "Reply sent successfully.",
      })
    } catch (error) {
      console.error("Error sending reply:", error)
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-6">
      <div className={`${selectedMessage ? "hidden md:block" : ""} md:col-span-5`}>
        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <Card
                key={message.id}
                className={`cursor-pointer border-[#222323] transition hover:bg-[#222323] rounded-2xl ${
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
                    <span className="text-xs text-[#FFFFFE]/60">{format(new Date(message.date), "MMM d, h:mm a")}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-[#FFFFFE]/60 hover:text-[#2B28FF] rounded-full"
                      disabled={loading}
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
            ))
          ) : (
            <p className="text-center text-[#FFFFFE]/60">No messages available</p>
          )}
        </div>
      </div>

      <div className={`${!selectedMessage ? "hidden md:block" : ""} md:col-span-7`}>
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
                  disabled={loading}
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

