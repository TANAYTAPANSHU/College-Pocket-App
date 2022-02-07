/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View, StyleSheet, Image, Button,  Linking, Touchable} from 'react-native';
import {ThemeContext} from '../util/ThemeManager';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { TouchableOpacity } from 'react-native-gesture-handler';
export function Homescreen({navigation}) {
  const {theme} = React.useContext(ThemeContext);

  const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.9 );

const ImageData = ['https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/logo.png?alt=media&token=07c54632-f5b2-422e-b922-12cbefa6086c', 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/2.png?alt=media&token=42d98288-47cd-4c3e-8204-473d42903b8d','https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/Digital%20Platform%20For%20Local%20Businesses%20To%20grow.png?alt=media&token=6da7cea4-7424-40fb-9331-ee0e95949789', 'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/Digital%20Platform%20For%20Local%20Businesses%20To%20grow%20(1).png?alt=media&token=34e5a21d-a37b-4be7-9b09-137bd5acbda7'];


 const [index, setIndex] = React.useState(0);
 
 const OpenPhone = async () => {
  await Linking.openURL(`tel:${9123114339}`);
};

  const _renderItem = (props) => {
    return (
    <View >
          <Image
          resizeMode='cover'
            source={{
              uri:  ImageData[props.index],
            }}
            style={{
              flex: 1,
              height:ITEM_WIDTH * 1,
              width:ITEM_WIDTH,
              borderColor: 'white',
              borderRadius: 10,
              borderWidth: 1,
            }}
          />
        </View>
    );
  }

  return (
    <View style={{backgroundColor: theme === 'light' ? '#FFF' : '#0F0F0F',paddingTop:100,height:'100%' }}>
 <View style={{
   position:'absolute',
   top:0,
   backgroundColor:'#201f1f',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   width:SLIDER_WIDTH,
   paddingVertical:5,
   paddingHorizontal:15

 }}
>
<View style={{flexDirection:'row',alignItems:'center' }}>
<Image style={{height:60,width:60 }} resizeMode="contain" source={{uri:'https://firebasestorage.googleapis.com/v0/b/native-collegebeats.appspot.com/o/logo%20main.png?alt=media&token=fe333277-a2f3-4ff5-9337-7ffcccf20ff6'}} /> 
<Text style={{color:'#f0e596',fontWeight:'bold',fontSize:20,marginLeft:5 }}>Super Connector</Text>
</View>
<TouchableOpacity style={{alignItems:'center',backgroundColor:'rgba(0,0,0,0.9)',padding:12,borderRadius:8,flexDirection:'row'  }} onPress={() => OpenPhone() }>
  <Text style={{color:'white',fontSize:13,fontWeight:'bold' }}>Help </Text>
  <Text style={{color:'white',fontSize:10,fontWeight:'bold',marginLeft:6 }}>📞 </Text>
</TouchableOpacity>

</View>
      <ScrollView
        style={{backgroundColor: theme === 'light' ? '#FFF' : '#0F0F0F',paddingVertical:10,marginTop:10 }}>

 <Carousel
        data={ImageData}
        autoplay={true}
        autoplayInterval={1000}
        renderItem={(index) => _renderItem(index)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={5}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}/>
    
 <TouchableOpacity onPress={() => {navigation.navigate("Baazar 🗺️")}  } style={{backgroundColor:'#ffcb2d',width:SLIDER_WIDTH*0.9,marginTop:70,alignSelf:'center',alignItems:'center',elevation:4,borderRadius:10,paddingVertical:18 }}>
  <Text style={{fontWeight:'bold',fontSize:18 }}>Explore the Bazaar 🏟️</Text>
 </TouchableOpacity>


      </ScrollView>
    </View>
  );
}
