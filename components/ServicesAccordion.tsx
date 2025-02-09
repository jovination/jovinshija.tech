"use client"

import { SetStateAction, useState } from "react"
import { FaLayerGroup, FaDesktop, FaServer, FaPlug, FaBolt, FaRocket, FaBug } from "react-icons/fa"

function ServiceAccordion() {
  const [openSection, setOpenSection] = useState<string | null>("full-stack")

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
  ]

  function toggleSection(id: string) {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <div className="w-full max-w-md md:max-w-lg  mx-auto  p-8">
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="border-t border-[#3B3A3A]">
            <button
              onClick={() => toggleSection(service.id)}
              className="w-full py-4 flex items-center justify-between text-left transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-white">{service.icon}</span>
                <span className="text-white text-xl font-medium">{service.title}</span>
              </div>
              <span className="text-white text-2xl transform transition-transform duration-200">
                {openSection === service.id ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === service.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 text-[--grey01] font-medium">{service.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceAccordion

