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
    title: "Shortfy",
    description: "URL Shortening Platform",
    logoText: "SF",
    backgroundImage: "/shortfy.webp",
    link: "/projects/shortfy",
  },
  {
    id: 2,
    title: "Pro GPT",
    description: "Another Amazing Project",
    logoText: "PG",
    backgroundImage: "/progpt.png",
    link: "/projects/project-two",
  },
  {
    id: 3,
    title: "Cargo Town",
    description: "Another Amazing Project",
    logoText: "CT",
    backgroundImage: "/cargo-town.jpg",
    link: "/projects/cargo-town",
  },
  {
    id: 3,
    title: "Safari",
    description: "Another Amazing Project",
    logoText: "CT",
    backgroundImage: "/safari.png",
    link: "/projects/cargo-town",
  },
]

