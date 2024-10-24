import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList, 
  Alert
} from "react-native";
import Header from "./Header";
import { useState, useEffect } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { database } from '../firebase/firebaseSetup';
import { writeToDB,  deleteFromDB, deleteAllFromDB,} from '../firebase/firebaseHelper';
import { collection, onSnapshot, query } from "firebase/firestore";

export default function Home({ navigation }) {
  console.log(database);
  const [receivedData, setReceivedData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const appName = "My app!";
  const collectionName = "goals";
   // update to receive data
   useEffect(() => {
  const unsubscribe = onSnapshot(collection(database, collectionName), (snapshot) => {
    const goalsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setGoals(goalsData);
  });

  // Cleanup function to unsubscribe when the component unmounts
  return () => {
    console.log("Unsubscribing from Firestore listener");
    unsubscribe();
  };
}, []);

  function handleInputData(data) {
    console.log("App.js ", data);
    let newGoal = { text: data };
    writeToDB(newGoal, "goals");
    //make a new obj and store the received data as the obj's text property
    // setGoals((prevGoals) => {
    //   return [...prevGoals, newGoal];
    // });
    // setReceivedData(data);
    setModalVisible(false);
  }
  function dismissModal() {
    setModalVisible(false);
  }
  function handleGoalDelete(deletedId) {
    // setGoals((prevGoals) => {
    //   return prevGoals.filter((goalObj) => {
    //     return goalObj.id != deletedId;
    //   });
    // });
    deleteFromDB(deletedId, "goals");
  }

  // function handleGoalPress(pressedGoal) {
  //   //receive the goal obj
  //   console.log(pressedGoal);
  //   // navigate to GoalDetails and pass goal obj as params
  //   navigation.navigate("Details", { goalData: pressedGoal });
  // }
  function deleteAll() {
    Alert.alert("Delete All", "Are you sure you want to delete all goals?", [
      {
        text: "Yes",
        onPress: () => {
          // setGoals([]);
          deleteAllFromDB("goals");
        },
      },
      { text: "No", style: "cancel" },
    ]);
  }

  const renderItem = ({ item, separators }) => (
    <GoalItem 
      goalObj={item} 
      deleteHandler={handleGoalDelete} 
      separators={separators}
    />
  );

  const renderSeparator = ({ highlighted }) => (
    <View style={[styles.separator, highlighted && styles.highlightedSeparator]} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName}></Header>
        <PressableButton
          pressedHandler={function () {
            setModalVisible(true);
          }}
          componentStyle={{ backgroundColor: "purple" }}
        >
          <Text style={styles.buttonText}>Add a Goal</Text>
        </PressableButton>
        {/* <Button
          title="Add a Goal"
          onPress={function () {
            setModalVisible(true);
          }}
        /> */}
      </View>
      <Input
        textInputFocus={true}
        inputHandler={handleInputData}
        isModalVisible={modalVisible}
        dismissModal={dismissModal}
      />
      <View style={styles.bottomView}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={
            <Text style={styles.header}>No goals to show</Text>
          }
          ListHeaderComponent={
            goals.length && <Text style={styles.header}>My Goals List</Text>
          }
          ListFooterComponent={
            goals.length && <Button title="Delete all" onPress={deleteAll} />
          }
          contentContainerStyle={styles.scrollViewContainer}
          data={goals}
          renderItem={renderItem}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {goals.map((goalObj) => {
            return (
              <View key={goalObj.id} style={styles.textContainer}>
                <Text style={styles.text}>{goalObj.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContainer: {
    alignItems: "center",
  },

  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: { flex: 4, backgroundColor: "#dcd" },
  header: {
    color: "indigo",
    fontSize: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  separator: {
    height: 5,
    backgroundColor: "gray",
    marginVertical: 20,
  },
  highlightedSeparator: {
    backgroundColor: 'red',
  },
});