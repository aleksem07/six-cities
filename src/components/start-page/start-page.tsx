import Header from '../header/header';
import Tabs from '../tabs/tabs';

function StartPage(): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
      </main>

    </div>
  );
}

export default StartPage;
