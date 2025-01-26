import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import AvailabilityIndicator from "@/components/AvailabilityIndicator"
import  SocialLinks from "@/components/SocialLinks"
import  StarRating from "@/components/StarRating" 
import  GetStartedButton from "@/components/GetStartedButton" 
import { LuArrowUpRight } from "react-icons/lu";
import { SlCursor } from "react-icons/sl";


function Hero() {
    return(
        <div className="mt-24">
        <div className="w-[370px] h-[730.28px] md:w-[550px] md:h-[881.59px] hero rounded-[36px] md:rounded-[46px] flex flex-col gap-[10px] items-center justify-center ">
            <div className="w-[358px] h-[623.11px] md:w-[532px] md:h-[778.39px] wrapper-hero rounded-[30px] md:rounded-[36px] py-[20px] px-[30px] md:py-[30px] md:px-[50px] gap-[22px] md:gap-[45px]">
        <div className="flex  justify-between ">
            <div className=" w-[92.67px] md:w-[137.33px] h-[4px]  rounded-full bg-[--green]"></div>
            <div className="w-[92.67px] md:w-[137.33px]  h-[4px] rounded-full  bg-[--green]"></div>
            <div className="w-[92.67px] md:w-[137.33px]  h-[4px] rounded-full  bg-[--grey]"></div>
                  
        </div>
                <div className="w-full gap-[34px] h-[126.11px] md:h-[84.61px] flex flex-col md:flex-row-reverse md:justify-between">
                     <div className="flex flex-row items-center md:items-start gap-2">
                     <div className="md:mt-[6px]">
                      <AvailabilityIndicator  />
                      </div>
                      <div className="flex items-center md:items-start md:flex-col gap-[2px] md:gap-[1px]">
                        <p className="text-sm">Available </p>
                        <p className="text-sm text-[--grey01] font-semibold ">as Freelancer</p>
                      </div>
                      </div>

                    <div className="flex  gap-5">
                        <div className="w-[60px] h-[60px] bg-white rounded-full">
                        </div>    
                        <div>
                        <div className="flex flex-col space-y-[4px] ">
                               <div className="text-xl font-bold">Jovin Shija</div> 
                               <div className="text-sm text-[--grey01] font-semibold ">Full-stack Developer</div> 
                        </div>
                        <div className="mt-[12px]">
                       <SocialLinks />
                        </div>
                    </div>    
                    </div>
                    
                </div>

                <div>
                <h1 className=" leading-1 text-5xl md:text-7xl font-medium md:font-semibold text-white ">
                I develop experiences that work for you.
                </h1> 
                </div>
                <div className="flex flex-col gap-[22px]">
                 <div className="w-[150px] h-[24px] rounded-full px-[10px] py-[6px] bg-[--grey02] flex items-center justify-center gap-[10px]" >
                    <StarRating />
                    <p className="text-[11px]" >10+customers</p>
                 </div> 
                 <p className="text-md text-[--grey01]">
                 From concept to code, I deliver <br /> full-stack web excellence.
                </p>  
                </div>
                <div className="flex items-center gap-[15px] md:gap-[30px]">
                <GetStartedButton 
                    href="#" 
                    className="custom-class"
                    iconClassName="custom-icon-class"
                    >
                        Get started
                    </GetStartedButton>
                    <div className=" hidden bg-[--grey03]  h-[54px] rounded-full w-fit md:flex  md:px-[30px] py-[6px]  items-center justify-center">
                        <a 
                         className="text-md font-medium"
                         href="">
                            My work
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col gap-[6px] md:flex-row pt-[20px] ">
                <div className="flex items-center gap-[8px] ">
                <SlCursor className="w-[12px] h-[12px] text-[--grey01] transform scale-x-[-1]" />
                <p className="text-xs text-[--grey01] font-semibold">Located in <span className="text-white">Tanzania </span>, I am available to work remotely</p>
                </div>
                <a 
                className="flex items-center gap-[6px] md:ml-10"
                href="">
                    <span className="text-xs text-white font-semibold"> My Agency </span>
                    <LuArrowUpRight className="text-[--primary] w-[20px] h-[20px] mt-[1.5px]" />
                </a>
 </div>
        </div>  
        </div> 
       
    )
}
export default Hero