import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar } from 'react-native'; 

const Input = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View>
      <TextInput
        // multiline
        style={styles.input}
        // 
        placeholder="Type here..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Text>You typed: {inputText}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '80%',
  },
});

export default Input;