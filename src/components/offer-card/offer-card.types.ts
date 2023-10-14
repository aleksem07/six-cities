import { Offer } from '../../mocks/offers.types';

export type OfferCardProps = {
  offer: Offer;
  onOfferHover: (offerId: string) => void;
  cardType?: string;
}
