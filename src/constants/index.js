import {
  js,
  firebase,
  tailwind2,
  react,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  almadina,
  agileengineering,
  almadina2,
  bbluxury2,
  agile ,
  bbluxury,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "js", icon: js },
  { title: "react", icon: react },
  { title: "firebase", icon: firebase },
  { title: "tailwind", icon: tailwind2 },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web Developer Freelance",
    company_name: "BB Luxury Apartment & Housing Estates",
    icon: bbluxury,
    iconBg: "#161329",
    date: "Jul 2025 - Aug 2025",
    points: [
      " Elegant Digital Presence: Designed and developed a modern website that highlights the luxury brand, showcasing apartments and housing estates with high-quality visuals and detailed property information.",
      " Seamless User Journey: Focused on creating a smooth and responsive experience, making it easy for potential clients to explore available properties and get in touch.",
      "Real-World Value: This project is deeply important to me because it helps a real estate business build credibility online, attract investors, and connect with clients in a highly competitive market."
    ],
  },
  {
    title: "Frontend Developer Freelance",
    company_name: "Agile Engineering & Technical Services",
    icon: agile,
    iconBg: "#161329",
    date: " 2nd May 2025 - 27 May 2025",
    points: [
      " Embraced Agile Workflow: Structured the project in sprints,breaking down complex tasks into smaller, achievable goals and iterating based on feedback to ensure steady progress.",
      " Focused on Real Impact: Built every feature with business value in mind, aligning the solution with real user needs and client objectives.",
      " Personal Growth & Importance: This project was a turning point for me — it sharpened my problem-solving skills, improved adaptability, and proved how Agile practices can transform ideas into impactful results.",
    ],
  },
  {
    title: "Web Developer Intern|Contract",
    company_name: "Kt Almadina Motors International Limited",
    icon: almadina,
    iconBg: "#161329",
    date: "June 2025 - July 2025",
    points: [
      " Modernized Car Sales Online: Designed and developed a dynamic dealership website that showcases available cars with detailed specs, images, and pricing, making the buying process more transparent and engaging.",
      " User-Friendly Experience: Focused on intuitive navigation and responsive design so customers can easily explore cars, whether on desktop or mobile.",
      " Business Impact & Growth: This project is important to me because it goes beyond code — it helps a real dealership expand its reach, attract new customers, and modernize how people in Northern Nigeria interact with car sales online.",
    ],
  },
];

export const projects = [
  {
    name: "Agile engineering & Technical Services",
    description:
      " A web-based platform built for Agile Engineering & Technical Services, designed to showcase their services, streamline client communication, and strengthen their online presence.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "tailwindv4", color: "pink-text-gradient" },
      { name: "Firebase | postman", color: "yellow-text-gradient" },
    ],
    image: agileengineering,
    live_demo_link: "https://agileengineeringandtechnicalservices.netlify.app",
  },
  {
    name: "Kt almadina Motors International Limited",
    description:
      " Dynamic dealership website that allows customers to explore available cars with detailed specifications, pricing, and images in a modern, responsive interface.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwindv4", color: "green-text-gradient" },
       { name: "Vite", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: almadina2,
    live_demo_link: "https://kt-almadina-international-ltd.netlify.app",
  },
  {
    name: "BB luxury Apartment & Housing Estates",
    description:
      " Modern real estate website that showcases luxury apartments and housing estates with detailed property listings, pricing, and high-quality visuals.",
    tags: [
      { name: "Html5", color: "blue-text-gradient" },
      { name: "Tailwindv4", color: "blue-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Vite | Netlify", color: "blue-text-gradient" },
    ],
    image: bbluxury2,
    live_demo_link: "https://bbluxuryapartmentandhousingestates.netlify.app",
  },
];
