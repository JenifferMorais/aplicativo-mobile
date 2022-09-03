
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home/index"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{gestureEnabled:false, detachPreviousScreen:false, headerLeft:null, headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;