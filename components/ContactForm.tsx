import { Button } from "@/components/ui/button"
import { MdEmail, MdPerson, MdMessage } from "react-icons/md"


function ContactForm(){
    return(
        <div className="p-2 w-[370px] md:w-[550px] h-[780px] hero rounded-[36px] md:rounded-[46px]">
            <div className="h-[700px] wrapper-hero rounded-[30px] md:rounded-[40px] flex flex-col gap-[28px] md:gap-[28px] px-[20px] py-[40px]  md:p-[60px]">
            <div className="flex flex-col items-center gap-6">
                <h2 className=" text-3xl md:text-5xl font-medium">Contact</h2>
                <p className="text-[--grey01] text-center font-medium">
                Fill out the form, or reach out directly. <br />I’ll respond within 24 hours.
                </p>
            </div>                
                <form className="flex flex-col gap-4">
                <div className="relative">
                    <input
                    className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
                    type="text"
                    placeholder="Name"
                    />
                    <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="relative">
                    <input
                    className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
                    type="email"
                    placeholder="Email"
                    />
                    <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                
                <div className="relative">
                    <input
                    className="w-full h-[58px] py-2 pl-12 pr-6 bg-[#222323] rounded-full focus:outline-none focus:ring-1 focus:ring-[#2A2A2B]"
                    type="text"
                    placeholder="Enter Your Message"
                    />
                    <MdMessage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <Button className="bg-[--primary] h-[58px] rounded-full text-base hover:bg-[--primary]/30">Send message</Button>
                </form>
                <div className="flex flex-col gap-3">
                    <p className=" text-sm font-semibold text-center text-[#AEAEAE]">Let’s chat!</p>
                    <a className="text-center text-lg font-semibold" href="#">+255 (747) 510-151</a>
                    <a className="text-center text-2xl md:text-4xl font-bold" href="#">hello@jovinshija.tech</a>
                    <p className="mt-2 text-sm font-semibold text-center text-[#AEAEAE]">© Copyright 2025. All rights Reserved.</p>
                </div>

            </div>
        </div>

    )
}
export default ContactForm;