import { EXPERIENCES } from "@/constants";

function RoadPath() {
  return (
    <section className="py-4 my-20" id="road-path">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 lg:pt-0">
          <h1 className="pb-16 text-6xl font-extrabold tracking-tight lg:text-8xl text-transparent font-outline-2 mt-16 lg:mt-0 text-center lg:text-start">
            Road-Path
            <span className="text-[#49DEFF]">.</span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 mt-2.5">
          <div className="flex justify-center">
            <div>
              {EXPERIENCES.map((experience, index) => (
                <div
                  key={index}
                  className="mb-8 flex flex-wrap lg:justify-center"
                >
                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-[#49DEFF] font-mono">
                      {experience.year}
                    </p>
                  </div>
                  <div className="w-full max-w-2xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold font-poppins text-sm">
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
                            className="mr-2 mb-2 px-2 py-1 bg-[rgba(204,243,129,0.04)] text-[#49DEFF] font-mono text-xs rounded-4xl"
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
        </div>
      </div>
    </section>
  );
}

export default RoadPath;
