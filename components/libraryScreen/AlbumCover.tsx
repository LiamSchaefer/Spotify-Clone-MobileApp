import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import { ShufflePlay } from "./ShufflePlay";
import { onScrollEvent } from "react-native-redash/lib/module/v1";

interface CoverProps {
  artist: string;
  imageUrl: string;
  y: Animated.Value<number>;
}

const { interpolateNode, Extrapolate } = Animated;
const { height } = Dimensions.get("window");

export const AlbumCover: React.FC<CoverProps> = ({ artist, imageUrl }, y) => {
  const scale: any = interpolateNode(y, {
    inputRange: [-height, 0],
    outputRange: [6, 1],
    // extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = 0.2;
  return (
    // <Animated.ScrollView onScroll={onScrollEvent({ y })}>
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
        <Text style={styles.textStyle}>{artist}</Text>
        <View style={styles.shufflePlayContainer}>
          <ShufflePlay />
        </View>
      </ImageBackground>
    </Animated.View>
    // </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 3,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    flex: 3,
    resizeMode: "contain",
    justifyContent: "center",
  },
  textStyle: {
    marginBottom: 10,
    marginVertical: 170,
    opacity: 1,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  shufflePlayContainer: {
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
  },
});
