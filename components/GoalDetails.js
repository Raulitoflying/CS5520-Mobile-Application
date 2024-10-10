import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalDetails({ navigation, route }) {
  const [textColor, setTextColor] = useState("purple");
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={handleWarning} 
          title="Warning"
          color="red"
        />
      ),
    });
  }, [navigation]);

  const handleWarning = () => {
    setTextColor("red");
    setIsWarning(true);
    navigation.setOptions({
      title: "Warning!",
    });
  };

  function moreDetailsHandler() {
    navigation.push("Details");
  }

  return (
    <View>
      {route.params ? (
        <Text style={[styles.text, { color: textColor }]}>
          This is details of a goal with text {route.params.goalObj.text} and
          id {route.params.goalObj.id}
        </Text>
      ) : (
        <Text style={[styles.text, { color: textColor }]}>
          More details</Text>
      )}
      <Button title="More Details" onPress={moreDetailsHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 10,
    marginBottom: 10,
  },
});