"use client";

import { EXPERIENCES } from "@/constants";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export function RoadPath() {
  return (
    <section className="py-4 my-20" id="road-path">
      <div className="flex flex-wrap">
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          className="w-full lg:w-1/2 lg:p-8 lg:pt-0"
        >
          <h1 className="pb-16 text-[55px] font-extrabold tracking-tight lg:text-8xl text-transparent text-stroke-white mt-16 lg:mt-0 text-center lg:text-start font-poppins">
            Road-Path
            <span className="text-cblue">.</span>
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          className="w-full lg:w-1/2 mt-2.5"
        >
          <div className="flex justify-center">
            <div>
              {EXPERIENCES.map((experience, index) => (
                <div
                  key={index}
                  className="mb-8 flex flex-wrap lg:justify-center"
                >
                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-cblue font-mono">
                      {experience.year}
                    </p>
                  </div>
                  <div className="w-full max-w-2xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold font-poppins text-sm text-white">
                      {experience.role} • <span>{experience.company}</span>
                    </h6>
                    <p className="mb-4 font-mono text-[#94A3B8] font-normal leading-7 text-sm">
                      {experience.description}
                    </p>
                    {experience.technologies && (
                      <div className="flex flex-wrap">
                        {experience.technologies.map((technology, index) => (
                          <span
                            key={index}
                            className="mr-2 mb-2 px-2 py-1 bg-[rgba(204,243,129,0.04)] text-cblue font-mono text-xs rounded-4xl"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
