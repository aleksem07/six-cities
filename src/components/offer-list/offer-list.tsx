import { OffersSort } from '../offers-sort/offers-sort';
import { OfferCard } from '../offer-card/offer-card';
import { OfferListProps } from './offer-list.types';

export const OfferList = ({offers}: OfferListProps): JSX.Element => {
  const offerCount = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>

      <OffersSort />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer}/>
        ))}
      </div>
    </section>
  );
};
