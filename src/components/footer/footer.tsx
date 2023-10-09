import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';

function Footer (): JSX.Element {
  return (
    <footer className="footer">
      <Link className="footer__logo-link" to={AppRoute.Root}>
        <Logo width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
