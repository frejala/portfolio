import ProfilePic from "@/assets/profile.png";
import StartIcon from "@/assets/star.svg";

import { HERO_CONTENT } from "@/constants";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

function Hero() {
  return (
    <section className="lg:mb-35 pb-4" id="hero">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-extrabold tracking-tight lg:mt-16 lg:text-8xl text-transparent font-outline-2"
            >
              Fabrizio Rejala
              <span className="text-[#49DEFF]">.</span>
            </motion.h1>
            <motion.span
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-[#D1201C] to-[#49DEFF] bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-mono tracking-normal leading-10"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-end">
            <div className="relative w-fit">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute left-5 -bottom-5 border-2 border-white sm:rounded-3xl opacity-50 transform translate-x-4 translate-y-4 lg:block hidden lg:max-w-none lg:max-h-none -z-10 w-full h-full"
              />
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={ProfilePic}
                alt="Fabrizio Rejala"
                className="rounded-3xl z-10"
              />
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                src={StartIcon}
                alt="Star Decoration"
                className="absolute -top-6 -right-5 w-16 sm:w-20 z-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
