import { SyntheticEvent, useState } from 'react';
import { OfferCardProps } from './offer-card.types';

const spanStyle = {
  width: '80%'
};

export const OfferCard = ({offer}: OfferCardProps): JSX.Element => {
  const [isOfferFavorite, setIsOfferFavorite] = useState(offer.isFavorite);
  const handleFavoriteClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    setIsOfferFavorite((prevIsOfferFavorite) => !prevIsOfferFavorite);
  };

  return (

    <article className="cities__place-card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div> )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place img" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isOfferFavorite ? 'place-card__bookmark-button--active' : ''
            } button`}
            onClick={handleFavoriteClick}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={spanStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


