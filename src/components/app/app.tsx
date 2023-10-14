import Main from '../../pages/main-page/main';
import Login from '../../pages/login-page/login';
import { AppProps } from '../../types/offer-count.types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import FavoritesEmpty from '../../pages/favorites-empty-page/favorites-empty';
import Page404 from '../../pages/page404-page/page404';
import OfferPage from '../../pages/offer-page/offer-page';
import MainEmpty from '../../pages/main-empty-page/main-empty';
import { Favorites } from '../../pages/favorites-page/favorites-page';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import OfferNotLogged from '../../pages/offer-not-logged-page/offer-not-logged';

export const App = ({offers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route index
          element={<Main offers={offers} />}
        />;
        <Route path={AppRoute.DevRoot}
          element={<MainEmpty />}
        />;
        <Route path={AppRoute.Login}
          element={<Login />}
        />;
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.DevFavorites}
          element={<FavoritesEmpty />}
        />;
        <Route path={`${AppRoute.Offer}/:id`}
          element={<OfferPage />}
        />;
        <Route path={AppRoute.DevOffer}
          element={<OfferNotLogged />}
        />;
        <Route path={AppRoute.Page404}
          element={<Page404 />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
