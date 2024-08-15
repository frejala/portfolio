import { SOCIAL_MEDIA } from '@/constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl lg:mb-0 lg:mt-10">
        Let&apos;s get in{' '}
        <span className="text-neutral-500">touch</span>
      </h1>
      <div className="m-8 flex flex-wrap items-center justify-center gap-4 text-3xl">
        {SOCIAL_MEDIA.map((social, index) => (
          <a href={social.url} target="_blank" key={index}>
            <social.Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
