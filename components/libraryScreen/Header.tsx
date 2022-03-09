import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

interface HeaderProps {
  songtitle: string;
  y?: Animated.Value<number>;
}
const { interpolate, Extrapolate } = Animated;

export const Header: React.FC<HeaderProps> = ({ songtitle, y }) => {
  const { height } = Dimensions.get("window");
  // const opacity = interpolate(y, {
  //   inputRange: [height - 16, height],
  //   outputRange: [0, 1],
  //   Extrapolate: Extrapolate.CLAMP,
  // });
  return (
    <Animated.View style={styles.header}>
      <Animated.Text style={styles.textStyle}>{songtitle}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex: 1,
    backgroundColor: "#022e57",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
