import { AiOutlinePlus } from "react-icons/ai";

function Experience(){

    return(
        <div className="mt-24 w-[370px] h-[135px]  md:w-[550px] md:h-[172] border border-[#404141] rounded-[30px]  md:rounded-[36px]  px-[48px] py-[40px] md:px-[60px] md:py-[50px] flex items-center gap-[40px]"> 
       <div>
       <p className="text-7xl font-semibold relative inline-block">
     3
  <AiOutlinePlus className="text-3xl text-[--grey01] absolute top-0 left-13 -translate-x-1/2" />
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
    )
}
export default Experience