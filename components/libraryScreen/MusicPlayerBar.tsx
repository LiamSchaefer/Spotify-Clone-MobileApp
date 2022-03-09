import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import TextTicker from "react-native-text-ticker";
import { MusicPlayer } from "../musicPlayerScreen/MusicPlayer";
import { useState } from "react";

interface musicPlayBarProps {
  title?: string;
  artist?: string;
}

export const MusicPlayerBar: React.FC<musicPlayBarProps> = (title, artist) => {
  const [isFavorite, setIsFavorit] = useState(true);
  const toggleHeart = () => setIsFavorit((previousState) => !previousState);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => setIsPlaying((previousState) => !previousState);
  return (
    <View style={styles.musicPlayerBarContainer}>
      <TouchableOpacity
        style={{
          justifyContent: "flex-start",
          right: "100%",
        }}
        onPress={toggleHeart}
      >
        <Icon
          name="heart"
          color={isFavorite ? "#87a7b3" : "#55b661"}
          type={isFavorite ? "feather" : "font-awesome"}
        />
      </TouchableOpacity>
      <TextTicker
        duration={7000}
        style={styles.textSytle}
        numberOfLines={1}
        marqueeDelay={1000}
        loop
      >
        Chris Brown- Privacy Song from 2017
        {/* {title + " " + artist} */}
      </TextTicker>
      <TouchableOpacity
        onPress={togglePlay}
        style={{ justifyContent: "flex-end", left: "100%" }}
      >
        <Icon
          name={isPlaying ? "control-play" : "control-pause"}
          color="#87a7b3"
          type="simple-line-icon"
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 60,
        }}
      >
        <MusicPlayer
          artist="Chris Brown"
          songtitle="Wrist"
          imgUrl="https://direct.rhapsody.com/imageserver/images/alb.208663352/600x600.jpg"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  musicPlayerBarContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#022e57",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#87a7b3",
    position: "relative",
    // borderBottom "1px solid #87a7b3",
  },
  textSytle: {
    color: "#87a7b3",
    fontSize: 16,
    zIndex: 3,
    width: 200,
  },
});
