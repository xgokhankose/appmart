import React from 'react';
import Lottie from 'lottie-react-native';
import { View } from 'react-native';

const Loading = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Lottie
        style={{ width: 50, height: 50 }}
        source={require('../../assets/loading.json')}
        autoPlay
      />
    </View>
  );
};

export default Loading;
