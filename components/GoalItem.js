import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GoalItem = ({ goal, onDelete }) => {
    return (
      <View style={styles.goalItem}>
        <Text>{goal.text}</Text>
        <Button title="X" color="grey" onPress={() => onDelete(goal.id)} />
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
});

export default GoalItem;