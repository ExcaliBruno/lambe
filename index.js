import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator';
import AppNavigator from './src/AppNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
