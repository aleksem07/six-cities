import { SyntheticEvent, useState } from 'react';
import { OfferCardProps } from './offer-card.types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const calcRating = (rating: number): number => {
  const MAX_RATING = 5;
  return rating * 100 / MAX_RATING;
};

export const OfferCard = ({offer, onOfferHover}: OfferCardProps): JSX.Element => {
  const [isOfferFavorite, setIsOfferFavorite] = useState(offer.isFavorite);
  const handleFavoriteClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    setIsOfferFavorite((prevIsOfferFavorite) => !prevIsOfferFavorite);
  };

  return (

    <article className="cities__place-card place-card" onMouseOver={() => onOfferHover(offer.id)}>
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
            <span style={{ width: `${calcRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


