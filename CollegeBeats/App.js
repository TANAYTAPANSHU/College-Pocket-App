/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import DSC_Club from './screens/DSC_Club';
// eslint-disable-next-line prettier/prettier
import LocalVendorMap from './screens/LocalVendorMap';
import {News} from './screens/News';
import {ThemeProvider} from './util/ThemeManager';
const Stack = createStackNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeTabs" component={Tabs} />
        <Stack.Screen name="Explore" component={LocalVendorMap} />
        <Stack.Screen name="New" component={News} />
        <Stack.Screen name="DSC" component={DSC_Club} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
