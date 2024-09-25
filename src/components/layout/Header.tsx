import logo from '@/assets/logo.png';
import Nav from '../ui/Nav';

const Header = () => {
  return (
    <header className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
