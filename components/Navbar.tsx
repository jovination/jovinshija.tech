
"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

function Navbar() {
  const controls = useAnimation()
  
  useEffect(() => {
    // Trigger animation after component mounts
    const animateNavbar = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1]
        }
      })
    }
    
    animateNavbar()
  }, [controls])

  return (
    <motion.nav 
      className="fixed z-30 w-[318px] h-[56px] navbar m-6 rounded-full p-5 flex items-center justify-center"
      initial={{ y: -80, opacity: 0 }}
      animate={controls}
    >
      <div className="w-full  flex items-center gap-2">
        <Link href="/" className="hover:opacity-80 transition-opacity mr-6">
          <Home size={20} />
        </Link>
        <div className="flex w-[240px] gap-[24px] items-center">
          <Link href="/projects" className="hover:text-gray-700 transition-colors">
            Projects
          </Link>
          <Link href="/pricing" className="hover:text-gray-700 transition-colors">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="w-[98px] h-[46px] rounded-full bg-white text-[--background] 
                       flex items-center justify-center 
                       hover:bg-[--primary] transition-colors
                       hover:text-white"          
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar