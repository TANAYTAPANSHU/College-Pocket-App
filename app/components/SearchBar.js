import React from 'react'
import { TextInput, View, StyleSheet  } from 'react-native'

export default function Searchbar(props) {
    

    return (
        <View style={styles.container}>
            <TextInput  style={styles.searchInput} placeholder="Search Here...."   />
        </View>
    )
}


const styles = StyleSheet.create({
  
     container:{
          width:'100%',
          height:50,
        paddingLeft:8,
        fontSize:16
     },
     searchInput:{
         width:'100%',
         height:'100%',
         paddingLeft:8,
         fontSize:16
     }

})
