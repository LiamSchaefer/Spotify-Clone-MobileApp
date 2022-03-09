import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TrackProps {
  title: string;
  artist: string;
  songNumber: number;
}

export const Track: React.FC<TrackProps> = ({ songNumber, title, artist }) => {
  return (
    <View style={styles.songlistContainer}>
      <View style={styles.songNumberContainer}>
        <Text style={styles.songSmallTextStyle}>{songNumber}</Text>
      </View>
      <View style={styles.songContentContainer}>
        <Text style={styles.songBigTextStyle}>{title}</Text>
        <Text style={styles.songSmallTextStyle}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  songlistContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  songNumberContainer: {
    flexDirection: "row",
    paddingRight: 40,
  },
  songContentContainer: {
    marginVertical: 20,
  },
  songSmallTextStyle: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
  },
  songBigTextStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
});
