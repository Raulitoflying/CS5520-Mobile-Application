import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";


export default function PressableButton({
    children,
    componentStyle,
    pressedHandler,
    pressedStyle,
  }) {

    return (
        <Pressable onPress={pressedFunction}>
            <View>{children}</View>
        </Pressable>
    );
}


const styles = StyleSheet.create({});