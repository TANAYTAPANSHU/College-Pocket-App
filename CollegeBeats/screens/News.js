import React from 'react'
import { View,Text  } from 'react-native'

const getMoviesFromApi = () => {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=800008&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I')
      .then((response) => response.json())
      .then((json) => {
       console.log(json.results[0].geometry.location.lat);
       console.log(json.results[0].geometry.location.lng);
      })
      .catch((error) => {
        console.error(error);
      });
  };

export function News(props) {
    getMoviesFromApi();

    return (
        <View>
            <Text>
             Will have all the latest current Affairs
            </Text>
        </View>
    )
}
