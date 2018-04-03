import { Navigation } from 'react-native-navigation';

export default function LoggedOffRoutes() {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'home',
      title: 'Home',
      label: 'Home'
    },
    animationType: 'fade',
    // appStyle: {
    //   navBarBackgroundColor: '#172619',
    //   orientation: 'portrait',
    //   screenBackgroundColor: 'transparent',
    // }
  });
}
