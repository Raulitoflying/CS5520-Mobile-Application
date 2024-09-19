import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ appName }) => {
  return (
    <View style={styles.header}>
      <Text>Welcome to {appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "purple", 
    fontSize: 25, 
    borderColor: "purple", 
    borderWidth: 2, 
    padding: 5, 
    marginBottom: 10,
  },
});

export default Header;