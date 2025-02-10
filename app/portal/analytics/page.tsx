"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { date: "Mon", messages: 4, emails: 3 },
  { date: "Tue", messages: 7, emails: 5 },
  { date: "Wed", messages: 5, emails: 4 },
  { date: "Thu", messages: 6, emails: 6 },
  { date: "Fri", messages: 8, emails: 7 },
  { date: "Sat", messages: 3, emails: 2 },
  { date: "Sun", messages: 2, emails: 1 },
];

export default function AnalyticsPage() {
  const totalMessages = data.reduce((acc, day) => acc + day.messages, 0);
  const totalEmails = data.reduce((acc, day) => acc + day.emails, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {[{ title: "Total Messages", value: totalMessages }, { title: "Total Emails", value: totalEmails }].map((item, index) => (
          <Card key={index} className="border-[#222323] bg-[#222323] rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFE]">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#FFFFFE]">{item.value}</div>
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
                <Bar dataKey="messages" fill="#2B28FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="emails" fill="#444444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
