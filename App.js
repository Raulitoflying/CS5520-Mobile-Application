import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const commonHeaderOptions = {
  headerStyle: { backgroundColor: "purple" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commonHeaderOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "My Goals" }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => {
            return {
              title: route.params ? route.params.goalObj.text : "More Details",
              headerRight: () => {
                return (
                  <Button
                    title="Warning"
                    onPress={() => {
                      console.log("warning");
                    }}
                  />
                );
              },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}