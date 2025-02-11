"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { LoginPopup } from "@/components/LoginPopup"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter, usePathname } from "next/navigation"

interface PortalLayoutProps {
  children: ReactNode
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setShowLoginPopup(false)
      } else {
        setIsLoggedIn(false)
        setShowLoginPopup(true)
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    // Show login popup whenever the route changes within the portal
    setShowLoginPopup(!isLoggedIn)
  }, [isLoggedIn])

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowLoginPopup(false)
  }

  const handleClosePopup = () => {
    setShowLoginPopup(false)
    router.push("/") // Redirect to home page
  }

  return (
    <div className="min-h-screen bg-[#131312]">
      <LoginPopup isOpen={showLoginPopup} onClose={handleClosePopup} onLogin={handleLogin} />
      {isLoggedIn && (
        <>
          <Header />
          <div className="mx-auto max-w-7xl px-4 py-8">
            <Navigation />
            <main className="mt-8" role="main" aria-label="Portal Content">
              {children}
            </main>
          </div>
        </>
      )}
    </div>
  )
}

