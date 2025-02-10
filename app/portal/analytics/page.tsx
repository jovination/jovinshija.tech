"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Loader2 } from "lucide-react"

interface AnalyticsData {
  [key: string]: { messages: number; emails: number }
}

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch("/api/message", { method: "PATCH" })
        if (!res.ok) throw new Error("Failed to fetch analytics")
        const data: AnalyticsData = await res.json()
        setAnalyticsData(data)
      } catch (error) {
        console.error("Error fetching analytics:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#2B28FF]" />
      </div>
    )
  }

  if (!analyticsData) {
    return <div className="text-center text-[#FFFFFE]/60">Failed to load analytics data.</div>
  }

  const data = Object.entries(analyticsData).map(([date, counts]) => ({
    date,
    messages: counts.messages,
    emails: counts.emails,
  }))

  const totalMessages = data.reduce((acc, day) => acc + day.messages, 0)
  const totalEmails = data.reduce((acc, day) => acc + day.emails, 0)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Total Messages", value: totalMessages, color: "#2B28FF" },
          { title: "Total Emails", value: totalEmails, color: "#444444" },
        ].map((item, index) => (
          <Card key={index} className="border-[#222323] bg-[#222323] rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFE]">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#FFFFFE]" style={{ color: item.color }}>
                {item.value}
              </div>
              <p className="text-xs text-[#FFFFFE]/60">{item.title} received this week</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-[#222323] bg-[#222323] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-[#FFFFFE]">Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="date" stroke="#FFFFFE" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#FFFFFE" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "#222323", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#FFFFFE" }}
                  itemStyle={{ color: "#FFFFFE" }}
                />
                <Bar dataKey="messages" name="Messages" fill="#2B28FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="emails" name="Emails" fill="#444444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

