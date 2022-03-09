import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Header } from "./Header";
import { AlbumCover } from "./AlbumCover";
import { SongList } from "./SongList";
import { MusicPlayerBar } from "./MusicPlayerBar";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

interface Songs {
  songs: { title: string; artist: string; songNumber: number }[];
}

const { Value } = Animated;
export const Content: React.FC<Songs> = ({ songs }) => {
  const y = new Value(0);
  const { width, height } = Dimensions.get("screen");
  const translateY = useSharedValue(0);
  const heightPosition = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      console.log(translateY.value);
      console.log(-height / 2, "höhe");
      if (translateY.value < 0 && translateY.value >= -height / 2 - 100) {
        translateY.value = withSpring(-height + 30);
      } else if (translateY.value <= -height / 2 + 300) {
        translateY.value = withSpring(0);
      }
      if (translateY.value > heightPosition.value) {
        translateY.value = withSpring(heightPosition.value);
      }
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <View style={styles.songsContainer}>
      <Header songtitle="Privacy" />
      {/* <TestAnimation width={400} height={400} /> */}

      <AlbumCover
        imageUrl="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Chris%2BBrown/Chris%2520Brown_16_9_1612819560.jpg?itok=uhYsDlGB"
        artist="Chris Brown"
        y={y}
      />
      <SongList content={songs} />
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <MusicPlayerBar />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  songsContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#0b3057",
  },
});
