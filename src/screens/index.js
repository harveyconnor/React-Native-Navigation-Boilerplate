import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './Welcome';
import withApollo from '../utils/ApolloWrapper';

export default () => {
	Navigation.registerComponent('RNBoilerPlate.Main.Welcome', () => withApollo(WelcomeScreen));
};
