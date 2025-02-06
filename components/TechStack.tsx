"use client"

import { FiFigma } from "react-icons/fi"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import type { ReactNode } from "react"

interface Skill {
  name: string
  description: string
  icon: ReactNode
  proficiency: number
}

interface TechstackProps {
  skills?: Skill[]
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
]

function TechStack({ skills = defaultSkills }: TechstackProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div ref={containerRef} className="space-y-3">
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative w-[370px] md:w-[550px] h-[90px] hero rounded-[20px] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0" />

            <motion.div
              className="absolute inset-0 bg-[--primary]"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />

            <div className="relative h-full flex items-center p-4 gap-4">
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-black/70 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <div className="flex-grow">
                <h3 className="font-medium text-white">{skill.name}</h3>
                <p className="text-[#B8B8FE] text-sm font-medium">{skill.description}</p>
              </div>
              <motion.div
                className="flex-shrink-0 bg-black/40 py-[4px] px-[8px] rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
              >
                <span className="text-sm text-white font-medium">{skill.proficiency}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack

