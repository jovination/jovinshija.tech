"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";

function Experience() {
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
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const experienceBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100 
      }
    },
  };

  const plusIconVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { 
        delay: 0.5, 
        duration: 0.4,
        type: "spring" 
      }
    },
    hover: {
      rotate: 90,
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.4, 
        duration: 0.5 
      }
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const statBoxVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const percentageCounterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.6, 
        duration: 0.5 
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-2"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    > 
      <motion.div 
        className="animate-on-scroll mt-16 w-[370px] h-[135px] md:w-[550px] md:h-[172px] border border-[#404141] rounded-[30px] md:rounded-[36px] px-[48px] py-[40px] md:px-[60px] md:py-[50px] flex items-center gap-[40px]"
        variants={experienceBoxVariants}
        whileHover={{ 
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          borderColor: "#555556",
          transition: { duration: 0.3 }
        }}
      > 
        <div>
          <motion.p 
            className="text-7xl font-semibold relative inline-block"
            variants={numberVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              3
            </motion.span>
            <motion.div
              className="text-xl text-[--grey01] absolute top-0 left-14 -translate-x-1/2"
              variants={plusIconVariants}
              whileHover="hover"
            >
              <FaPlus />
            </motion.div>
          </motion.p>
        </div>
        <motion.div 
          className="h-full flex flex-col justify-end"
          variants={textVariants}
        >
          <p className="md:leading-1 text-sm md:text-base text-white font-medium">
            Years of experience
          </p>
          <p className="md:leading-1 text-sm md:text-base text-white font-medium">
            in Software Development
          </p>
        </motion.div>
      </motion.div>

      <div className="flex w-[370px] md:w-[550px] items-center justify-between mb-10">
        <motion.div 
          className="animate-on-scroll w-[183px] md:w-[273px] h-[183px] md:h-[273px] rounded-[30px] md:rounded-[36px] relative overflow-hidden"
          variants={imageContainerVariants}
          whileHover="hover"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src="/web.png"
              alt="project image"
              fill
              className="absolute inset-0 z-0 object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="animate-on-scroll w-[183px] md:w-[273px] h-[183px] md:h-[273px] bg-[--primary] rounded-[30px] md:rounded-[36px] p-[32px] md:p-[40px] flex flex-col justify-between"
          variants={statBoxVariants}
          whileHover="hover"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Image
              className="hidden md:flex"
              src="./SVG.svg"
              alt="icon"
              width={190}
              height={40}
            />
          </motion.div>
          <div>
            <motion.div 
              className="flex items-end"
              variants={percentageCounterVariants}
            >
              <motion.p 
                className="text-5xl md:text-7xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <CountUp end={95} duration={2} />
              </motion.p>
              <motion.p 
                className="texl-2xl md:text-3xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                %
              </motion.p>
            </motion.div>
            <motion.p 
              className="md:leading-1 text-sm md:text-base text-white font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Client satisfaction rate built on trust and results.
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ContactButton />
      </motion.div>
    </motion.div>
  );
}

// Simple CountUp component for the percentage animation
interface CountUpProps {
  end: number;
  duration: number;
}

function CountUp({ end, duration }: CountUpProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return count;
}

export default Experience;