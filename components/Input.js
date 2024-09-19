import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar } from 'react-native'; 

const Input = ({ autoFocus }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const textInputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [autoFocus]);

  const handleBlur = () => {
    setIsFocused(false);
    setShowMessage(true);
  };

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
        value={inputText}
        onChangeText={setInputText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && inputText.length > 0 && (
        <Text>Character count: {inputText.length}</Text>
      )}
      {showMessage && (
        <Text>
          {inputText.length >= 3
            ? 'Thank you'
            : 'Please type more than 3 characters'}
        </Text>
      )}
      <Button title="Confirm" onPress={() => {}} />
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