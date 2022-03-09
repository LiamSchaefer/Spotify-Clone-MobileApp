import React from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";

interface ButtonProps {}

export const ShufflePlay: React.FC<ButtonProps> = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.touchableStyle}
        onPress={() => Alert.alert("Hier wird bald geshuffled")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Shuffle Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#1ed760",
    marginHorizontal: 10,
  },

  touchableStyle: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
