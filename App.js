import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { isUserLoggedIn } from "./firebase/firebaseSetup";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const authStack = (
  <>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
  </>
);

const AppStack = (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "My Goals" }}
    />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
    />
  </>
)

const commonHeaderOptions = {
  headerStyle: { backgroundColor: "purple" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={commonHeaderOptions}>
        {
          // if user is not logged in, show the auth stack
          isUserLoggedIn ? AppStack : AuthStack
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}