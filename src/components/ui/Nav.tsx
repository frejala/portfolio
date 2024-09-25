import { NAV_ITEMS } from '@/constants';

const Nav = () => {
  return (
    <nav className="m-8 flex items-center justify-center gap-4 text-xl">
      <div className="hidden justify-end md:flex">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
