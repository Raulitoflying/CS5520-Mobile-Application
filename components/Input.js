import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar } from 'react-native';

const Input = ({ autoFocus }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const textInputRef = useRef(null);


  // Focus the TextInput when the component renders if autoFocus is true
  useEffect(() => {
    if (autoFocus && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [autoFocus]);

  // Handle when the TextInput loses focus
  const handleBlur = () => {
    setIsFocused(false);
    setShowMessage(true);
  };

  // Handle when the TextInput gains focus
  const handleFocus = () => {
    setIsFocused(true);
    setShowMessage(false);
  };

  return (
    <View>
      <TextInput
        ref={textInputRef}
        style={styles.input}
        placeholder="Type here..."
        keyboardType="default"
        value={inputText}
        onChangeText={setInputText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* Show character count only when input is focused and user has typed something */}
      {isFocused && inputText.length > 0 && (
        <Text>Character count: {inputText.length}</Text>
      )}
      
      {/* Show the message when input loses focus */}
      {showMessage && (
        <Text>
          {inputText.length >= 3
            ? 'Thank you'
            : 'Please type more than 3 characters'}
        </Text>
      )}
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