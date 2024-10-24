import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                console.log(response.status);
                if (!response.ok) {
                    throw new Error(`HTTP error happened, status ${response.status}`);
                }
                const data = await response.json();
                data.forEach((user) => writeToDB(user, `goals/${id}/users`));
                    setUsers(
                    data.map((user) => {
                        return user.name;
                    })
                    );
                } catch (err) {
                    console.log("fetch user data ", err);
                }
                }
                fetchData();
            }, []);
        return (
            <View>
              <FlatList
                data={users}
                renderItem={({ item }) => {
                  return <Text>{item}</Text>;
                }}
              />
            </View>
          );
        }
        