import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import {Switch} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import * as firebase from 'firebase';
import {firebaseConfig} from '../config';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const darkMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

let mapInfo ;

const LocalVendorMap = () => {
  const [isDarkOn, setIsDarkOn] = React.useState(true);
  const [vendors, setVendors] = useState([]);
  const [vendorparse,setVendorParse] = useState([]);

  const onToggleSwitch = () => setIsDarkOn(!isDarkOn);
  

  useEffect(async() => {
    // Good!

 
    const myitems = firebase.database().ref('Vendors');

    myitems.on('value', datasnap => {
      setVendors(Object.values(datasnap.val()));
    });
   
  
   


  }, []);

 
if(vendors.length!==0)
{
  console.log("Length is ",Object.values(vendors[0]) )



 
mapInfo = vendors.map((e,i) => {
    return(
      <Marker
      key={i}
      style={{
        padding:0
      }}
      coordinate={{
        latitude: Object.values(e)[2],
        longitude: Object.values(e)[3],
      }}
   
    >
      <Callout tooltip={true} style={{ flex: 1, position: 'relative',opacity:0.85}} > 
      <View style={{flexDirection:'column',elevation:2   }} >
        <View style={{backgroundColor:'#283779',flex:1,borderRadius:10,justifyContent:'space-around' ,padding:10 }}>
    
          <Text style={{fontWeight:'bold',color:'white',fontSize:18 ,color:'#F1913C' }} >{Object.values(e)[0]}</Text>
          <Text style={{fontWeight:'bold',color:'white',fontSize:14 ,color:'#F1913C' }} >{Object.values(e)[6]}</Text>

          <Text style={{fontWeight:'bold',color:'white',fontSize:12,marginTop:5 }} >{Object.values(e)[1]}</Text>
        <Text style={{fontWeight:'bold',color:'white',fontSize:12 }} >{Object.values(e)[5]}</Text>
        <Text style={{fontWeight:'bold',color:'white',fontSize:12 }} >PhoneNo - {Object.values(e)[4]}</Text>
    
        </View>
        </View>
      </Callout>
      </Marker>
    )

  })
   
     console.log(mapInfo[0]);


}
  return (
    <View style={{height: windowHeight, width: windowWidth}}>
    <View style={{flexDirection:'row' , justifyContent:'center' ,backgroundColor:isDarkOn ?'#25303E':'transparent',alignItems:'center',paddingTop:5    }}>
      <View
        style={{
          flexDirection: 'row',
          left: 0,
          width:'45%',
          backgroundColor: isDarkOn ? '#2754BA':'transparent',
          paddingVertical:10,
          top: 0,
          borderRadius:5,
           borderWidth: isDarkOn ? 1 : 2,
          borderColor:isDarkOn ? 'white':'black',
          justifyContent:'space-around'
        }}>
   
        <Switch
          value={isDarkOn}
          onValueChange={onToggleSwitch}
          color={'#21469A'}
          style={{ backgroundColor: isDarkOn ?'#F1913C': '#424242' }}
        />
        <Text style={{color: isDarkOn?'white':'black', fontSize: 18 ,fontWeight:'bold'}}>
          Dark Mode
        </Text>
      </View>
      </View>
      <MapView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        customMapStyle={isDarkOn ? darkMapStyle : []}
        showsMyLocationButton
        showsCompass
        zoomEnabled
        region={{
          latitude: 13.08418,
          longitude: 77.489563,
          latitudeDelta: 0.0211,
          longitudeDelta: 0,
        }}>
          {mapInfo}
     {/*
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
            longitude: 77.486534,
          }}
          title="Vendor 4"
          description="Mobile number: +91-xyz-88"
        />

 */}
      </MapView>
    </View>
  );
};

export default LocalVendorMap;

const styles = StyleSheet.create({});
