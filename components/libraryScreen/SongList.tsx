import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Track } from "./Track";

interface Songs {
  songNumber: number;
  title: string;
  artist: string;
}

interface Songlist {
  content: Songs[];
}

export const SongList: React.FC<Songlist> = ({ content }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexDirection: "row" }}>
        {content.map((song) => (
          <TouchableOpacity key={song.songNumber} style={{ paddingRight: 150 }}>
            <Track
              title={song.title}
              songNumber={song.songNumber}
              artist={song.artist}
            ></Track>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 3,
    backgroundColor: "black",
    alignItems: "flex-start",
    padding: 20,
    justifyContent: "flex-start",
    paddingBottom: 0,
    paddingTop: 0,
  },
});
