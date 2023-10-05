import Main from '../../pages/main/main';
import OfferCountProps from '../../types/offer-count.types';

function App({offerCount}: OfferCountProps): JSX.Element {
  return <Main offerCount={offerCount}/>;
}

export default App;
