import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = (): JSX.Element => (
  <div className='page page--gray page--main'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
