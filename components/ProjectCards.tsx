import { projects, type Project } from "@/data/data"
import { LuArrowUpRight } from "react-icons/lu"
import Image from "next/image"

function ProjectCards() {
  return (
    <div className="flex flex-col gap-4 ">
      {projects.map((project: Project) => (
        <div
          key={project.id}
          className="w-[370px] h-[280px] md:w-[550px] md:h-[400px] rounded-[42px] p-2 flex items-end relative"
        >
          {/* Background Image */}
          <Image
            src={project.backgroundImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="absolute inset-0 z-0 object-cover rounded-[42px]"
          />

          {/* Card Content */}
          <a
            className="w-full h-[70px] rounded-[50px] bg-[#121313] flex items-center p-2 justify-between relative z-10"
            href={project.link}
          >
            <div className="flex items-center gap-4">
              <div className="w-[54px] h-[54px] bg-[--primary] rounded-full flex items-center justify-center text-xs font-bold">
                {project.logoText}
              </div>
              <div>
                <p className="text-md text-[#FEFEFF] font-semibold">{project.title}</p>
                <p className="text-sm text-[--grey01] font-medium">{project.description}</p>
              </div>
            </div>
            <div className="w-[54px] h-[54px] bg-[#232223] rounded-full flex items-center justify-center">
              <LuArrowUpRight className="text-white w-[20px] h-[20px]" />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards

