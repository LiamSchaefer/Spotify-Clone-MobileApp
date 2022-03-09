import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

interface MusicPlayerProps {
  artist: string;
  imgUrl?: string;
  songtitle: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  artist,
  imgUrl,
  songtitle,
}) => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/music/Wrist.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound?.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const { width, height } = Dimensions.get("screen");
  const translateY = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={["#0b3057", "#051c30"]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TapGestureHandler>
            <Animated.View style={[styles.button, style]}>
              <Icon
                name="chevron-down"
                color="white"
                size={24}
                type="font-awesome"
              />
            </Animated.View>
          </TapGestureHandler>
          <Text style={styles.title}>{songtitle}</Text>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="options"
              color="white"
              size={24}
              type="simple-line-icon"
            />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: imgUrl }} style={styles.cover} />
        <View style={styles.metadata}>
          <View>
            <Text style={styles.song}>{songtitle}</Text>
            <Text style={styles.artist}>{artist}</Text>
          </View>
          <Icon name="heart" size={24} color="#55b661" type="font-awesome" />
        </View>
        <View style={styles.slider} />
        <View style={styles.controls}>
          <Icon name="shuffle" color="rgba(255, 255, 255, 0.5)" size={24} />
          <Icon
            name="step-backward"
            color="white"
            size={20}
            type="font-awesome"
          />
          <TouchableOpacity
            onPress={() => {
              playSound(), toggleSwitch();
            }}
          >
            <Icon
              name={isEnabled ? "play" : "pause"}
              color="white"
              size={30}
              type="font-awesome"
            />
          </TouchableOpacity>
          <Icon
            name="step-forward"
            color="white"
            size={20}
            type="font-awesome"
          />
          <Icon
            name="repeat"
            color="rgba(255, 255, 255, 0.5)"
            size={24}
            type="font-awesome"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  root: {
    height: height,
  },
  container: {
    margin: 16,
    marginTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  button: {
    padding: 16,
  },
  title: {
    color: "white",
    padding: 16,
    fontSize: 20,
  },
  cover: {
    marginVertical: 16,
    width: width - 32,
    height: width - 32,
  },
  metadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  song: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  artist: {
    color: "white",
  },
  slider: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: width - 32,
    borderRadius: 2,
    height: 4,
    marginVertical: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
