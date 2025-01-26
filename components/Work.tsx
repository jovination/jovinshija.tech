import { LuArrowUpRight } from "react-icons/lu";
import ProjectCards from "@/components/ProjectCards"

function Work(){
    return(
        <div className="mt-40">
            <div className="flex flex-col items-center gap-6">
                <h2 className=" text-3xl md:text-5xl font-medium">My Projects</h2>
                <p className="text-[--grey01] text-center font-medium">Check out some of my favorite <br /> & most recent projects.</p>
            </div>
            <div className="mt-10">
              <ProjectCards />
            </div>

        </div>
    )
}
export default Work