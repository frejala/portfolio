import { useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

import { PROJECTS } from "@/constants";
import { ProjectItem } from "./project-item";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const autoplay = useRef<AutoplayType>(Autoplay({ delay: 4500 }));

  return (
    <section id="projects" className="py-4 my-20">
      <h1 className="mb-20 text-center text-6xl lg:text-8xl text-transparent font-outline-2 font-extrabold">
        Projects<span className="text-[#49DEFF]">.</span>
      </h1>
      <Carousel
        setApi={(api) => {
          setEmblaApi(api || null);
          if (api) {
            api.on("select", () => {
              setActiveIndex(api.selectedScrollSnap());
            });
          }
        }}
        opts={{ loop: true }}
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {PROJECTS.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectItem project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent className="mt-8 flex jusfiy-center">
          {PROJECTS.map((project, index) => (
            <CarouselItem key={index} className="basis-1/3 md:basis-auto">
              <button
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  autoplay.current.stop();
                }}
                className={`max-w-50 max-h-28 rounded-none transition-opacity ${
                  activeIndex === index
                    ? "border-2 border-[#49DEFF] opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  className="w-full h-full lg:h-full object-cover rounded-none"
                  src={project.image}
                  alt={project.title}
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Projects;
