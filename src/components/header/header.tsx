import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';
import { HeaderProps } from './header.types';
import { UserMenu } from '../user-menu/user-menu';

function Header ({authStatus}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <Logo width="81" height="41" />
            </Link>
          </div>
          <UserMenu authStatus={authStatus} />
        </div>
      </div>
    </header>
  );
}

export default Header;
