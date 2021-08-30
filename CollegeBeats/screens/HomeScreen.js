import React from 'react';
import {ScrollView, Text, View, StyleSheet, Image, Button} from 'react-native';

export function Homescreen({navigation}) {
  return (
    <View style={{backgroundColor: '#0F0F0F'}}>
      <ScrollView style={{backgroundColor: '#0F0F0F'}}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/logo.png?alt=media&token=07c54632-f5b2-422e-b922-12cbefa6086c',
          }}
          style={{
            flex: 1,
            height: 300,
            borderColor: 'white',
            borderRadius: 10,
            borderWidth: 1,
          }}
        />

        <View style={{marginTop: 30}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/2.png?alt=media&token=42d98288-47cd-4c3e-8204-473d42903b8d',
            }}
            style={{
              flex: 1,
              height: 380,
              borderColor: 'white',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/Digital%20Platform%20For%20Local%20Businesses%20To%20grow.png?alt=media&token=6da7cea4-7424-40fb-9331-ee0e95949789',
            }}
            style={{
              flex: 1,
              height: 380,
              borderColor: 'white',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </View>

        <View style={{marginTop: 30, marginBottom: 100}}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/Digital%20Platform%20For%20Local%20Businesses%20To%20grow%20(1).png?alt=media&token=34e5a21d-a37b-4be7-9b09-137bd5acbda7',
            }}
            style={{
              flex: 1,
              height: 380,
              borderColor: 'white',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
