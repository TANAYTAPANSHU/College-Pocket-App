import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image, Button  } from 'react-native'

export function Homescreen({navigation}) {
    

    return (
       <ScrollView >
   
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('New')  }
      />
 

       </ScrollView>
    )
}
