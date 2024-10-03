import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 导入 createNativeStackNavigator
import Home from './components/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}