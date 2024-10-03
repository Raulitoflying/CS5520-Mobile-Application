import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalDetails = ({ route }) => {
  const { goal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goal Details</Text>
      <Text style={styles.goalText}>{goal.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalText: {
    fontSize: 18,
  },
});

export default GoalDetails;