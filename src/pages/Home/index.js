
import * as React from 'react';
import { View, Text, SafeAreaView,Image } from 'react-native';
import Lottie from 'lottie-react-native';
import Animation from './Animation.json'

function Home() {
  return (
    <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"white"}}>
        <Lottie resizeMode="contain" style={{width:"100%"}} source={Animation} autoPlay loop/>
        <Text>Clínica Médica de Luziânia</Text>
    </SafeAreaView>
  );
}

export default Home;