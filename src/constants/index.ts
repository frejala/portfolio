import { RiReactjsLine } from 'react-icons/ri';
import { RiAngularjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';
import { TbBrandDjango } from 'react-icons/tb';
import { SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export const HERO_CONTENT =
  'I like to craft solid and scalable frontend experiences with React and Tailwind CSS. I also enjoy building backend services with Spring Boot, Django and FastAPI.';

export const ABOUT_TEXT =
  " Hi, I'm Fabrizio Rejala, a passionate developer based in Paraguay. I love creating websites with an excellent user experience. Currently, I am studying Computer Science Engineering. During my time at university, I have worked on various projects involving automation, project management, algorithm optimization, and databases. I have extensive experience in frontend development with frameworks such as React and Angular. Additionally, I have backend development experience with technologies like FastAPI, Django, and Spring Boot. Throughout my career, I have been recognized for my ability to solve complex problems with high-quality software solutions. My goal is to become a highly experienced developer and elevate the user experience to the next level.";

export const TECHNOLOGIES = [
  {
    name: 'React',
    Icon: RiReactjsLine,
    color: 'text-cyan-400',
  },
  {
    name: 'Angular',
    Icon: RiAngularjsLine,
    color: 'text-red-500',
  },
  {
    name: 'Next.js',
    Icon: TbBrandNextjs,
    color: '',
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: 'text-cyan-400',
  },
  {
    name: 'FastAPI',
    Icon: SiFastapi,
    color: 'text-teal-600',
  },
  {
    name: 'Django',
    Icon: TbBrandDjango,
    color: 'text-emerald-500',
  },
  {
    name: 'Spring Boot',
    Icon: SiSpringboot,
    color: 'text-green-400',
  },
  {
    name: 'PostgreSQL',
    Icon: BiLogoPostgresql,
    color: 'text-sky-700',
  },
];

export const EXPERIENCES = [
  {
    year: '2022 - Present',
    role: 'Full Stack Developer',
    company: 'Centro de Desarrollo Sostenible S.A',
    description:
      'Developed high-quality, robust production code for a wide variety of projects for clients, including the MITIC (Ministry of Information and Communication Technologies), MIC (Ministry of Industry and Commerce), and MEF (Ministry of Economy and Finance), among others. Also built e-commerce applications for companies like Plub. Developed an ETL for the management of public contracts for the government of Panama, and more. Through my collaboration, many projects were successfully completed on time, allowing me to gain knowledge and experience.',
    technologies: [
      'React',
      'React Native',
      'Angular',
      'SpringBoot',
      'Django',
      'FastAPI',
      'PostgreSQL',
    ],
  },
];
