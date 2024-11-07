import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
    function takeImageHandler() { 
        ImagePicker.requestMediaLibraryPermissionsAsync();

    }
    return (
        <View>
          <Button title="Take An Image" onPress={takeImageHandler} />
          {imageUri && (
            <Image
              source={{
                uri: imageUri,
              }}
              style={styles.image}
              alt="preview of the image taken"
            />
          )}
        </View>
      );
    }
    
    const styles = StyleSheet.create({ image: { width: 100, height: 100 } });