"use client";

import { ABOUT_TEXT } from "@/constants";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="pb-4 mb-20" id="about">
      <div className="flex flex-wrap">
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          className="w-full lg:w-1/2 lg:p-8 lg:pt-0"
        >
          <h1 className="pb-16 text-[55px] font-extrabold tracking-tight lg:text-8xl text-transparent text-stroke-white mt-16 lg:mt-0 text-center lg:text-start font-poppins">
            About Me
            <span className="text-cblue">.</span>
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          className="w-full lg:w-1/2 mt-2.5"
        >
          <div className="flex justify-center lg:justify-end">
            <p className="max-w-xl font-mono text-white text-center lg:text-start">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
