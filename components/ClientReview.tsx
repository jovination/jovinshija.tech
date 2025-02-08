import Image from "next/image"

function ClientReview() {
  return (
    <div className="mt-32">
        <div className="space-y-3">
        <h2 className=" text-3xl md:text-5xl font-medium text-center">Clients Review</h2>
         <p className="text-[--grey01] text-center font-medium">
         Let’s bring your ideas <br /> to life, together
         </p>
        </div>

        <div className="mt-20 flex space-x-4 ">
            <div className="hidden md:flex left-gradient"> 
            </div>
            <div className="w-[360px] h-[750px] rounded-[60px] bg-[--primary]">
            </div>
            <div className="hidden md:flex  right-gradient">     
            </div>

        </div>
    </div>
  );
}

export default ClientReview;