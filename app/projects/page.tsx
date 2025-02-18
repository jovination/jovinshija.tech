'use client'

import Work from "@/components/Work";
import ContactPage from "@/components/ContactPage"

function ProjectPage(){
    return (
        <div className="flex flex-col  items-center min-h-screen mx-auto">
        <Work />
        <ContactPage />
        </div>
    )
}
export default ProjectPage;