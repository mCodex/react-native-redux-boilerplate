import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

// import { setCustomText, setCustomView } from 'react-native-global-props';

import Home from './App';

// const customTextProps = {
//   style: {
//     fontFamily: 'Helvetica Neue'
//   }
// };

export function registerScreens(store: {}, Provider: {}) { //eslint-disable-line
  // setCustomText(customTextProps);
  Navigation.registerComponent('home', () => Home, store, Provider);
}

// export function registerScreenVisibilityListener() {
//   new ScreenVisibilityListener({
//     // willAppear: ({ screen }) =>,
//     didAppear: ({
//       screen, startTime, endTime, commandType
//     }) => {
//       const screenName = screen.split('.');
//       return trackPage(screenName[2]);
//     },
//     // willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
//     // didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
//   }).register();
// }
