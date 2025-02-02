import TechStack from "@/components/TechStack"
function SkillSets(){
    return(
        <div className="mt-40 space-y-16 mb-10">
   <div className="flex flex-col items-center gap-6">
                <h2 className=" text-3xl md:text-5xl font-medium">My Skills</h2>
                <p className="text-[--grey01] text-center font-medium">
                Here are my tech stack skills, <br /> which drive better results
            </p>
            </div>
            <TechStack />
        </div>
    )
}

export default SkillSets;