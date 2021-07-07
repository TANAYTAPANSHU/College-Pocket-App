import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Homescreen } from '../screens/HomeScreen';
import LocalVendorMap from '../screens/LocalVendorMap';
import { News } from '../screens/News';
import CampusNews from '../screens/CampusNews';

const Stack = createStackNavigator();

const  Root = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen name="Explore" component={LocalVendorMap} />
      <Stack.Screen name="Home" component={Homescreen} />
     
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Campus" component={CampusNews} />
    </Stack.Navigator>
    )
}

export default Root
