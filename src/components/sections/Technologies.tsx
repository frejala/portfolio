import { RiReactjsLine } from 'react-icons/ri';
import { RiAngularjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';
import { TbBrandDjango } from 'react-icons/tb';
import { SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import TechnologyBox from '@/components/ui/TechnologyBox';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <TechnologyBox>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </TechnologyBox>
        <TechnologyBox>
          <RiAngularjsLine className="text-7xl text-red-500" />
        </TechnologyBox>
        <TechnologyBox>
          <TbBrandNextjs className="text-7xl" />
        </TechnologyBox>
        <TechnologyBox>
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </TechnologyBox>
        <TechnologyBox>
          <SiFastapi className="text-7xl text-teal-600" />
        </TechnologyBox>
        <TechnologyBox>
          <TbBrandDjango className="text-7xl text-emerald-500" />
        </TechnologyBox>
        <TechnologyBox>
          <SiSpringboot className="text-7xl text-green-400" />
        </TechnologyBox>
        <TechnologyBox>
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </TechnologyBox>
      </div>
    </div>
  );
};

export default Technologies;
