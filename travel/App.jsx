import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { colors } from "./constants"
import HotelView from "./screens/HotelView/HotelView"

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HotelView />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
})
