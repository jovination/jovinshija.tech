import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

function Hero() {
    return(
        <div className="mt-16 md:mt-20">
        <div className="w-[370px] h-[730.28px] md:w-[550px] md:h-[881.59px] hero rounded-[36px] md:rounded-[46px] flex items-center justify-center ">
            <div className="w-[358px] h-[623.11px] md:w-[532px] md:h-[778.39px] wrapper-hero rounded-[30px] md:rounded-[36px] py-[20px] px-[30px] md:py-[30px] md:px-[50px] gap-[28px] md:gap-[50px]">
        <div className="flex  justify-between ">
            <div className=" w-[92.67px] md:w-[137.33px] h-[4px]  rounded-full bg-[--green]"></div>
            <div className="w-[92.67px] md:w-[137.33px]  h-[4px] rounded-full  bg-[--green]"></div>
            <div className="w-[92.67px] md:w-[137.33px]  h-[4px] rounded-full  bg-[--grey]"></div>
                  
        </div>
                <div className="w-full h-[126.11px] md:h-[84.61px]">
                    <div className="flex  gap-5">
                        <div className="w-[60px] h-[60px] bg-white rounded-full">
                        </div>    
                        <div>
                        <div className="flex flex-col space-y-[4px] ">
                               <div className="text-xl font-bold">Jovin Shija</div> 
                               <div className="text-sm text-[--grey01] font-semibold ">Full-stack Developer</div> 
                        </div>
                        <div className="flex space-x-3 mt-[12px]">
                        <RiTwitterXLine className="w-[21px] h-[21px] text-[--icons] hover:text-white" />
                        <RiInstagramLine className="w-[21px] h-[21px] text-[--icons] hover:text-white" />
                        <RiLinkedinBoxFill  className="w-[21.5px] h-[21.5px] text-[--icons] hover:text-white" />
                        <RiGithubFill className="w-[21.5px] h-[21.5px] text-[--icons] hover:text-white" />




                        </div>
                    </div>    
                    </div>
                    <div>
                      
                    </div>
                </div>

                <div>
                <h1 className=" leading-1 text-5xl md:text-7xl font-medium md:font-semibold text-white ">
                I develop experiences that work for you.

                </h1> 
                </div>
                <div></div>
                <div></div>
            </div>
        </div>  
        </div>  
    )
}
export default Hero