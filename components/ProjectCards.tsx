"use client";
import { useEffect, useRef } from "react";
import { projects, type Project } from "@/data/data";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectCards() {
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

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project: Project) => (
        <motion.div
          key={project.id}
          className="project-card w-[370px] h-[280px] md:w-[550px] md:h-[400px] rounded-[42px] p-2 flex items-end relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Image */}
          <motion.div className="absolute inset-0 z-0 overflow-hidden rounded-[42px]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="h-full w-full"
            >
              <Image
                src={project.backgroundImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="absolute inset-0 z-0 object-cover rounded-[42px]"
              />
            </motion.div>
          </motion.div>

          {/* Card Content */}
          <motion.a
            className="w-full h-[70px] rounded-[50px] bg-[#121313] flex items-center p-2 justify-between relative z-10"
            href={project.link}
            whileHover="hover"
            initial="initial"
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-[54px] h-[54px] bg-[--primary] rounded-full flex items-center justify-center text-xs font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.logoText}
              </motion.div>
              <motion.div
                variants={{
                  initial: { y: 5, opacity: 0.9 },
                  hover: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-md text-[#FEFEFF] font-semibold">{project.title}</p>
                <p className="text-sm text-[--grey01] font-medium">{project.description}</p>
              </motion.div>
            </div>
            <motion.div
              className="w-[54px] h-[54px] bg-[#232223] rounded-full flex items-center justify-center"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 10, scale: 1.1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <LuArrowUpRight className="text-white w-[20px] h-[20px]" />
            </motion.div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCards;