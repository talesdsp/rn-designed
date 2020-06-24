import React from "react";
import { Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./navigation/";

export default function App() {
  return (
    <>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <Navigation />
    </>
  );
}
