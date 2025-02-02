"use client"

import { FiFigma } from "react-icons/fi"
import { SiFramer, SiAdobephotoshop } from "react-icons/si"
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
    name: "Figma",
    description: "Leading design tool",
    icon: <FiFigma className="w-6 h-6" />,
    proficiency: 90,
  },
  {
    name: "Framer",
    description: "No-code website builder",
    icon: <SiFramer className="w-6 h-6" />,
    proficiency: 70,
  },
  {
    name: "Adobe Photoshop",
    description: "Raster graphics editor",
    icon: <SiAdobephotoshop className="w-6 h-6" />,
    proficiency: 60,
  },
]

function TechStack({ skills = defaultSkills }: TechstackProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="relative w-[370px] md:w-[550px] h-[80px] hero rounded-[20px] overflow-hidden"
          >
            {/* Black background */}
            <div className="absolute inset-0 bg-neutral-900" />

            <div 
              className="absolute inset-0 bg-[--primary]" 
              style={{ width: `${skill.proficiency}%` }} 
            />

            {/* Content overlay */}
            <div className="relative h-full flex items-center p-4 gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center">
                {skill.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-white">{skill.name}</h3>
                <p className="text-[#DEDEDE] text-sm">{skill.description}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-white font-medium">{skill.proficiency}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack