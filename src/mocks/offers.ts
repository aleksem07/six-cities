import { Offer } from './offers.types';

export const offers: Offer[] = [
  {
    id:  `${Date.now()}`,
    title: 'Beautiful luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: '../img/apartment-01.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 13
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.342499,
      zoom: 16,
    },
    isPremium: false,
    rating: 4,
    isFavorite: false,
  },
  {
    id:  `${Date.now()}`,
    title: 'Wood and stone place',
    type: 'house',
    price: 80,
    previewImage: 'img/room.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 13
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isPremium: true,
    rating: 2.5,
    isFavorite: false,
  },
  {
    id: '2186b3e2-db83-4627-be97-2632937550c7',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 192,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
  },
  {
    id: '68eabb8a-fa4a-400d-8826-5f3039a37707',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 453,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
  },
];
