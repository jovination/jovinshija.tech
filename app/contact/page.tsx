"use client"
import ContactPage from "@/components/ContactPage"
import SplashCursor from "@/components/SplashCursor"

function ContactingPage(){
    return(
        <div className="flex flex-col  items-center min-h-screen mx-auto">
          {/* <SplashCursor /> */}
          <ContactPage /> 
        </div>
    )
}

export default ContactingPage