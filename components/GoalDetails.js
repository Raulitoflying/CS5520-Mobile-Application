import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GoalDetails({ navigation, route }) {
    const goal = route.params;

  return (
    <View>
      {route.params ? (
        <Text>
          Details of {goal.text} goal with {goal.id}
        </Text>
      ):(
        <Text>More Details</Text>
      )}

      <Button title="More Details" onPress={() => navigation.push("Details")} />
    </View>
  )
}


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