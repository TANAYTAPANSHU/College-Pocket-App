import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import { Switch } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const darkMapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
] 




const LocalVendorMap = () => {
  const [isDarkOn, setIsDarkOn] = React.useState(false);

  const onToggleSwitch = () => setIsDarkOn(!isDarkOn);

  return (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View style={{flexDirection:'row' , left:     0,backgroundColor:'black',padding:15  ,
      top:      0  }}>
      <Switch value={isDarkOn} onValueChange={onToggleSwitch}  color={'black'}   style={{color:'yellow',backgroundColor:'#424242',marginLeft:15  }}/>
    <Text style={{color:'white',fontSize:18,marginLeft:20 }}>
      Dark Mode
    </Text>
      </View>
    
      <MapView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        customMapStyle={isDarkOn?darkMapStyle:[]} 
        showsMyLocationButton 
        showsCompass 
        zoomEnabled
        region={{
          latitude: 13.08418,
          longitude: 77.489563,
          latitudeDelta: 0.0211,
          longitudeDelta: 0,
        }}>

        <Marker
          coordinate={{
            latitude: 13.08932,
            longitude: 77.477333,
          }}
          title="Vendor 1"
          description="Mobile number: +91-xyz-99"
        />

        <Marker
          coordinate={{
            latitude: 13.08418,
            longitude: 77.489563,
            
          }}
          title="Vendor 2"
          description="Mobile number: +91-yzx-88"
        />

        <Marker
          coordinate={{
            latitude: 13.084431,
            longitude: 77.48848,
          }}
          title="Vendor 3"
          description="Mobile number: +91-xzy-77"
        />

<Marker
          coordinate={{
            latitude: 13.084742,
            longitude: 77.486534
          }}
          title="Vendor 4"
          description="Mobile number: +91-yxv-66"
        />



      </MapView>
    </View>
  );
};

export default LocalVendorMap;

const styles = StyleSheet.create({});
