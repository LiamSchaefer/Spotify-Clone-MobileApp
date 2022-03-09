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

interface AlbumListProps {
  imageUrl: string;
  title: string;
}

export const AlbumList: React.FC<AlbumListProps> = ({ imageUrl, title }) => {
  return (
    <View
      style={{ height: 100, paddingLeft: 10, marginBottom: 20, marginTop: 20 }}
    >
      <TouchableOpacity style={{ height: "100%" }}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          marginTop: 20,
          textAlign: "center",
          alignSelf: "center",
          fontSize: 18,
          color: "white",
          marginLeft: 300,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "30%",
    height: "95%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AlbumList;
