import { StatusBar } from "expo-status-bar"
import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import { colors } from "./styles"

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
    alignItems: "center",
    justifyContent: "center",
  },
})
