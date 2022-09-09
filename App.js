import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Screen1/>
  );
}