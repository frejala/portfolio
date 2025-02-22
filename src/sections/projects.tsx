"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

import { PROJECTS } from "@/constants";
import { ProjectItem } from "@/components/ui/project-item";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const autoplay = useRef<AutoplayType>(Autoplay({ delay: 4500 }));

  return (
    <section id="projects" className="py-4 my-20">
      <h1 className="mb-20 text-center text-[56px] lg:text-8xl text-transparent text-stroke-white font-extrabold font-poppins">
        Projects<span className="text-cblue">.</span>
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
      <div className="mt-8 w-full overflow-x-auto px-4">
        <div className="flex flex-nowrap gap-4 justify-center">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex-shrink-0">
              <button
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  autoplay.current.stop();
                }}
                className="max-w-50 max-h-28 transition-opacity cursor-pointer"
              >
                <Image
                  className={cn(
                    "w-full h-full object-cover",
                    activeIndex === index
                      ? "border-2 border-cblue opacity-100"
                      : "opacity-50 hover:opacity-80"
                  )}
                  src={project.image}
                  alt={project.title}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
