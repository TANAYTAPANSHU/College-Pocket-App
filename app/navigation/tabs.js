import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { News } from '../screens/News';
import { Homescreen } from '../screens/HomeScreen';
import DSC_Club from '../screens/DSC_Club';
import CampusNews from '../screens/CampusNews';
import University from '../screens/University';

const Tab = createMaterialTopTabNavigator();

const Tabs=()=>{
return(
    <Tab.Navigator 
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12,
      }
    }}
    
    >
             <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Current Affairs" component={News} />
        <Tab.Screen name="Campus News" component={CampusNews} />
        <Tab.Screen name="University" component={University} />
        <Tab.Screen name="DSC Club Updates" component={DSC_Club} />
   
    </Tab.Navigator>
)

}

export default Tabs;