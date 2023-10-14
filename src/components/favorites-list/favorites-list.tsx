import { OfferCard } from '../offer-card/offer-card';
import { FavoritesListProps } from './favorites-list.types';
import { OfferCardType } from '../../const';

export const FavoritesList = ({ offers }: FavoritesListProps) => {
  const cities = new Set([
    ...offers.map((offer) => offer.city.name),
  ]);
  const citiesArr = [...cities];
  const favorites = offers.filter((offer) => offer.isFavorite);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list"></ul>
      {citiesArr.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>{city}</span>
              </a>
            </div>
          </div>

          <div className="favorites__places">
            {favorites.map((favorite) => {
              const { id, city: favoriteCity } = favorite;

              if (favoriteCity.name === city) {
                return (
                  <OfferCard cardType={OfferCardType.Favorites} key={id} offer={favorite} />
                );
              }
              return null;
            }
            )}

          </div>
        </li>
      ))}
    </section>
  );
};
