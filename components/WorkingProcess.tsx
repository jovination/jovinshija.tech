"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function WorkingProcess() {
  const containerRef = useRef(null);

  // Set up intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const stepElements = document.querySelectorAll(".step-card");
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    hover: { 
      color: "#000",
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="mt-32 hero w-[380px] md:w-[550px] h-full h-[752px] md:h-[870.2px] rounded-[36px] md:rounded-[46px] p-2 space-y-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div 
        className="w-full h-[137px] md:h-[168px] bg-[--primary] rounded-[32px] md:rounded-[40px] pl-[26px] px-[40px] md:py-[32px] md:px-[46px] flex items-center"
        variants={headerVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >  
        <div className="flex items-center gap-6 ">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-8xl font-semibold">4</p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-1 md:gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-md font-semibold text-white text-2xl">Step process</p>
            <p className="md:leading-1 text-sm md:text-base text-white font-medium">
              approach that guarantees smooth collaboration and <br /> exceptional results.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="step-card w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]"
        variants={cardVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <motion.div 
          className="w-[202px]"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-right leading-[1.2] text-[--grey01] text-sm md:text-lg font-semibold">
            We'll discuss your goals and vision
          </p>
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
          >
            <Image 
              src="/icon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </motion.div>
          <motion.p 
            className="text-[--primary] text-xl font-bold"
            variants={numberVariants}
            whileHover="hover"
          >
            01
          </motion.p>
        </div>
        <motion.div 
          className="w-[202px]"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="md:text-2xl font-semibold">Booking a call</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="step-card w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]"
        variants={cardVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <motion.div 
          className="w-[202px]"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-right md:text-2xl font-semibold w-full">Custom design</p>
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
          >
            <Image 
              src="/icon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </motion.div>
          <motion.p 
            className="text-[--primary] text-xl font-bold"
            variants={numberVariants}
            whileHover="hover"
          >
            02
          </motion.p>
        </div>
        <motion.div 
          className="w-[202px]"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-left leading-[1.2] text-[--grey01] text-sm md:text-lg font-medium">
            I'll create custom design tailored to your needs                
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="step-card w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]"
        variants={cardVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <motion.div 
          className="w-[202px] h-[54px]"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-right leading-[1.2] text-[--grey01] text-sm md:text-lg font-semibold">
            The design comes to life with clean, efficient code               
          </p>
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
          >
            <Image 
              src="/icon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </motion.div>
          <motion.p 
            className="text-[--primary] text-xl font-bold"
            variants={numberVariants}
            whileHover="hover"
          >
            03
          </motion.p>
        </div>
        <motion.div 
          className="w-[202px]"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="md:text-2xl font-semibold">Development</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="step-card w-full h-[130px] md:h-[150px] px-[20px] md:px-[30px] py-[34px] md:py-[44px] bg-[--background] rounded-[30px] md:rounded-[40px] flex justify-center items-start gap-[22px]"
        variants={cardVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <motion.div 
          className="w-[202px]"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-right md:text-2xl font-semibold w-full">Launch</p>
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
          >
            <Image 
              src="/icon.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </motion.div>
          <motion.p 
            className="text-[--primary] text-xl font-bold"
            variants={numberVariants}
            whileHover="hover"
          >
            04
          </motion.p>
        </div>
        <motion.div 
          className="w-[202px]"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-left leading-[1.2] text-[--grey01] text-sm md:text-lg font-medium">
            I'll help you get your website live and ready for the world
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WorkingProcess;