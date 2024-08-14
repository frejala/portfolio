import React from 'react';

type TechnologiesBubbleProps = {
  technologies: string[];
};

const TechnologiesBubble: React.FC<
  TechnologiesBubbleProps
> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap items-center justify-start">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechnologiesBubble;
