"use client"
import PricingPackages from "@/components/PricingPackages"
import Experience from "@/components/Experience"
import Navbar from "@/components/Navbar";


function PricingPage(){
    return(
        <div className="flex flex-col  items-center min-h-screen mx-auto mb-10">
         <Navbar />   
        <div className="mt-20">
        <PricingPackages />
        <Experience />
        </div>
        </div>
    )
}

export default PricingPage