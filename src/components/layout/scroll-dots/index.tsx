import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const sections = ["hero", "about", "road-path", "projects", "contact"];

export default function ScrollDots() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          ) {
            currentSection = section;
          }
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    event.preventDefault();
    const el = document.querySelector(`#${section}`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden fixed right-8 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-10 z-50 mr-5">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={(e) => handleClick(e, section)}
          className={cn(
            `w-2.5 h-2.5 rounded-none transition-all bg-white`,
            activeSection === section ? "scale-125 opacity-100" : "opacity-40"
          )}
        />
      ))}
    </div>
  );
}
