import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors, gs } from "../../../constants"

const hotel = {
  name: "Mt. Catlin Hotel",
  price: "$967",
  location: "New York",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt doloremque, quidem similique velit officia dolor maiores enim ab obcaecati!",
}

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>{hotel.price}</Text>

      <View style={gs.divider} />

      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4,
  },
  about: {
    fontWeight: "600",
    fontSize: 13,
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
})
