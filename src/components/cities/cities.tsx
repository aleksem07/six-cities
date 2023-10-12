import { AppProps } from '../../types/offer-count.types';
import { OfferList } from '../offer-list/offer-list';

function Cities({offers}: AppProps): JSX.Element {
  return (
    <div className='cities'>
      <div className="cities__places-container container">
        <OfferList offers={offers} />
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
