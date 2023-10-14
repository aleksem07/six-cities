import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { UserMenuProps } from './user-menu.types';
import { AuthStatus } from '../../const';

export const UserMenu = ({authStatus}: UserMenuProps): JSX.Element => {
  const userInfo =
  authStatus === AuthStatus.Auth ? (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
    </Link>
  ) : (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  );

  const userStatus = authStatus === AuthStatus.Auth ? (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Root}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign out</span>
    </Link>
  ) : null;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">{userInfo}</li>
        <li className="header__nav-item">{userStatus}</li>
      </ul>
    </nav>
  );
};
