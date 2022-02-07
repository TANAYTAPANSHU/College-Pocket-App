import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {News} from '../screens/News';
import {Homescreen} from '../screens/HomeScreen';
import DSC_Club from '../screens/DSC_Club';
import CampusNews from '../screens/CampusNews';
import University from '../screens/University';
import LocalVendorMap from '../screens/LocalVendorMap';
import Root from './root';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        scrollEnabled: true,
        indicatorStyle: {
          backgroundColor: 'white',
          borderLeftWidth: 2,
        },
        labelStyle: {
          fontSize: 14,
        },
        style: {backgroundColor: 'black',paddingBottom:20 },
      }}>
      <Tab.Screen name="Home  🏠" component={Homescreen} />
      <Tab.Screen name="Baazar 🗺️" component={LocalVendorMap} />
      <Tab.Screen name="Layout 👨🏻‍💼" component={News} />
    </Tab.Navigator>
  );
};

export default Tabs;
