"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import GetStartedButton from "@/components/GetStartedButton"
import { ArrowRight, Check } from "lucide-react"
import { MdOutlineTimer } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"

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

function PricingTable() {
    const [selectedPlan, setSelectedPlan] = useState("Basic")
    const [isVisible, setIsVisible] = useState(false)
    const currentPlan = plans.find((plan) => plan.name === selectedPlan) || plans[0]

    useEffect(() => {
        // Trigger the animation when component mounts
        setIsVisible(true)
    }, [])

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col items-center"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-1 flex items-center w-fit h-[54px] hero rounded-full gap-2"
            >
                {plans.map((plan, index) => (   
                    <motion.div
                        key={plan.name}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                        <Button
                            onClick={() => setSelectedPlan(plan.name)}
                            className={`relative h-[46px] px-4 transition-all duration-300 ease-in-out
                                ${selectedPlan === plan.name 
                                    ? "bg-white text-black shadow-sm hover:bg-gray-100" 
                                    : "text-white hover:text-white hover:bg-white/10"
                                }
                                rounded-full text-sm font-medium`}
                        >
                            {plan.name}
                        </Button>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={selectedPlan}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 hero w-[370px] md:w-[550px] p-1 md:p-2 h-auto rounded-[36px] md:rounded-[46px]"
                >
                    <div className="w-full h-auto rounded-[32px] md:rounded-[40px] wrapper-hero p-[34px] md:p-[50px] flex flex-col gap-[34px] md:gap-[45px]">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-between"
                        >
                            <motion.p 
                                initial={{ x: -10 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xl md:text-3xl font-medium"
                            >
                                {currentPlan.id}                        
                            </motion.p>
                            <motion.div
                                initial={{ x: 10 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-right text-sm text-[--grey04] font-medium">Done in</p>
                                <div className="flex items-center gap-[6px]">
                                    <MdOutlineTimer className="w-[14px] h-[14px] text-[--grey04]" />
                                    <p className="text-sm font-medium">{currentPlan.duration}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex items-start justify-between">
                                <h2 className="text-xl md:text-3xl font-semibold">
                                    {currentPlan.name}
                                </h2>
                                <div className="flex flex-col md:flex-row items-end md:gap-1">
                                    <p className="text-lg md:text-2xl font-semibold">{currentPlan.price}</p>
                                    <span className="text-base text-[--grey04] font-medium">/project</span>
                                </div>
                            </div>
                            <div>
                                <p className="w-[170px] md:w-fit text-sm md:text-base text-[--grey04] font-semibold">
                                    {currentPlan.description}
                                </p>  
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <GetStartedButton />
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="my-10 px-[30px] md:px-[50px]"
                    >
                        <p className="text-sm mb-6 font-semibold">Features included:</p>
                        <ul className="space-y-3 md:space-y-4">
                            {currentPlan.features.map((feature, index) => (
                                <motion.li 
                                    key={index} 
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.08) }}
                                    className="flex items-start gap-3"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2, delay: 0.2 + (index * 0.08) }}
                                    >
                                        <Check className="w-4 h-4 min-w-4 mt-0.5" />
                                    </motion.div>
                                    <p className="text-sm md:text-base text-[--grey04] font-semibold">
                                        {feature}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default PricingTable;