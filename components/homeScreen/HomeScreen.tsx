import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AlbumList from "./AlbumList";
import { MusicPlayerBar } from "../libraryScreen/MusicPlayerBar";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={["#0b3057", "#051c30"]}
        style={StyleSheet.absoluteFill}
      />
      <View style={{ paddingTop: 30, paddingLeft: 20 }}>
        <Text style={{ fontSize: 25, color: "white" }}>
          Zuletzt gehörte Alben
        </Text>
      </View>
      {/* <View style={styles.scrollViewContainer}> */}
      <ScrollView
        style={{ height: "100%", width: "100%", flex: 1, marginTop: 20 }}
      >
        <AlbumList
          title="Chris Brown Indigo"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/71WR7mTL7BL._AC_SL1200_.jpg"
        />
        <AlbumList
          title="Kontra K Wölfe"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/61LakJMtFJL._SL1200_.jpg"
        />
        <AlbumList
          title="Breaking Benjamin-Phobia"
          imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Breakingbenjamindearagony.jpg/220px-Breakingbenjamindearagony.jpg"
        />
        <AlbumList
          title="Chris Brown Royality"
          imageUrl="https://direct.rhapsody.com/imageserver/images/alb.208663352/600x600.jpg"
        />
        <AlbumList
          title="Kontra K -Erfolg ist kein Glück"
          imageUrl="http://rap.de/wp-content/uploads/Kontra-k.jpg"
        />
        <AlbumList
          title="Chris Brown Wrist"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/71WR7mTL7BL._AC_SL1200_.jpg"
        />
      </ScrollView>
      <MusicPlayerBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    height: "100%",
    width: "100%",
  },
  scrollViewContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
    padding: 10,
  },
});

export default HomeScreen;
