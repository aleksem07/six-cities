import MainProps from './main.types';
import Cities from '../cities/cities';
import Header from '../header/header';
import Tabs from '../tabs/tabs';

function Main({offerCount}: MainProps): JSX.Element {
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
