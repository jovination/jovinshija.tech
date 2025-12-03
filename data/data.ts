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
    title: "Feedback Grove",
    description: "Anonymous Feedback Collector",
    logoText: "FG",
    backgroundImage: "/feedbackgrove.jpg",
    link: "https://feedbackgrove.com/",
  },
    {
    id: 2,
    title: "Nasi Academy",
    description: "Innovatie LMS plaftorm In TZ",
    logoText: "NA",
    backgroundImage: "/nasiacademy.png",
    link: "https://nasiacademy.com",
  },
   {
    id: 3,
    title: "Zenopay",
    description: "Payment Innovative Platform",
    logoText: "ZP",
    backgroundImage: "/zenopay.png",
    link: "https://zenopay.net/",
  },
   {
    id: 4,
    title: "Chatnae",
    description: "Chat with your fav  Stars",
    logoText: "CN",
    backgroundImage: "/chatnae.png",
    link: "https://chatnae.com",
  },
  {
    id: 5,
    title: "SwiftyQuill",
    description: "intuitive note-taking app",
    logoText: "SQ",
    backgroundImage: "/swiftyquill.png",
    link: "https://swiftyquill.vercel.app/",
  },
  {
    id: 6,
    title: "SentryPasskey",
    description: "Random Password Generator",
    logoText: "SP",
    backgroundImage: "/sentrypass.jpg",
    link: "https://sentrypasskey.com/",
  },
 
  {
    id: 7,
    title: "Smartica Gadgets",
    description: "Single product e-store",
    logoText: "SG",
    backgroundImage: "/smartica.png",
    link: "https://smarticagadgets.store/",
  },

]

