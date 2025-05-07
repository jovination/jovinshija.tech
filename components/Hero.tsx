"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import AvailabilityIndicator from "@/components/AvailabilityIndicator";
import SocialLinks from "@/components/SocialLinks";
import StarRating from "@/components/StarRating";
import GetStartedButton from "@/components/GetStartedButton";
import { LuArrowUpRight } from "react-icons/lu";
import { SlCursor } from "react-icons/sl";
import Image from "next/image";
import profile from "@/public/profile.png";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay and then trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const headingVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.6 }
    }
  };

  return (
    <div className="mt-24">
      <motion.div 
        className="w-[370px] h-[730.28px] md:w-[550px] md:h-[881.59px] hero rounded-[36px] md:rounded-[46px] flex flex-col gap-[10px] items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="w-[358px] h-[623.11px] md:w-[532px] md:h-[778.39px] wrapper-hero rounded-[30px] md:rounded-[36px] py-[20px] px-[30px] md:py-[30px] md:px-[50px] gap-[22px] md:gap-[45px]"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-between" variants={fadeInVariants}>
            <motion.div 
              className="w-[92.67px] md:w-[137.33px] h-[4px] rounded-full bg-[--green]"
              variants={lineVariants}
            ></motion.div>
            <motion.div 
              className="w-[92.67px] md:w-[137.33px] h-[4px] rounded-full bg-[--green]"
              variants={lineVariants}
            ></motion.div>
            <motion.div 
              className="w-[92.67px] md:w-[137.33px] h-[4px] rounded-full bg-[--grey]"
              variants={lineVariants}
            ></motion.div>
          </motion.div>

          <motion.div className="w-full gap-[34px] h-[126.11px] md:h-[84.61px] flex flex-col md:flex-row-reverse md:justify-between" variants={itemVariants}>
            <motion.div className="flex flex-row items-center md:items-start gap-2" variants={fadeInVariants}>
              <motion.div 
                className="md:mt-[6px]"
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              >
                <AvailabilityIndicator />
              </motion.div>
              <motion.div className="flex items-center md:items-start md:flex-col gap-[2px] md:gap-[1px]">
                <p className="text-sm">Available </p>
                <p className="text-sm text-[--grey01] font-semibold">as Freelancer</p>
              </motion.div>
            </motion.div>

            <motion.div className="flex gap-5" variants={itemVariants}>
              <motion.div 
                className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center overflow-hidden"
                variants={profileVariants}
              >
                <Image src={profile} alt="Jovin Shija" width={95} />
              </motion.div>
              <div>
                <motion.div className="flex flex-col space-y-[4px]" variants={fadeInVariants}>
                  <div className="text-xl font-bold">Jovin Shija</div>
                  <div className="text-sm text-[--grey01] font-semibold">Full-stack Developer</div>
                </motion.div>
                <motion.div 
                  className="mt-[12px]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <SocialLinks />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={headingVariants}>
            <h1 className="leading-1 text-5xl md:text-7xl font-medium md:font-semibold text-white">
              I develop experiences that work for you.
            </h1>
          </motion.div>

          <motion.div className="flex flex-col gap-[22px]" variants={itemVariants}>
            <motion.div 
              className="w-[150px] h-[24px] rounded-full px-[10px] py-[6px] bg-[--grey02] flex items-center justify-center gap-[10px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <StarRating />
              <p className="text-[11px]">10+customers</p>
            </motion.div>
            <motion.p 
              className="text-md text-[--grey01]"
              variants={fadeInVariants}
            >
              From concept to code, I deliver <br /> full-stack web excellence.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-[15px] md:gap-[30px]"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <GetStartedButton />
            </motion.div>
            <motion.div 
              className="hidden bg-[--grey03] h-[54px] rounded-full w-fit md:flex md:px-[30px] py-[6px] items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a className="text-md font-medium" href="">
                My work
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex items-center flex-col gap-[6px] md:flex-row pt-[12px]"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center gap-[8px]">
            <motion.div
              animate={isLoaded ? { 
                x: [0, -5, 0],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1.5,
                  delay: 2
                }
              } : {}}
            >
              <SlCursor className="w-[12px] h-[12px] text-[--grey01] transform scale-x-[-1]" />
            </motion.div>
            <p className="text-xs text-[--grey01] font-semibold">
              Located in <span className="text-white">Tanzania</span>, I am available to work remotely
            </p>
          </div>
          <motion.a 
            className="flex items-center gap-[6px] md:ml-10"
            href="https://spiraxystudio.gumroad.com/"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-xs text-white font-semibold">My Agency</span>
            <motion.div
              animate={isLoaded ? { 
                x: [0, 3, 0],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1.5,
                  delay: 2.2
                }
              } : {}}
            >
              <LuArrowUpRight className="text-[--primary] w-[18px] h-[18px] mt-[1.5px]" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;