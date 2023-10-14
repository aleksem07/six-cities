import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AuthStatus } from '../../const';

const Layout = (): JSX.Element => (
  <div className='page page--gray page--main'>
    <Header authStatus={AuthStatus.Auth} />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
