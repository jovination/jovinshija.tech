"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Workwith() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = "Happy to work with you".split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.section
      ref={ref} 
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className="min-h-[150px] flex items-center justify-center text-[#A1A1A0] p-8"
    >
      <div className="flex flex-wrap justify-center gap-x-2 text-md md:text-xl font-medium">
        {words.map((word, idx) => (
          <motion.span variants={child} key={idx} className="opacity-0">
            {word}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}

