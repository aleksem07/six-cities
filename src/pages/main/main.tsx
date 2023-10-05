import OfferCountProps from '../../types/offer-count.types';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';

function Main({offerCount}: OfferCountProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <Cities offerCount={offerCount} />
      </main>

    </div>
  );
}

export default Main;
