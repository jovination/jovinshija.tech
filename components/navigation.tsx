"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/portal/inbox", label: "Inbox" },
    { href: "/portal/analytics", label: "Analytics" },
  ]

  return (
    <nav className="flex gap-2 rounded-2xl bg-[#222323] p-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
            pathname === link.href
              ? "bg-[#2B28FF] text-[#FFFFFE]"
              : "text-[#FFFFFE] hover:bg-[#131312] hover:text-[#2B28FF]",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

