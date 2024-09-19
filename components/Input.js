import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar } from 'react-native'; 

const Input = ({ autoFocus }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const textInputRef = useRef(null);

  return (
    <View>
      <TextInput
        // multiline
        style={styles.input}
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