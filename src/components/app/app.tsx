import Main from '../main/main';
import AppProps from './app.types';

function App({offerCount}: AppProps): JSX.Element {
  return <Main offerCount={offerCount}/>;
}

export default App;
