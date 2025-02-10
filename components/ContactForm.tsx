"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPerson, MdMessage } from "react-icons/md"
import { Loader2 } from "lucide-react"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
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
    <div className="p-2 w-[370px] md:w-[550px] h-[780px] hero rounded-[36px] md:rounded-[46px]">
      <div className="h-[700px] wrapper-hero rounded-[30px] md:rounded-[40px] flex flex-col gap-[28px] md:gap-[28px] px-[20px] py-[40px]  md:p-[60px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className=" text-3xl md:text-5xl font-medium">Contact</h2>
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
            <input
              className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
              type="text"
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <MdMessage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <Button
            className="bg-[--primary] h-[58px] rounded-full text-base hover:bg-[--primary]/30 flex items-center justify-center"
            type="submit"
            disabled={isSubmitting}
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
          <p className=" text-sm font-semibold text-center text-[#AEAEAE]">Let's chat!</p>
          <a className="text-center text-lg font-semibold" href="#">
            +255 (747) 510-151
          </a>
          <a className="text-center text-2xl md:text-4xl font-bold" href="#">
            hello@jovinshija.tech
          </a>
          <p className="mt-2 text-sm font-semibold text-center text-[#AEAEAE]">
            © Copyright 2025. All rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

