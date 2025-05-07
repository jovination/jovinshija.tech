"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  description: string;
  icon: ReactNode;
  proficiency: number;
}

interface TechstackProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    name: "Reactjs & Nextjs",
    description: "Building fast, dynamic and SE0 optimized web App",
    icon: <FaReact className="w-6 h-6" />,
    proficiency: 90,
  },
  {
    name: "Figma & UI/UX Design",
    description: "Creating high-fidelity wireframe and interactive prototypes.",
    icon: <FiFigma className="w-6 h-6" />,
    proficiency: 85,
  },
  {
    name: "Node.js",
    description: "Building RESTful APIs and microservices using Express.js",
    icon: <FaNodeJs className="w-6 h-6" />,
    proficiency: 60,
  },
  {
    name: "Tailwind CSS & ShadCN UI",
    description: "Building fast, Responsive and modern UI components.",
    icon: <RiTailwindCssFill className="w-6 h-6" />,
    proficiency: 85,
  },
  {
    name: "Supabase & PostgressSQL",
    description: "Managing structures and unstrucrured data Efficiently.",
    icon: <FaDatabase className="w-5 h-5" />,
    proficiency: 65,
  },
  {
    name: "Git & GitHub",
    description: "Managing code repositories with Git for version control.",
    icon: <IoLogoGithub className="w-6 h-6" />,
    proficiency: 75,
  },
];

function TechStack({ skills = defaultSkills }: TechstackProps) {
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

    const skillElements = document.querySelectorAll(".skill-card");
    skillElements.forEach((el) => observer.observe(el));

    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const skillCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: i * 0.1 
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0.5, rotate: 0 },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, delay: 0.2 }
    },
    hover: { 
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <motion.div 
      className="space-y-3"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card relative w-[370px] md:w-[550px] h-[90px] hero rounded-[20px] overflow-hidden"
            variants={skillCardVariants}
            custom={index}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0" />

            <motion.div
              className="absolute inset-0 bg-[--primary]"
              variants={progressVariants}
              custom={skill.proficiency}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <div className="relative h-full flex items-center p-4 gap-4">
              <motion.div 
                className="flex-shrink-0 w-12 h-12 bg-black/70 rounded-xl flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                {skill.icon}
              </motion.div>
              <motion.div 
                className="flex-grow"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="font-medium text-white">{skill.name}</h3>
                <p className="text-[#B8B8FE] text-sm font-medium">{skill.description}</p>
              </motion.div>
              <motion.div 
                className="flex-shrink-0 bg-black/40 py-[4px] px-[8px] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.5 + index * 0.1,
                  duration: 0.4, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.span 
                  className="text-sm text-white font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                >
                  {skill.proficiency}%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechStack;