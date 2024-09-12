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
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;