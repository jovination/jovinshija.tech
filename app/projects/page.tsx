'use client'

import Work from "@/components/Work";
import ContactPage from "@/components/ContactPage"
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/SplashCursor";

function ProjectPage(){
    return (
        <div className="flex flex-col  items-center min-h-screen mx-auto">
        {/* <SplashCursor /> */}
        <Navbar />
        <Work />
        <ContactPage />
        </div>
    )
}
export default ProjectPage;