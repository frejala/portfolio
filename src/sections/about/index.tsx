import { ABOUT_TEXT } from "@/constants";

function About() {
  return (
    <section className="py-4 my-20" id="about">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 lg:pt-0">
          <h1 className="pb-16 text-6xl font-extrabold tracking-tight lg:text-8xl text-transparent font-outline-2 mt-16 lg:mt-0 text-center lg:text-start">
            About Me
            <span className="text-[#49DEFF]">.</span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 mt-2.5">
          <div className="flex justify-center lg:justify-end">
            <p className="my-2 max-w-xl py-6 font-mono">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
