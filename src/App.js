import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import sagas from './sagas';

import LoggedOff from './routes/loggedOff';

import { configureStore, sagaMiddleware } from './store';

const store = configureStore();

sagaMiddleware.run(sagas);

registerScreens(store, Provider);

export default async function App() {
  return new LoggedOff();
}
