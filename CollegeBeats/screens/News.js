import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';

{
  /*
const getMoviesFromApi = () => {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=800008&key=AIzaSyDSDL2EvvFywku3yT16chJkSYbZDisTA7I')
      .then((response) => response.json())
      .then((json) => {
       console.log("hey");
     
      })
      .catch((error) => {
        console.error(error);
      });
  };
*/
}
export function News(props) {
  const [name, setName] = useState('');
  const [pin, setPin] = useState();

  {
    console.log(name);
  }

  return (
    <>
      <StatusBar backgroundColor="black" />
      <ScrollView style={{backgroundColor: '#0F0F0F'}}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/logo.png?alt=media&token=07c54632-f5b2-422e-b922-12cbefa6086c',
          }}
          style={{
            flex: 1,
            height: 300,
          }}
        />
        <View style={{marginTop: 30, padding: 10}}>
          <TextInput
           
            style={{
              width: '90%',
              borderRadius: 5,
              
              height: 50,
              color: 'white',
              backgroundColor: '#1A1A1A',
              borderColor: '#88774B',
              borderWidth: 2,

              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 5,
              paddingVertical: 10,
            }}
            value={name}
            onChange={setName}
            placeholder="Name of Person/Business"
            placeholderTextColor="grey"></TextInput>
               <TextInput
           style={{
             width: '90%',
             borderRadius: 5,
             marginTop:15,
             
             height: 50,
             color: 'white',
             backgroundColor: '#1A1A1A',
             borderColor: '#88774B',
             borderWidth: 2,

             flexDirection: 'row',
             justifyContent: 'flex-end',
             padding: 5,
             paddingVertical: 10,
           }}
           value={pin}
           onChange={setPin}
           placeholder="Pincode"
           placeholderTextColor="grey"></TextInput>
        </View>
      </ScrollView>
    </>
  );
}
