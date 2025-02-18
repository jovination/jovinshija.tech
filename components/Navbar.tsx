import React from 'react'
import Link from 'next/link'
import { Home, MessageCircle } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed z-30 w-[309px] h-[54px] navbar m-6 rounded-full p-4 flex items-center">
      <div className="w-full h-auto flex items-center gap-2">
        <Link href="/" className="hover:opacity-80 transition-opacity mr-6">
          <Home size={20} />
        </Link>
        <div className="flex w-[243px] gap-[24px] items-center">
          <Link href="/projects" className="hover:text-gray-700 transition-colors">
            Projects
          </Link>
          <Link href="/pricing" className="hover:text-gray-700 transition-colors">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="w-[94px] h-[46px] rounded-full bg-white text-[--background] 
                       flex items-center justify-center 
                       hover:bg-[--primary] transition-colors
                       hover:text-white"          
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar