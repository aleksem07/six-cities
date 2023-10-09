import OfferCountProps from '../../types/offer-count.types';
import PlaceCard from '../place-card/place-card';

function Cities({offerCount}: OfferCountProps): JSX.Element {
  return (
    <div className='cities'>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offerCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">

            <PlaceCard premium img="img/apartment-01.jpg" price="120" cardName='Beautiful &amp; luxurious apartment at great location' apartment/>
            <PlaceCard img="img/room.jpg" price="80" bookmarks cardName='Wood and stone place'/>
            <PlaceCard img="img/apartment-02.jpg" price="132" cardName='Canal View Prinsengracht' apartment/>
            <PlaceCard premium img="img/apartment-03.jpg" price="180" cardName='Nice, cozy, warm big bed apartment' />
            <PlaceCard img="img/room.jpg" price="80" bookmarks cardName='Wood and stone place'/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
