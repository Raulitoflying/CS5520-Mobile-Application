import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text>Welcome to {appName}</Text>
        <Header appName={appName} />
        <View style={styles.buttonContainer}>
          <Button title="Add a goal" onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <Input autoFocus={true} onConfirm={handleInputData} visible={modalVisible} />
      <View style={styles.bottomSection}>
        <Text>You typed: {inputData}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});