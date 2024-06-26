// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import Roster from '../screens/Roster';
import Score from '../screens/Score';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/Home.png')
                : require('../assets/Home.png');
            } else if (route.name === 'Roster') {
              iconName = focused
                ? require('../assets/Roster.png')
                : require('../assets/Roster.png');
            } else if (route.name === 'Score') {
              iconName = focused
                ? require('../assets/Score.png')
                : require('../assets/Score.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: 20, height: 20 }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Roster" component={Roster} />
        <Tab.Screen name="Score" component={Score} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
