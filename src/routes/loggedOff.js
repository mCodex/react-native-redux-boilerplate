import { Navigation } from 'react-native-navigation';

export default function LoggedOffRoutes() {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'homeComponent',
              screen: 'home',
            }
          }
        ],
        // options: {}
      }
    }
  });
}
