import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const [inputData, setInputData] = useState('');
  const appName = "CS5520-Mobile-Application";

  const handleInputData = (data) => {
    setInputData(data);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to {appName}</Text>
      <Header appName={appName} />
      <Input autoFocus={true} onConfirm={handleInputData} />
      <Text>You typed: {inputData}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});