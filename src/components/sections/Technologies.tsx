import TechnologyBox from '@/components/ui/TechnologyBox';
import { TECHNOLOGIES } from '@/constants';
import { cn } from '@/lib/utils';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {TECHNOLOGIES.map((tech) => (
          <TechnologyBox key={tech.name}>
            <tech.Icon
              className={cn(`text-7xl`, tech.color)}
            />
          </TechnologyBox>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
