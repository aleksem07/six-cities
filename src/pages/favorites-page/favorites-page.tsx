import { FavoritesProps } from './favorites-page.types';
import { FavoritesList } from '../../components/favorites-list/favorites-list';

export const Favorites = ({offers}: FavoritesProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      {<FavoritesList offers={offers} />}
    </div>
  </main>
);
