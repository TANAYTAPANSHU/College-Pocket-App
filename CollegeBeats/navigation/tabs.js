import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { News } from '../screens/News';
import { Homescreen } from '../screens/HomeScreen';
import DSC_Club from '../screens/DSC_Club';
import CampusNews from '../screens/CampusNews';
import University from '../screens/University';
import LocalVendorMap from '../screens/LocalVendorMap';

const Tab = createMaterialTopTabNavigator();

const Tabs=()=>{
return(
    <Tab.Navigator 
    initialRouteName="Home"
  
    tabBarOptions={{
      activeTintColor: 'white',
      scrollEnabled: true,
      indicatorStyle:{
       
        backgroundColor:'white',
        borderLeftWidth:2
      },
      labelStyle: {
        fontSize: 12,
      },
      style: { backgroundColor: 'black' },
    }}
    
    >
             <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Current Affairs" component={News} />
        <Tab.Screen name="Campus News" component={CampusNews} />
        <Tab.Screen name="University" component={University} />
        <Tab.Screen name="DSC Club Updates" component={DSC_Club} />
        <Tab.Screen name="Local Vendor Map" component={LocalVendorMap} />
   
    </Tab.Navigator>
)

}

export default Tabs;