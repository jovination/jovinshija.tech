"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import  GetStartedButton from "@/components/GetStartedButton" 
import { ArrowRight, Check } from "lucide-react"
import { MdOutlineTimer } from "react-icons/md";



const plans = [
    {
      id: "01",
      name: "Basic",
      description: "Static website for minimal content updates",
      price: "Tsh 700,000",
      duration: "2 weeks",
      features: [
        "3-5 pages showcasing your business",
        "Home page",
        "About page",
        "Services page",
        "Contact form",
        "Ideal for businesses with minimal content updates",
      ],
    },
    {
      id: "02",
      name: "Interactive",
      description: "Dynamic website with CMS capabilities",
      price: "Tsh 1,500,000",
      duration: "4 weeks",
      features: [
        "Up to 10 pages",
        "Content update capabilities",
        "User-friendly CMS",
        "Forms integration",
        "Basic user management",
        "Suitable for businesses needing regular content updates",
      ],
    },
    {
      id: "03",
      name: "Advanced",
      description: "Custom website with advanced functionalities",
      price: "Tsh 5,000,000",
      duration: "8-12 weeks",
      features: [
        "Custom design",
        "E-commerce integration (if applicable)",
        "Membership portals",
        "Complex forms",
        "Advanced user management",
        "Specialized features based on your needs",
        "Ideal for businesses requiring complex functionalities",
      ],
    },
  ]


function PricingTable(){
    const [selectedPlan, setSelectedPlan] = useState("Basic")

    const currentPlan = plans.find((plan) => plan.name === selectedPlan) || plans[0]
  
    const formatPrice = (price: number) => {
      return `TSH ${price.toLocaleString()}`
    }

    return(
        <div className="mt-20 flex flex-col items-center">
            <div className="p-1 flex items-center w-fit h-[54px] hero rounded-full gap-2">
            {plans.map((plan) => (   
            <Button
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={` h-[46px] px-4  hover:text-hover  rounded-full text-sm 
              ${
                selectedPlan === plan.name
                  ? "bg-white text-black "
                  : "hover:text-white"
              }`}            
              >
              {plan.name}
              </Button>
             ))}


            </div>

            <div className="mt-10 hero w-[370px] md:w-[550px] p-1 md:p-2  h-auto rounded-[36px] md:rounded-[46px]">
                <div className="w-full h-auto md:h-[370px] rounded-[32px] md:rounded-[40px] wrapper-hero p-[34px] md:p-[50px] flex flex-col gap-[34px] md:gap-[45px]">
                 <div className="flex items-center justify-between">
                    <p className="text-xl md:text-3xl font-medium">
                    {currentPlan.id}                        
                    </p>
                    <div>
                        <p className="text-right text-sm text-[--grey04] font-medium">Done in</p>
                        <div className="flex items-center gap-[6px]">
                        <MdOutlineTimer
                        className="w-[14px] h-[14px] text-[--grey04]"
                         />

                        <p className="text-sm font-medium">{currentPlan.duration}</p>
                        </div>
                    </div>
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between ">
                        <h2 className="text-xl md:text-3xl font-semibold">
                        {currentPlan.name}
                        </h2>
                        <div className="flex flex-col md:flex-row items-end  md:gap-1">
                        <p className="text-lg  md:text-2xl font-semibold" >{currentPlan.price}</p>
                        <span className="text-base text-[--grey04] font-medium">/project</span>
                        </ div>
                    </div>
                    <div>
                      <p className=" w-[170px] md:w-fit text-sm md:text-base text-[--grey04] font-semibold">
                        {currentPlan.description}
                        </p>  
                    </div>
                 </div>
                 <div>
                    <GetStartedButton />
                 </div>
                </div>
                <div className="my-10 px-[30px] md:px-[50px]">
              <p className="text-sm mb-6 font-semibold">Features included:</p>
            <ul className="space-y-3 md:space-y-4">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 min-w-4 mt-0.5" />
                  <p className="text-sm md:text-base text-[--grey04] font-semibold">
                  {feature}
                    </p>
                </li>
              ))}
            </ul>
          </div>

            </div>

        </div>
    )
}

export default PricingTable;