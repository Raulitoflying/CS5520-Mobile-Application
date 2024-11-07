import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
    const [response, requestPermission] = ImagePicker.useCameraPermissions();
    async function takeImageHandler() { 
        try {
        const result = await ImagePicker.launchCameraAsync({
           allowsEditing: true,
        });
        console.log(result);
    } catch (error) {
        console.log("take an iamge error", error);
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
}