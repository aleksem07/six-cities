import { Offer } from '../../mocks/offers.types';

export type OfferCardProps = {
  offer: Offer;
  cardType?: string;
  onOfferHover?: (offerId: string) => void;
}
