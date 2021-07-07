import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';
import {ScrollView} from 'react-native';
import Searchbar from './components/SearchBar';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import DSC_Club from './screens/DSC_Club';
import LocalVendorMap from './screens/LocalVendorMap';
import { News } from './screens/News';

const Stack = createStackNavigator();

export default function App(props) {


  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
   
       <Stack.Screen name="HomeTabs" component={Tabs} />
       <Stack.Screen name="Explore" component={LocalVendorMap} />
       <Stack.Screen  name="New" component= {News} />           
      <Stack.Screen name="DSC" component={DSC_Club} />
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}
