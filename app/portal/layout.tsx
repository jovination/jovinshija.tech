import type React from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#131312]">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Navigation />
        <main className="mt-8">{children}</main>
      </div>
    </div>
  )
}

