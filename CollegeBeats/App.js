import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import {enableScreens} from 'react-native-screens';
import {ScrollView} from 'react-native';
import Searchbar from './components/SearchBar';

export default function App(props) {
  enableScreens();

  return (
    <ScrollView>
      {/*  <Searchbar /> */}
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ScrollView>
  );
}
