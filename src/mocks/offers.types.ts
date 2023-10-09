export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: CityLocation;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: CityLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
