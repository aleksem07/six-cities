import { OffersSort } from '../offers-sort/offers-sort';
import { OfferCard } from '../offer-card/offer-card';
import { OfferListProps } from './offer-list.types';
import { useState } from 'react';

export const OfferList = ({offers}: OfferListProps): JSX.Element => {
  const [hoveredOffer, setHoveredOffer] = useState<string>('');
  const offerCount = offers.length;

  // eslint-disable-next-line no-console
  console.log(hoveredOffer);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>

      <OffersSort />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onOfferHover={setHoveredOffer}/>
        ))}
      </div>
    </section>
  );
};
