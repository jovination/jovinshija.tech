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
    title: "FEEDBACK GROVE",
    description: "Anonymous Feedback Collector",
    logoText: "FG",
    backgroundImage: "/feedbackgrove.jpg",
    link: "https://feedbackgrove.com/",
  },
  {
    id: 2,
    title: "SWiftyQuill",
    description: "intuitive note-taking app",
    logoText: "SQ",
    backgroundImage: "/swiftyquill.png",
    link: "https://swiftyquill.vercel.app/",
  },
  {
    id: 3,
    title: "SENTRY PASSKEY",
    description: "Random Password Generator",
    logoText: "SP",
    backgroundImage: "/sentrypass.jpg",
    link: "https://sentrypasskey.com/",
  },
 
  {
    id: 4,
    title: "SMARTICA GADGETS",
    description: "Single product e-store",
    logoText: "SG",
    backgroundImage: "/smartica.png",
    link: "https://smarticagadgets.store/",
  },
  {
    id: 5,
    title: "SHORTIIFY",
    description: "URL Shortening Platform",
    logoText: "SF",
    backgroundImage: "/shortfy.webp",
    link: "https://shortiify.website/",
  },
]

