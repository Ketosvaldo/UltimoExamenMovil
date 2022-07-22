import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import GamesScreen from './TiendaScreen';
import WhichGuess from './WhichGuess';
import GuessNumber from './GuessNumber';
import GuessYourNumber from './GuessYourNumber';
import Cups from './Cups';
import PPT from './PPT';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } 
        else if (route.name === 'Games') {
          iconName = 'game-controller';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    initialRouteName='Home'
    >
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="Games" component={GamesScreen}/>
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Which Guess?" component={WhichGuess} />
        <Stack.Screen name="Guess Number" component={GuessNumber} />
        <Stack.Screen name="Guess Your Number" component={GuessYourNumber} />
        <Stack.Screen name="Piedra Papel o Tijera" component={PPT} />
        <Stack.Screen name="Cups" component={Cups} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}