import 'src/sass/main.scss';

export const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
    </div>
  );
};
