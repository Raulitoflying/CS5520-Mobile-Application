import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GoalItem = ({ goalObj, deleteHandler, onDetailsPress }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalObj.text}</Text>
      <Button title="X" color="grey" onPress={() => deleteHandler(goalObj.id)} />
      <Button title="i" color="grey" onPress={() => onDetailsPress(goalObj)} />
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalText: {
    fontSize: 18,
    color: 'purple',
  },
});

export default GoalItem;