import { AppProps } from '../../types/offer-count.types';
import Cities from '../../components/cities/cities';
import Tabs from '../../components/tabs/tabs';

function Main({offers}: AppProps): JSX.Element {
  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <Tabs />
      <Cities offers={offers} />
    </main>
  );
}

export default Main;
