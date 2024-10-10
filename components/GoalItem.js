import { Button, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "./PressableButton";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function GoalItem({ goalObj, deleteHandler, separators }) {
  const navigation = useNavigation();

  function handleDelete() {
    console.log("deleted");
    deleteHandler(goalObj.id);
  }
  function handlePress() {
    // call a callbackfn received from parent
    //pass the goal obj back to Home.js
    // pressHandler(goalObj);
    navigation.navigate("Details", { goalData: goalObj });
  }
  function handleLongPress() {
    Alert.alert(
      "Delete Goal",
      "Are you sure you want to delete this goal?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => deleteHandler(goalObj.id),
          style: "destructive"
        }
      ]
    );
  }
  
  return (
      <Pressable
        onPress={handlePress}
        onLongPress={handleLongPress} 
        style={({ pressed }) => {
          return [styles.horizontalContainer, pressed && styles.pressedStyle];
        }}
        android_ripple={{ color: "red", radius: 25 }}
      >
        <View style={styles.textContainer}></View>
        <Text style={styles.text}>{goalObj.text}</Text>
        {/* <Button title="X" color="grey" onPress={handleDelete} /> */}
        <PressableButton
          componentStyle={styles.deleteButton}
          pressedHandler={handleDelete}
          pressedStyle={styles.pressedStyle}
        >
          {/* <Text style={styles.deleteText}>X</Text> */}
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton>
        {/* <Button title="i" color="grey" onPress={handlePress} /> */}
      </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "purple",
    padding: 5,
    fontSize: 30,
  },
  textContainer: {
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#aaa",
  },
  pressedStyle: {
    opacity: 0.5,
    backgroundColor: "red",
  },
  deleteButton: {
    backgroundColor: "grey",
  },
  deleteText: {
    color: "white",
    fontSize: 20,
  },
});