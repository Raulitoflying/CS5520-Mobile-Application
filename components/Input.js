import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, Button, StatusBar, Modal } from 'react-native';

const Input = ({ autoFocus, onConfirm, visible }) => {
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

  const handleConfirm = () => {
    console.log(inputText);
    onConfirm(inputText);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
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
            <Text style={styles.text}>Character count: {inputText.length}</Text>
          )}
          {showMessage && (
            <Text style={styles.text}>
              {inputText.length >= 3
                ? 'Thank you'
                : 'Please type more than 3 characters'}
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
});

export default Input;