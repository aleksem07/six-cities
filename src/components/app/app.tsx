import Main from '../../pages/main-page/main';
import Login from '../../pages/login-page/login';
import OfferCountProps from '../../types/offer-count.types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import FavoritesEmpty from '../../pages/favorites-empty-page/favorites-empty';
import Page404 from '../../pages/page404-page/page404';
import Property from '../../pages/property-page/property';
import MainEmpty from '../../pages/main-empty-page/main-empty';
import Favorites from '../../pages/favorites-page/favorites';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import PropertyNotLogged from '../../pages/property-not-logged-page/property-not-logged';

function App({offerCount}: OfferCountProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index
            element={<Main offerCount={offerCount} />}
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
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.DevFavorites}
            element={<FavoritesEmpty />}
          />;
          <Route path={`${AppRoute.Offer}/:id`}
            element={<Property />}
          />;
          <Route path={AppRoute.DevOffer}
            element={<PropertyNotLogged />}
          />;
          <Route path={AppRoute.Page404}
            element={<Page404 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
