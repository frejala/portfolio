import ArrowDiagonal from "@/assets/arrow-diagonal.svg";

interface Project {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  image: string;
  href: string;
}

export function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={project.image}
          alt="Ecommerce"
          className="mb-6 rounded w-3/4 h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <h6 className="mb-2 font-semibold font-poppins text-xl">
          {project.title} <span className="text-[#49DEFF]">•</span>{" "}
          {project.company}
        </h6>
        <p className="mb-4 font-mono text-sm leading-10">
          {project.description}
        </p>
        {project.technologies && (
          <div className="flex flex-wrap">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="mr-2 mb-2 px-2 py-1 bg-[rgba(204,243,129,0.04)] text-[#49DEFF] font-mono text-xs rounded-4xl"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <a
          href={project.href}
          target="_blank"
          className="font-mono text-[#49DEFF] inline-flex items-center mt-2 text-sm ml-2"
        >
          View Project
          <img src={ArrowDiagonal} alt="Arrow" className="w-2 h-2 ml-2" />
        </a>
      </div>
    </div>
  );
}
