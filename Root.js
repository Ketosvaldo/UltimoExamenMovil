import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import TiendaScreen from './TiendaScreen';

const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tienda" component={TiendaScreen}/>
            <Stack.Screen name="Detalles" component={DetailsScreen}/>
        </Stack.Navigator>
    );
}

export default Root;