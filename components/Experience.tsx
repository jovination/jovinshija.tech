import { FaPlus } from "react-icons/fa";
import Image from "next/image"

function Experience(){

    return(
    <div className="flex flex-col space-y-1"> 
    <div className="mt-16 w-[370px] h-[135px]  md:w-[550px] md:h-[172] border border-[#404141] rounded-[30px]  md:rounded-[36px]  px-[48px] py-[40px] md:px-[60px] md:py-[50px] flex items-center gap-[40px]"> 
     <div>
       <p className="text-7xl font-semibold relative inline-block">
     3
     <FaPlus className="text-xl text-[--grey01] absolute top-0 left-14 -translate-x-1/2" />
     </p>
    </div>
    <div className="h-full flex flex-col justify-start">
       <p className="md:leading-1 text-sm md:text-base text-white font-medium">
       Years of experience
      </p>
      <p className="md:leading-1 text-sm md:text-base text-white font-medium">
        in Software Development
      </p>
       </div>
        </div>
        <div className="flex w-[370px] md:w-[550px] items-center justify-between" >
        <div className="w-[183px] md:w-[273px] h-[183px] md:h-[273px]  rounded-[30px] md:rounded-[36px] relative overflow-hidden">
          <Image
            src="/web.png"
            alt="project image"
            fill
            className="absolute inset-0 z-0 object-cover"
          />

          </div>
          <div
            className="w-[183px] md:w-[273px] h-[183px] md:h-[273px] bg-[--primary] rounded-[30px] md:rounded-[36px] p-[32px] md:p-[40px] flex flex-col justify-between "
          >
              <Image
              className="hidden md:flex"
              src="./SVG.svg"
              width={190}
              height={40}
               />
            <div>
              <div className="flex items-end">
             <p className="text-5xl md:text-7xl font-semibold">95</p>
             <p className="texl-2xl md:text-3xl font-semibold">%</p>

             </div>
             <p className="md:leading-1 text-sm md:text-base text-white font-medium">
             Client satisfaction rate

built on trust and results.        
</p>
            </div>

          </div>
        
        </div>
        </div>
    )
}
export default Experience