import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export default function GoalItem({ goalObj, deleteHandler }) {

  const navigation = useNavigation();

  function handleDelete() {
    console.log("deleted");
    deleteHandler(goalObj.id);
  }
  
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalObj.text}</Text>
      <Button title="X" color="grey" onPress={handleDelete} />
      <Button title="i" color="grey" onPress={() => navigation.navigate("Details", { goalObj })} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "purple",
    padding: 5,
    fontSize: 30,
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});