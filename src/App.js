import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import LoggedOff from './routes/loggedOff';

import configureStore from './store';

const store = configureStore();

registerScreens(store, Provider);

export default async function App() {
  return new LoggedOff();
}
