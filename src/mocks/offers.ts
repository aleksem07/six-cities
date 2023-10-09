import { Offer } from './offers.types';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Paris',
    type: 'City',
    price: 100,
    previewImage: 'img/offer-1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 12
      },
    },
    isPremium: false,
    rating: 4,
    isFavorite: false,
  }
];
