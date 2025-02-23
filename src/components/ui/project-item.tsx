"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Rocket from "@/assets/icons/rocket.svg";

interface Project {
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  demo: string;
  sourceCode: string;
}

export function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          placeholder="blur"
          className="mb-6 rounded w-3/4 h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <h6 className="mb-2 font-semibold font-poppins text-xl text-white">
          {project.title}{" "}
          {project.company && (
            <>
              <span className="text-cblue">•</span> {project.company}
            </>
          )}
        </h6>
        <p className="mb-4 font-mono text-sm leading-10 text-white">
          {project.description}
        </p>
        {project.technologies && (
          <div className="flex flex-wrap">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="mr-2 mb-2 px-2 py-1 bg-[rgba(204,243,129,0.04)] text-cblue font-mono text-xs rounded-4xl"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-row md:flex-col">
          <Link
            href={project.demo}
            target="_blank"
            className="font-mono text-cblue inline-flex items-center mt-2 text-sm ml-2 w-fit hover:underline"
          >
            View Demo
            <Image
              src={Rocket.src}
              alt="Rocket"
              width={16}
              height={16}
              className="ml-2"
            />
          </Link>
          <Link
            href={project.sourceCode}
            target="_blank"
            className="font-mono text-cblue inline-flex items-center mt-2 text-sm ml-2 w-fit hover:underline"
          >
            View Source Code
            <Image
              src={ArrowUpRight.src}
              alt="Arrow Up Right"
              width={16}
              height={16}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
