import logo from '@/assets/logo.png';
import { SOCIAL_MEDIA } from '@/constants';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {SOCIAL_MEDIA.map((social, index) => (
          <a href={social.url} target="_blank" key={index}>
            <social.Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
