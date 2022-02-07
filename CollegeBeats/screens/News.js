/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as firebase from 'firebase';
import {collection, doc, onSnapshot} from 'firebase/firestore';
import {Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
export function News(props) {
  const [mapLat, setMapLat] = useState(0);
  const [mapLng, setMapLng] = useState(0);

  const [details, setDetails] = useState({
    name: '',
    business: '',
    address: '',
    pin: '',
    phone: '',
    description: '',
  });

  const businessType = [
    {label: 'Food', value: 'Food'},
    {label: 'Developer', value: 'Developer'},
    {label: 'House Help', value: 'House Help'},
    {label: 'Grocery', value: 'Grocery'},
  ];

  const SLIDER_WIDTH = Dimensions.get('window').width;

  const getGeoFromPin = () => {
    let businessAddress = details.address +","+details.pin;

    console.log(businessAddress,typeof businessAddress , "check address",`https://maps.googleapis.com/maps/api/geocode/json?address=${
       businessAddress
      }&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I`)
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
       businessAddress
      }&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I`,
    )
      .then(response => response.json())
      .then(json => {
        if (json.status === 'OK') {
          console.log(json.results[0].geometry);
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

  async function publishData() {
    const newReference = await firebase.database().ref('Vendors').push();
    getGeoFromPin();
    if (
      details.address &&
      details.pin &&
      details.name &&
      details.phone &&
      mapLat &&
      mapLng
    ) {
      newReference
        .set({
          address: details.address,
          pin: details.pin,
          name: details.name,
          phone: details.phone,
          lat: mapLat,
          long: mapLng,
          desc: details.description,
          type: details.business,
          approved: true,
        })
        .then(() => {
          console.log('done');
          createSubmitAlert();
        })
        .catch(error => {
          console.log(error, 'Tanay');
        });
    } else {
      createFillAlert();
    }
  }

   const createSubmitAlert = () =>
    Alert.alert(
      "Your Data is Published",
      "Will Take some Time to update",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

      const createFillAlert = () =>
    Alert.alert(
      "Error",
      "You have to fill all the fields",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <>
      {console.log(details)}
      <StatusBar backgroundColor="black" />
      <ScrollView style={{backgroundColor: '#080808'}}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/logo.png?alt=media&token=07c54632-f5b2-422e-b922-12cbefa6086c',
          }}
          style={{
            flex: 1,
            height: 250,
          }}
        />

        <View
          style={{
            width: SLIDER_WIDTH * 0.9,
            padding: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#eadf91',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Name of the business"
            placeholderTextColor="white"
            value={details.name}
            onChangeText={value => setDetails({...details, name: value})}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              color: 'white',
              fontSize: 16,
            }}
          />

          <Dropdown
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              marginTop: 20,
              color: 'black',
              fontSize: 12,
              padding: 5,
              backgroundColor: 'white',
            }}
            placeholderStyle={{
              fontSize: 16,
              color: 'black',
            }}
            selectedTextStyle={{
              fontSize: 16,
              marginLeft: 10,
              color: 'black',
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 16,
              color: 'black',
            }}
            data={businessType}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select the type of Business"
            searchPlaceholder="Search..."
            value={details.business}
            onChange={item => {
              setDetails({...details, business: item.value});
            }}
          />
          <TextInput
            placeholder="Address"
            placeholderTextColor="white"
            onChangeText={value => setDetails({...details, address: value})}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              color: 'white',
              fontSize: 16,
            }}
          />

          <TextInput
          keyboardType="numeric"
            placeholder="Pincode"
            placeholderTextColor="white"
            onChangeText={value => setDetails({...details, pin: value})}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              color: 'white',
              fontSize: 16,
            }}
          />

          <TextInput
            placeholder="Phone"
            keyboardType="numeric"
            placeholderTextColor="white"
            onChangeText={value => setDetails({...details, phone: value})}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              color: 'white',
              fontSize: 16,
            }}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor="white"
            onChangeText={value => setDetails({...details, description: value})}
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              marginVertical: 10,
              color: 'white',
              fontSize: 16,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => publishData()}
          style={{
            backgroundColor: '#ffcb2d',
            width: SLIDER_WIDTH * 0.4,
            marginVertical: 20,
            alignSelf: 'center',
            alignItems: 'center',
            elevation: 4,
            paddingVertical: 12,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
