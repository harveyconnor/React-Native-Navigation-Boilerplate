import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './Welcome';

export default () => {
  Navigation.registerComponent('RNBoilerPlate.Main.Welcome', () => WelcomeScreen);
};
