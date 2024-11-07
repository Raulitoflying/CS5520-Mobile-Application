import React, { useEffect } from "react";
import Home from "./components/Home";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { isUserLoggedIn } from "./firebase/firebaseSetup";
import { Button } from "react-native";
import PressableButton from "./components/PressableButton";
import Profile from "./components/Profile";
import { AntDesign } from "@expo/vector-icons";
import { onAuthStateChanged, signInAnonymously, signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseSetup";


const Stack = createNativeStackNavigator();

const authStack = (
  <>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
  </>
);

const appStack = (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          title: "My Goals",
          headerRight: () => {
            return (
              <PressableButton
                componentStyle={{ backgroundColor: "purple" }}
                pressedHandler={() => {
                  navigation.navigate("Profile");
                }}
              >
                <AntDesign name="user" size={24} color="white" />
              </PressableButton>
            );
          },
        };
      }}
    />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={({ route }) => {
        return {
          title: route.params ? route.params.goalData.text : "More Details",
          // headerRight: () => {
          //   return (
          //     <Button
          //       title="Warning"
          //       onPress={() => {
          //         console.log("warning");
          //       }}
          //     />
          //   );
          // },
        };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <PressableButton
              componentStyle={{ backgroundColor: "purple" }}
              pressedHandler={() => {
                signOut(auth);
              }}
            >
              <AntDesign name="logout" size={24} color="white" />
            </PressableButton>
          );
        },
      }}
    />
  </>
);

const commonHeaderOptions = {
  headerStyle: { backgroundColor: "purple" },
  headerTintColor: "white",
};

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      // if user is logged in, set the state to true
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
    return () => {
      unsubscribe();
    }
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={commonHeaderOptions}>
        {
          // if user is not logged in, show the auth stack
          isUserLoggedIn ? appStack : authStack
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}