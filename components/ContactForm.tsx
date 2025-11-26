"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPerson, MdMessage } from "react-icons/md"
import { Loader2 } from "lucide-react"

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaToken: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  // Load reCAPTCHA script
  useEffect(() => {
    // Skip in development or if window is not defined (SSR)
    if (process.env.NODE_ENV === 'development' || typeof window === 'undefined') {
      // In development, bypass reCAPTCHA verification
      setIsRecaptchaReady(true)
      return
    }

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha) {
      setIsRecaptchaReady(true)
      return
    }

    // Add reCAPTCHA script
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) {
      console.error('reCAPTCHA site key is not configured')
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setIsRecaptchaReady(true)
      })
    }
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script')
      // In case of error, still allow form submission in development
      if (process.env.NODE_ENV === 'development') {
        setIsRecaptchaReady(true)
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isRecaptchaReady) {
      setSubmitMessage("Security verification is loading. Please try again in a moment.")
      return
    }

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      let recaptchaToken = ''
      
      // Skip reCAPTCHA in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Skipping reCAPTCHA in development mode')
        recaptchaToken = 'dev-skip-recaptcha'
      } else {
        // Execute reCAPTCHA in production
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
        if (!siteKey) {
          throw new Error('reCAPTCHA site key is not configured')
        }
        recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'submit' })
      }
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "", recaptchaToken: "" })
      } else {
        setSubmitMessage(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-1 md:p-2 w-[370px] md:w-[550px] h-[780px] md:h-[850px] hero rounded-[36px] md:rounded-[46px]">
      <div className="h-auto wrapper-hero rounded-[30px] md:rounded-[40px] flex flex-col gap-[28px] md:gap-[28px] px-[20px] py-[40px]  md:p-[60px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-medium">Contact</h2>
          <p className="text-[--grey01] text-center font-medium">
            Fill out the form, or reach out directly. <br />
            I'll respond within 24 hours.
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="relative">
            <input
              className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <textarea
              className="w-full h-[116px] py-5 pl-12 pr-6 bg-[#222323] rounded-[29px] focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <MdMessage className="absolute left-4 top-6 text-gray-400" size={20} />
          </div>

          <Button
            className="bg-[--primary] h-[58px] rounded-full text-base hover:bg-[--primary]/30 flex items-center justify-center"
            type="submit"
            disabled={isSubmitting || (!isRecaptchaReady && process.env.NODE_ENV !== 'development')}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </form>
        {submitMessage && <p className="text-center text-sm font-semibold text-[#AEAEAE]">{submitMessage}</p>}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-center text-[#AEAEAE]">Let's chat!</p>
          <a className="text-center text-lg font-semibold" href="#">
            +255 (747) 510-151
          </a>
          <a className="text-center text-2xl md:text-4xl font-bold" href="mailto:booking@jovinshija.tech">
            booking@jovinshija.tech
          </a>
          <div className="mt-2 text-center">
            <div className="flex justify-center mb-2">
              <div className="grecaptcha-badge" data-style="inline"></div>
            </div>
            <p className="text-sm font-semibold text-[#AEAEAE]">
              © Copyright 2025. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm