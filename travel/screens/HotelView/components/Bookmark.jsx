import { Feather } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, View } from "react-native"
import { colors, gs } from "../../../constants"

const Bookmark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
})
