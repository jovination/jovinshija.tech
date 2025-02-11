"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MdEmail, MdLock } from "react-icons/md"
import { Loader2, X } from "lucide-react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import type React from "react"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTqeH7x6XDkmNatMXQMgVU18a6ISy40Vo",
    authDomain: "jovinshijatech.firebaseapp.com",
    projectId: "jovinshijatech",
    storageBucket: "jovinshijatech.firebasestorage.app",
    messagingSenderId: "383600900154",
    appId: "1:383600900154:web:d115801dcff88ad5d61d03",
    measurementId: "G-7HBHM8EX6D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

interface LoginPopupProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export function LoginPopup({ isOpen, onClose, onLogin }: LoginPopupProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      onLogin()
    } catch (error) {
      setError("Invalid email or password")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="p-1 md:p-2 w-[370px] md:w-[550px] h-[410px] md:h-[500px] hero rounded-[36px] md:rounded-[46px]">
        <div className="wrapper-hero rounded-[30px] md:rounded-[40px] flex flex-col gap-[28px] md:gap-[28px] px-[20px] py-[40px] md:p-[60px] bg-[#131312] border border-[#222323]">
          <div className="flex justify-between items-center">
            <h2 className="w-full text-3xl text-center md:text-4xl font-bold text-[#FFFFFE]">My Portal</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-[#FFFFFE] hover:bg-[#222323] rounded-full">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-[--grey01] text-center font-medium">Log in to access your portal</p>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="relative">
              <input
                className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B] text-[#FFFFFE]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <input
                className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B] text-[#FFFFFE]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <MdLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button
              type="submit"
              className="bg-[--primary] h-[58px] rounded-full text-base hover:bg-[--primary]/30 flex items-center justify-center text-[#FFFFFE]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

