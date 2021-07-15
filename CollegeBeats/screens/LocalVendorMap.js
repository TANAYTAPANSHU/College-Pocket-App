import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import {Switch} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import * as firebase from 'firebase';
import {firebaseConfig} from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  const [isDarkOn, setIsDarkOn] = React.useState(true);
  const [vendors, setVendors] = useState([]);

  const [requirement, setRequirement] = React.useState('All Vendors');
  const [mapLat , setMapLat] = useState(13.08418) 
  const [mapLng , setMapLng] = useState(77.489563) 
   const [text, onChangeText] = React.useState('')

  const onToggleSwitch = () => setIsDarkOn(!isDarkOn);

  useEffect(async () => {
    // Good!

    const myitems = firebase.database().ref('Vendors');

    myitems.on('value', datasnap => {
      setVendors(Object.values(datasnap.val()));
    });
  }, []);





  if (vendors.length !== 0) {
    mapInfo = vendors.map((e, i) => {

      if(requirement=="All Vendors")
      {
      return (
        <Marker
          key={i}
          style={{
            padding: 0,
          }}
          coordinate={{
            latitude: Object.values(e)[2],
            longitude: Object.values(e)[3],
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
              style={{flexDirection: 'column', elevation: 2, borderRadius: 10}}>
              <View
                style={{
                  flex: 1,
                  borderRadius: 10,
                  justifyContent: 'space-around',
                  padding: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 18,
                      color: '#F1913C',
                    }}>
                    {Object.values(e)[0]}
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 14,
                    color: '#F1913C',
                  }}>
                  {Object.values(e)[6]}
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  {Object.values(e)[1]}
                </Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
                  {Object.values(e)[5]}
                </Text>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
                  PhoneNo - {Object.values(e)[4]}
                </Text>
              </View>
            </View>
          </Callout>
        </Marker>
      );
        }
 else if (requirement.toLowerCase()==Object.values(e)[7].toLowerCase()){
                  
           
                  return (
                    <Marker
                      key={i}
                      style={{
                        padding: 0,
                      }}
                      coordinate={{
                        latitude: Object.values(e)[2],
                        longitude: Object.values(e)[3],
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
                          style={{flexDirection: 'column', elevation: 2, borderRadius: 10}}>
                          <View
                            style={{
                              flex: 1,
                              borderRadius: 10,
                              justifyContent: 'space-around',
                              padding: 10,
                            }}>
                            <View
                              style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                              }}>
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  color: 'white',
                                  fontSize: 18,
                                  color: '#F1913C',
                                }}>
                                {Object.values(e)[0]}
                              </Text>
                            </View>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: 14,
                                color: '#F1913C',
                              }}>
                              {Object.values(e)[6]}
                            </Text>
            
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: 12,
                                marginTop: 5,
                              }}>
                              {Object.values(e)[1]}
                            </Text>
                            <Text
                              style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
                              {Object.values(e)[5]}
                            </Text>
                            <Text
                              style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
                              PhoneNo - {Object.values(e)[4]}
                            </Text>
                          </View>
                        </View>
                      </Callout>
                    </Marker>
                  );
                }
              
    });
  }



const getGeoFromPin = (pincode) => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I`)
    .then((response) => response.json())
    .then((json) => {
      
      if(json.status=="OK")
      {
       console.log(json);
        setMapLat(json.results[0].geometry.location.lat);
        setMapLng(json.results[0].geometry.location.lng);
       
      }
      else
      {
        console.log("Your Data is not found")
      }
   
    })
    .catch((error) => {
      console.error(error);
    });
};




  return (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View style={{height:45}}> 
<ScrollView horizontal style={{flex:1,backgroundColor:'#25303E' }} contentContainerStyle={{justifyContent:'center',alignItems:'center' }}>
<TouchableOpacity activeOpacity={0.80}  onPress={()=> setRequirement('All Vendors')}  style={{backgroundColor:'black',marginHorizontal:2,paddingHorizontal:15,justifyContent:'center',height:35,borderRadius:10  }}>
  <Text style={{color:requirement=="All Vendors"?'#399DE3':'white',fontSize:15,fontWeight:'bold' }}>
All Vendors{' '} <Ionicons name="business" size={18} color={requirement=="All Vendors"?'#399DE3':'white'} />
  </Text>
</TouchableOpacity>
<TouchableOpacity   activeOpacity={0.80} onPress={()=> setRequirement('Food')}  style={{backgroundColor:'black',marginHorizontal:2,paddingHorizontal:15,justifyContent:'center',height:35,borderRadius:10  }}>
  <Text style={{color:requirement=="Food"?'#399DE3':'white',fontSize:15,fontWeight:'bold' }}>
Food{' '} <Ionicons name="fast-food" size={18} color={requirement=="Food"?'#399DE3':'white'} />
  </Text>
</TouchableOpacity>
<TouchableOpacity activeOpacity={0.80} onPress={()=> setRequirement('Developer')}  style={{backgroundColor:'black',marginHorizontal:2,paddingHorizontal:15,justifyContent:'center',height:35,borderRadius:10  }}>
  <Text style={{color:requirement=="Developer"?'#399DE3':'white',fontSize:15,fontWeight:'bold' }}>
Developer  <Ionicons name="logo-octocat" size={18} color={requirement=="Developer"?'#399DE3':'white'} />
  </Text>
</TouchableOpacity>
<TouchableOpacity activeOpacity={0.80} onPress={()=> setRequirement('House Help')}  style={{backgroundColor:'black',marginHorizontal:2,paddingHorizontal:15,justifyContent:'center',height:35,borderRadius:10  }}>
  <Text style={{color:requirement=="House Help"?'#399DE3':'white',fontSize:15,fontWeight:'bold' }}>
House Help <Ionicons name="home" size={18} color={requirement=="House Help"?'#399DE3':'white'} />
  </Text>
</TouchableOpacity>


</ScrollView>
</View>

      <View
        style={{
          flexDirection: 'row',

          backgroundColor: isDarkOn ? '#25303E' : 'transparent',
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
            placeholderTextColor="grey"></TextInput>
           <TouchableOpacity onPress={() => getGeoFromPin(text)} > 
          <Text>
           <Ionicons name="search" size={20} color="white" />
         

          </Text>
          </TouchableOpacity>
        </View>
        {/*
        <View
          style={{
            flexDirection: 'row',
            left: 0,
            flex: 2.1,
            marginLeft: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: isDarkOn ? 'black' : 'transparent',
            paddingVertical: 10,
            top: 0,
            borderRadius: 5,
            borderWidth: isDarkOn ? 0.5 : 0.5,
            borderColor: isDarkOn ? 'white' : 'black',
            justifyContent: 'space-around',
          }}>
          <Switch
            value={isDarkOn}
            onValueChange={onToggleSwitch}
            color={isDarkOn ? 'black' : 'white'}
            style={{
              backgroundColor: isDarkOn ? 'white' : '#424242',
              height: 25,
              width: 35,
            }}
          />
          <Text
            style={{
              color: isDarkOn ? 'white' : 'black',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Dark Mode
          </Text>
        </View>
          */}
      </View>
         
      <MapView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        customMapStyle={isDarkOn ? darkMapStyle : []}
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
