"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLayerGroup, 
  FaDesktop, 
  FaServer, 
  FaPlug, 
  FaBolt, 
  FaRocket, 
  FaBug 
} from "react-icons/fa";

function ServiceAccordion() {
  const [openSection, setOpenSection] = useState<string | null>("full-stack");
  const accordionRef = useRef(null);

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

    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((el) => observer.observe(el));

    return () => {
      serviceItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      id: "full-stack",
      icon: <FaLayerGroup className="w-5 h-5" />,
      title: "Full-Stack Development",
      content:
        "I build complete web applications, from stunning front-end interfaces to robust back-end systems. Whether you need a simple website or a complex platform, I'll bring your vision to life.",
    },
    {
      id: "front-end",
      icon: <FaDesktop className="w-5 h-5" />,
      title: "Front-End Development",
      content:
        "Your users deserve a smooth and engaging experience. I create responsive, user-friendly designs that work seamlessly across all devices, with a focus on modern technologies like React and Next.js.",
    },
    {
      id: "back-end",
      icon: <FaServer className="w-5 h-5" />,
      title: "Back-End Development",
      content:
        "Behind every great app is a powerful engine. I specialize in building secure, scalable APIs and databases that keep everything running smoothly, using Node.js, Python, and SQL.",
    },
    {
      id: "deployment",
      icon: <FaRocket className="w-5 h-5" />,
      title: "Deployment & Maintenance",
      content:
        "I don't stop at building. I deploy your app, keep it updated, and ensure it stays secure and reliable as your needs evolve.",
    },
    {
      id: "performance",
      icon: <FaBolt className="w-5 h-5" />,
      title: "Performance Optimization",
      content:
        "Speed matters. I fine-tune websites and apps to load faster, run better, and deliver the best experience possible for your users.",
    },
    {
      id: "api-integration",
      icon: <FaPlug className="w-5 h-5" />,
      title: "API Integration",
      content:
        "Need to connect third-party services to your app? I handle seamless integrations to make sure everything works together, from payment systems to data services.",
    },
    {
      id: "debugging",
      icon: <FaBug className="w-5 h-5" />,
      title: "Debugging",
      content: "Got an issue with your current app? I'll dive in, troubleshoot, and fix it—quickly and effectively.",
    },
  ];

  function toggleSection(id: string) {
    setOpenSection(openSection === id ? null : id);
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.07,
        ease: "easeOut" 
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0.5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 } 
    },
    hover: { 
      scale: 1.2, 
      rotate: 10,
      color: "#B8B8FE",
      transition: { 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      } 
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn" 
      } 
    }
  };

  const plusMinusVariants = {
    plus: { rotate: 0 },
    minus: { rotate: 180, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="w-full max-w-md md:max-w-lg mx-auto p-8"
      ref={accordionRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="space-y-4">
        {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            className="service-item border-t border-[#3B3A3A]"
            variants={itemVariants}
            custom={index}
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "1.5rem", // This is equivalent to rounded-3xl in Tailwind
              padding: "0.5rem", // Adding some padding when hovered
              transition: { 
                duration: 0.3,
                ease: "easeOut",
                borderRadius: { type: "spring", stiffness: 300 }
              }
            }}
          >
            <motion.button
              onClick={() => toggleSection(service.id)}
              className="w-full py-4 flex items-center justify-between text-left"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <motion.span 
                  className="text-white"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.span>
                <motion.span 
                  className="text-white text-xl font-medium"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  {service.title}
                </motion.span>
              </div>
              <motion.span 
                className="text-white text-2xl flex items-center justify-center w-6 h-6"
                variants={plusMinusVariants}
                animate={openSection === service.id ? "minus" : "plus"}
              >
                {openSection === service.id ? "−" : "+"}
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {openSection === service.id && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="py-2 text-[--grey01] font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.1, duration: 0.3 }
                    }}
                  >
                    {service.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ServiceAccordion;