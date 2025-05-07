// Project Interface
export interface Project {
  id: number
  title: string
  description: string
  logoText: string
  backgroundImage: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SENTRY PASSKEY",
    description: "Password Generator",
    logoText: "SP",
    backgroundImage: "/sentrypass.jpg",
    link: "https://sentrypasskey.com/",
  },
  {
    id: 2,
    title: "SHORTIIFY",
    description: "URL Shortening Platform",
    logoText: "SF",
    backgroundImage: "/shortfy.webp",
    link: "https://shortiify.website/",
  },
 
  {
    id: 3,
    title: "SMARTICA GADGETS",
    description: "Single product e-commerce website",
    logoText: "CT",
    backgroundImage: "/smartica.png",
    link: "https://smarticagadgets.store/",
  },
  {
    id: 4,
    title: "SWiftyQuill",
    description: "intuitive note-taking app",
    logoText: "CT",
    backgroundImage: "/swiftyquill.png",
    link: "https://swiftyquill.vercel.app/",
  },
]

