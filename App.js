import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const [inputData, setInputData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const appName = "CS5520-Mobile-Application";

  const handleInputData = (data) => {
    setInputData(data);
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {appName}</Text>
      <Header appName={appName} />
      <View style={styles.buttonContainer}>
        <Button title="Add a goal" onPress={() => setModalVisible(true)} />
      </View>
      <Input autoFocus={true} onConfirm={handleInputData} visible={modalVisible} />
      <Text style={styles.inputText}>You typed: {inputData}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
    textAlign: 'center',
  },
  inputText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
});