import { Navigation } from 'react-native-navigation';

import Home from './App';

export function registerScreens(store: {}, Provider: {}) { //eslint-disable-line
  Navigation.registerComponentWithRedux(
    'home',
    () => Home,
    Provider,
    store
  );
}
