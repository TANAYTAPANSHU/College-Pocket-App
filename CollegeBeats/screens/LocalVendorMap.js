/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from '../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LogBox} from 'react-native';
import {ThemeContext} from '../util/ThemeManager';

LogBox.ignoreLogs(['Setting a timer']);
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

let mapInfo;

const LocalVendorMap = () => {
  const [vendors, setVendors] = useState([]);

  const [requirement, setRequirement] = React.useState('All Vendors');
  const [mapLat, setMapLat] = useState(13.08418);
  const [mapLng, setMapLng] = useState(77.489563);
  const [text, onChangeText] = React.useState('');
  const {theme} = React.useContext(ThemeContext);
  const {toggleTheme} = React.useContext(ThemeContext);
  function fetchData() {
    firebase
      .database()
      .ref('Vendors')
      .on('value', datasnap => {
        setVendors(Object.values(datasnap.val()));
      });
  }

  async function publishData() {
    const newReference = await firebase.database().ref('Vendors').push();

    newReference
      .set({
        address: 'Thammenahalli Village, Bengaluru, Karnataka 560107',
        lat: 13.093894087332437,
        long: 77.48991477748975,
        name: 'mahesh Kumar',
        work: 'developer',
      })
      .then(() => console.log('done'));
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (vendors.length !== 0) {
    mapInfo = vendors.map((e, i) => {
      return (
        <Marker
          key={i}
          style={{
            padding: 0,
          }}
          coordinate={{
            latitude: parseFloat(e.lat, 10),
            longitude: parseFloat(e.long, 10),
          }}>

          <Callout
            tooltip={true}
            style={{
              flex: 1,
              position: 'relative',
              opacity: 0.85,
              flexDirection: 'row',
              backgroundColor: 'black',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#F1913C',
                  }}>
                  {e.name}
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    color: '#F1913C',
                  }}>
                  {e.address}
                </Text>
                {e.phone ? (
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 10,
                      color: 'green',
                    }}>
                    {e.phone}
                  </Text>
                ) : null}
              </View>
            </View>
          </Callout>
        </Marker>
      );
    });
  }
  const getGeoFromPin = pincode => {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I`,
    )
      .then(response => response.json())
      .then(json => {
        if (json.status === 'OK') {
          console.log(json);
          setMapLat(json.results[0].geometry.location.lat);
          setMapLng(json.results[0].geometry.location.lng);
        } else {
          console.log('Your Data is not found');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View style={{height: 45}}>
        <ScrollView
          horizontal
          style={{flex: 1, backgroundColor: '#25303E'}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => toggleTheme()}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 2,
              paddingHorizontal: 15,
              justifyContent: 'center',
              height: 35,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: requirement === 'All Vendors' ? '#399DE3' : 'white',
                fontSize: 15,
                marginRight: 5,
                fontWeight: 'bold',
              }}>
              All Vendors{' '}
              <Icon
                name="building"
                size={20}
                color={requirement === 'All Vendors' ? '#399DE3' : 'white'}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={publishData}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 2,
              paddingHorizontal: 15,
              justifyContent: 'center',
              height: 35,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: requirement === 'Food' ? '#399DE3' : 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Food{' '}
              <MaterialCommunityIcons
                name="food"
                size={18}
                color={requirement === 'Food' ? '#399DE3' : 'white'}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setRequirement('Developer')}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 2,
              paddingHorizontal: 15,
              justifyContent: 'center',
              height: 35,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: requirement === 'Developer' ? '#399DE3' : 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Developer{' '}
              <MaterialCommunityIcons
                name="dev-to"
                size={18}
                color={requirement === 'Developer' ? '#399DE3' : 'white'}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setRequirement('House Help')}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 2,
              paddingHorizontal: 15,
              justifyContent: 'center',
              height: 35,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: requirement === 'House Help' ? '#399DE3' : 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              House Help{' '}
              <MaterialCommunityIcons
                name="human-greeting"
                size={18}
                color={requirement === 'House Help' ? '#399DE3' : 'white'}
              />
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',

          paddingHorizontal: 5,
        }}>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'black',
            borderWidth: 1,
            marginHorizontal: 2,
            borderRadius: 10,
            borderColor: 'white',
          }}>
          <TextInput
            style={{
              width: '90%',

              color: 'white',

              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 5,
              paddingVertical: 10,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="search people by locality, pincode/zipcode"
            placeholderTextColor="grey"
          />
          <TouchableOpacity onPress={() => getGeoFromPin(text)}>
            <Text>
              <MaterialCommunityIcons
                name="search-web"
                size={20}
                color="white"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        customMapStyle={darkMapStyle}
        showsMyLocationButton
        showsCompass
        zoomEnabled
        loadingEnabled
        loadingIndicatorColor="#606060"
        loadingBackgroundColor="#FFFFFF"
        region={{
          latitude: mapLat,
          longitude: mapLng,
          latitudeDelta: 0.0211,
          longitudeDelta: 0,
        }}>
        {mapInfo}
      </MapView>
    </View>
  );
};

export default LocalVendorMap;
