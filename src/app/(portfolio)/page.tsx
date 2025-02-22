import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { RoadPath } from "@/sections/road-path";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <About />
      <RoadPath />
      <Projects />
      <Contact />
    </>
  );
}
