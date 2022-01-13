import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';


const DSC_Club = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Text>DSC Club events information</Text>
    </View>
  );
};

export default DSC_Club;
