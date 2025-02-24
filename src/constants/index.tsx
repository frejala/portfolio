// import ProjectRectangle from "@/assets/projects/project-rectangle.png";
import EcommerceProject from "@/assets/projects/ecommerce-project.png";
import VoidTattoo from "@/assets/projects/void-tattoo.png";
import PortfolioProject from "@/assets/projects/portfolio-project.png";

export const NAV_ITEMS = [
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "My Road-Path",
    href: "#road-path",
  },
  {
    name: "My Projects",
    href: "#projects",
  },
  {
    name: "Contact Me",
    href: "#contact",
  },
];

export const HERO_CONTENT =
  "I like to craft solid and scalable frontend products with great user experience...";

export const ABOUT_TEXT =
  "Hi, I'm Fabrizio Rejala, a passionate developer based in Paraguay. I love creating websites with an excellent user experience. Currently, I am studying Computer Science Engineering. During my time at university, I have worked on various projects involving automation, project management, algorithm optimization, and databases. I have extensive experience in frontend development with frameworks such as React and Angular. Additionally, I have backend development experience with technologies like FastAPI, Django, and Spring Boot. Throughout my career, I have been recognized for my ability to solve complex problems with high-quality software solutions. My goal is to become a highly experienced developer and elevate the user experience to the next level.";

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Centro de Desarrollo Sostenible S.A",
    description:
      "Developed high-quality, robust production code for a wide variety of projects for clients, including the MITIC (Ministry of Information and Communication Technologies), MIC (Ministry of Industry and Commerce), and MEF (Ministry of Economy and Finance), among others. Also built e-commerce applications for companies like Plub. Developed an ETL for the management of public contracts for the government of Panama, and more. Through my collaboration, many projects were successfully completed on time, allowing me to gain knowledge and experience.",
    technologies: [
      "React",
      "React Native",
      "Angular",
      "SpringBoot",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Elasitcsearch",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website, designed to showcase my skills, projects, and experiences. The platform features a clean, modern design with smooth animations and transitions, ensuring a seamless user experience. The website is fully responsive and optimized for all devices.",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    image: PortfolioProject,
    demo: "https://frejala.com/",
    sourceCode: "https://github.com/frejala/portfolio",
  },
  {
    title: "Ecommerce Shop",
    description:
      "This is a modern, fully responsive eCommerce website designed for seamless shopping experiences across all devices. The platform features a dynamic product listing, cart management, and a detailed product page, ensuring users can browse, add items to their cart, and view product details effortlessly.",
    technologies: ["React + Vite", "Tailwind CSS", "Redux", "Fakestore API"],
    image: EcommerceProject,
    demo: "https://ecommerce-shop-henna.vercel.app/",
    sourceCode: "https://github.com/frejala/ecommerce-shop",
  },
  {
    title: "Void Tattoo",
    description:
      "Developed a website for a tattoo studio, featuring a modern design with a dark color scheme to match the brand's aesthetic. The platform includes a gallery of tattoo designs, artist profiles, and a contact form for booking appointments. The website is fully responsive and optimized for all devices.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: VoidTattoo,
    demo: "https://void-tattoo-opal.vercel.app/",
    sourceCode: "https://github.com/frejala/void-tattoo",
  },
];
