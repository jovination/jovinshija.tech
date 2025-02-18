"use client"
import PricingPackages from "@/components/PricingPackages"
import Experience from "@/components/Experience"

function PricingPage(){
    return(
        <div className="flex flex-col  items-center min-h-screen mx-auto mb-10">
        <PricingPackages />
        <Experience />
        </div>
    )
}

export default PricingPage