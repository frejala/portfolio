"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const sections = ["hero", "about", "road-path", "projects", "contact"];

export function ScrollDots() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 100);

      let currentSection = "";
      const viewportMiddle = window.innerHeight * 0.5;

      sections.some((section) => {
        const el = document.getElementById(section);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          currentSection = section;
          return true;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection]);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hidden fixed right-8 top-1/2 -translate-y-1/2 lg:flex flex-col gap-10 z-50 mr-5">
      {sections.map((section) => (
        <div key={section} className="relative w-2 h-2">
          <button
            onClick={() => handleClick(section)}
            className={cn(
              "absolute inset-0 w-full h-full rounded-none transition-all duration-300 ease-in-out bg-white hover:scale-125",
              activeSection === section
                ? "scale-125 opacity-100"
                : "opacity-40",
              isScrolling ? "pointer-events-none" : ""
            )}
            style={{
              opacity: activeSection === section ? 1 : 0.4,
              transform: activeSection === section ? "scale(1.25)" : "scale(1)",
            }}
            aria-label={`Scroll to ${section} section`}
          />
        </div>
      ))}
    </div>
  );
}
