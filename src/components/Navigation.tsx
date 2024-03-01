import 'src/sass/main.scss';
import { Menu } from './Menu';
import { useEffect } from 'react';

export const Navigation = () => {
  useEffect(() => {
    const closeNav = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.navigation')) {
        const checkbox = document.getElementById('navi-toggle') as HTMLInputElement;
        checkbox.checked = false;
      }
    };

    document.addEventListener('click', closeNav);
  }, []);

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <Menu />
    </div>
  );
};
