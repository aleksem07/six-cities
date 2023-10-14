import { LocationProps } from './location.types';

function Location ({city, active}: LocationProps): JSX.Element {
  return (
    active ? (
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" href="/">
          <span>{city}</span>
        </a>
      </li>
    ) : (
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="/">
          <span>{city}</span>
        </a>
      </li>
    )
  );
}

export default Location;
