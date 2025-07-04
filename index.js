import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
//import Navigator from './src/Navigator';
import AppNavigator from './src/AppNavigator';
import { name as appName } from './app.json';

import storeConfig from './src/store/storeConfig';

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
