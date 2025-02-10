import Image from "next/image"
import  SocialLinks from "@/components/SocialLinks"
import profile from "@/public/profile.png"
function ProfileComponent(){
    return(
        <div className="flex flex-col items-center gap-5">
        <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
            <Image
             src={profile}
             alt="profile"
            width={95}
            height={95}
            />
            </div>    
            <div>
            <div className="flex flex-col space-y-[4px] ">
                <div className="text-xl text-center font-bold">Jovin Shija</div> 
                <div className="text-sm text-center text-[--grey01] font-semibold ">Full-stack Developer</div> 
                </div>
                <div className="mt-[12px] flex justify-center">
                <SocialLinks />
              </div>
             </div>    
            </div>
    )
}
export default  ProfileComponent