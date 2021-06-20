import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image  } from 'react-native'

export function Homescreen(props) {
    

    return (
       <ScrollView >
      <View style={{borderWidth:1,borderBottomColor:'#e0e0e0',elevation:2 }}> 
       <View>
           <Image 
            source={{uri:'https://imgk.timesnownews.com/story/narendramodi-newianspic_7.jpg?tr=w-600,h-450,fo-auto'}}
            style={{
                height:250,
                width:'100%',
                resizeMode:'cover'
            }}
           />
       </View>
      
      <View style={{backgroundColor:'white',padding:15 }}>
          <Text numberOfLines={2} style={{fontSize:21,fontWeight:'bold' }}>
          PM Narendra Modi’s approval rating highest among world leaders, says survey
          </Text>  
    
      <Text style={{fontSize:11,marginTop:10 }}>
          1 hour ago | <Text  style={{color:"red"}}>Science {'&'} Environment </Text>
      </Text>


      </View>



      </View>
       
      


       </ScrollView>
    )
}
