"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function PortalPage() {
  const router = useRouter()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/portal/inbox")
      }
    })

    return () => unsubscribe()
  }, [router])

  return null
}

