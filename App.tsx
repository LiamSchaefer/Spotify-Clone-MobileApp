import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Content } from "./components/libraryScreen/Content";
import HomeScreen from "./components/homeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { MusicPlayer } from "./components/musicPlayerScreen/MusicPlayer";

const Tab = createBottomTabNavigator();

export default function App() {
  const songs = [
    {
      songNumber: 1,
      title: "Wrist",
      artist: "Chris Brown",
    },
    {
      songNumber: 2,
      title: "Privacy",
      artist: "Chris Brown",
    },
    {
      songNumber: 3,
      title: "Pills & Automobiles",
      artist: "Chris Brown",
    },
    {
      songNumber: 4,
      title: "Grass ain't greener",
      artist: "Chris Brown",
    },
    {
      songNumber: 5,
      title: "Zero",
      artist: "Chris Brown",
    },
    {
      songNumber: 6,
      title: "Loyal",
      artist: "Chris Brown",
    },
    {
      songNumber: 7,
      title: "X",
      artist: "Chris Brown",
    },
  ];

  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#c9f0ff",
          inactiveTintColor: "#87a7b3",
          showIcon: true,
          style: {
            backgroundColor: "#022e57",
          },
          labelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="home" color="#87a7b3" size={20} type="font-awesome" />
            ),
          }}
        />
        <Tab.Screen
          name="Player"
          children={() => (
            <MusicPlayer
              artist="asdads"
              songtitle="dsdssd"
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/71WR7mTL7BL._AC_SL1200_.jpg"
            />
          )}
          options={{
            tabBarIcon: () => (
              <Icon
                name="music"
                color="#87a7b3"
                size={20}
                type="font-awesome"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Album"
          children={() => <Content songs={songs} />}
          options={{
            tabBarIcon: () => (
              <Icon
                name="list"
                color="#87a7b3"
                size={20}
                type="simple-line-icon"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
