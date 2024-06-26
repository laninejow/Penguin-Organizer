// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import Roster from '../screens/Roster';
import Score from '../screens/Score';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Roster" component={Roster} />
        <Tab.Screen name="Score" component={Score} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
