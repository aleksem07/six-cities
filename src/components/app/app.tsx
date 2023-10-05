import Main from '../../pages/main-page/main';
import Login from '../../pages/login-page/login';
import OfferCountProps from '../../types/offer-count.types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from './app.types';
import FavoritesEmpty from '../../pages/favorites-empty-page/favorites-empty';
import Page404 from '../../pages/page404-page/page404';

function App({offerCount}: OfferCountProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<Main offerCount={offerCount} />}
        />;
        <Route path={AppRoute.SignIn}
          element={<Login />}
        />;
        <Route path={AppRoute.Favorites}
          element={<FavoritesEmpty />}
        />;
        <Route path={AppRoute.Page404} element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
