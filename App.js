import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

export default function App() {
  const [inputData, setInputData] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Controls modal visibility
  const [goals, setGoals] = useState([]); // State to store multiple goals
  const appName = "CS5520-Mobile-Application";

  // Function to handle when input data is confirmed
  const handleInputData = (data) => {
    const newGoal = { text: data, id: Math.random().toString() };
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setModalVisible(false); // Close the modal after confirming the input
  };

  const handleCancel = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header and Button will take 1/5th of the space */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Welcome to {appName}</Text>
        <Header appName={appName} />
        <View style={styles.buttonContainer}>
          {/* Button to open modal */}
          <Button title="Add a goal" onPress={() => setModalVisible(true)} />
        </View>
      </View>
        

    {/* Input Modal */}
    <Input autoFocus={true} onConfirm={handleInputData} visible={modalVisible} onCancel={handleCancel} />

    {/* Bottom section for user input with a background color */}
    <View style={styles.bottomView}>
    {/* List of goals */}
    <FlatList
     contentContainerStyle={styles.scrollViewContent}
      data={goals}
      renderItem={({ item }) => <GoalItem goal={item} />}
      keyExtractor={(item) => item.id}
    />
    </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  topSection: {
    flex: 1,  // This will take 1/5th of the available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 3.5,  
    backgroundColor: '#f0f0f0',  // Light background color for the bottom section
    justifyContent: 'top-center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
  // The container around the Text, handling background color, padding, and borderRadius
  inputTextContainer: {
    backgroundColor: 'lightblue',  // Set the background color for the container
    padding: 10,                   // Add padding to space out the content
    borderRadius: 15,              // Apply borderRadius for rounded corners
  },
  // Text style inside the View container
  inputText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    padding: 10,    
  },
  bottomView: { flex: 4, backgroundColor: "#dcd", alignItems: "center" 
  },
});

