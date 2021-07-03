import React ,{useEffect} from 'react';
import { useState } from 'react';
import {View, Text} from 'react-native';
import firebase from '../firebase'


const DSC_Club = () => {
  const [data , setData] = useState([])
  const [loading,setLoading] = useState(true);

  const myitems =firebase.firestore().collection("Vendors")

  function getData()
    {
      myitems.onSnapshot((snap)=>{
      const items=[];
      snap.forEach((doc)=>{
        items.push(doc.data);
      } )

      } )
    }

  useEffect(async () => {
 
getData();
  if(data.length!==0)
  {
    console.log(yes);
  }

  

  }, []);

  return (
    <View>
      <Text>DSC Club events information</Text>
    </View>
  );
};

export default DSC_Club;
