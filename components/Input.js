
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, Button, StatusBar, Modal, Alert, Image } from 'react-native';

const Input = ({ autoFocus, onConfirm, visible, onCancel }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const textInputRef = useRef(null);
  const MIN_CHAR_COUNT = 3; // Minimum required characters

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
    setInputText(''); // Clear the input
  };

  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            setInputText(''); // Clear the input
            onCancel();
          }
        }
      ]
    );
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
              {inputText.length >= MIN_CHAR_COUNT
                ? 'Thank you'
                : `Please type more than ${MIN_CHAR_COUNT} characters`}
            </Text>
          )}
          <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
              <Button title="Confirm" onPress={handleConfirm} disabled={inputText.length < MIN_CHAR_COUNT} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={handleCancel} />
            </View>
          </View>
          <View style={styles.imageRow}>
            <Image
              style={styles.image}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }}
              alt="Network Image" // The alt attribute provides alternative text for an image. If the image fails to load, the alternative text is displayed in its place.
            />
            <Image
              style={styles.image}
              source={require('../assets/local-image.png')}
              alt="Local Image"
              // The alt attribute provides alternative text for an image. If the image fails to load, the alternative text is displayed in its place.
            />
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
  imageRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default Input;
