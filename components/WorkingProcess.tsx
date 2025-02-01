import Image from "next/image"


function WorkingProcess(){
    return(
        <div className="mt-32 hero w-[380px] md:w-[550px] h-full h-[751px] md:h-[870.2px] rounded-[36px] md:rounded-[46px] p-2 space-y-2">
        <div className="w-full h-[137px] md:h-[168px] bg-[--primary] rounded-[32px] md:rounded-[40px] pl-[26px]  px-[40px] md:py-[32px]  md:px-[46px] flex items-center">  
        <div className="flex items-center gap-6 ">
        <div>
        <p className="text-8xl font-semibold">4</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-md font-semibold text-white text-2xl">Step process</p>
        <p className="md:leading-1 text-sm md:text-base text-white font-medium">
        approach that guarantees smooth collaboration and <br /> exceptional results.
        </p>

        </div>
        </div>
        </div>

        <div className="w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]">
            <div className="w-[202px]">
            <p className="text-right leading-[1.2] text-[--grey01] text-sm md:text-lg font-semibold">We’ll discuss your goals and vision</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Image 
                src="/icon.svg"
                alt="icon"
                width={24}
                height={24}
                />
                <p className="text-[--primary] text-xl font-bold">01</p>
            </div>
            <div className="w-[202px]">
            <p className="  md:text-2xl font-semibold">Booking a call</p>
            </div>
        </div>

        <div className="w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px]  flex justify-center items-start gap-[22px]">
            <div className="w-[202px]">
            <p className=" text-right md:text-2xl font-semibold w-full">Custom design</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Image 
                src="/icon.svg"
                alt="icon"
                width={24}
                height={24}
                />
                <p className="text-[--primary] text-xl font-bold">02</p>
            </div>
            <div className="w-[202px]">
            <p className="text-left leading-[1.2] text-[--grey01] text-sm md:text-lg font-medium">
              I’ll create custom design tailored to your needs                
              </p>

            </div>
        </div>
        <div className="w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]">
            <div className="w-[202px] h-[54px]">
            <p className="text-right leading-[1.2] text-[--grey01] text-sm md:text-lg font-semibold">
            The design comes to life with clean, efficient code               
             </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Image 
                src="/icon.svg"
                alt="icon"
                width={24}
                height={24}
                />
                <p className="text-[--primary] text-xl font-bold">03</p>
            </div>
            <div className="w-[202px]">
            <p className="  md:text-2xl font-semibold">Development</p>
            </div>
        </div>
        <div className="w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px]  flex justify-center items-start gap-[22px]">
            <div className="w-[202px]">
            <p className=" text-right md:text-2xl font-semibold w-full">Launch</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Image 
                src="/icon.svg"
                alt="icon"
                width={24}
                height={24}
                />
                <p className="text-[--primary] text-xl font-bold">04</p>
            </div>
            <div className="w-[202px]">
            <p className="text-left leading-[1.2] text-[--grey01] text-sm md:text-lg font-medium">
            I’ll help you get your website live and ready for the world              </p>

            </div>
        </div>

        </div>
    )
}

export default WorkingProcess;