import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import TiendaScreen from './TiendaScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Tienda" component={TiendaScreen} options={{title: "Tienda"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Detalles"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}