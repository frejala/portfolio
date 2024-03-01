import 'src/sass/main.scss';

export const Menu = () => {
  return (
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            About Me
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            My Road-Path
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            My Projects
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Let's Get in Touch
          </a>
        </li>
      </ul>
    </nav>
  );
};
