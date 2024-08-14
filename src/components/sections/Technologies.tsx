import TechnologyBox from '@/components/ui/TechnologyBox';
import { TECHNOLOGIES } from '@/constants';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">
        Technologies
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {TECHNOLOGIES.map((tech) => (
          <TechnologyBox key={tech.name}>
            <tech.Icon
              className={`text-7xl ${tech.color}`}
            />
          </TechnologyBox>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
