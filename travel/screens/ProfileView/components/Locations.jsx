import { Entypo } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import LocationSVG from "../../../assets/svgs/location.svg"
import { colors, gs } from "../../../constants"

const Location = () => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <LocationSVG width={50} height={50} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.location}>Switzerland</Text>
        <Text style={styles.distance}>227km away</Text>
      </View>

      <Entypo name="chevron-right" size={24} color={colors.darkHl} />
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  location: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "500",
  },
  distance: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 4,
    textTransform: "uppercase",
  },
})
