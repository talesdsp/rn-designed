import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors, gs } from "../../../constants"

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={[gs.sectionTitle, { textTransform: "uppercase" }]}>About me</Text>
      <Text style={styles.about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat assumenda beatae maxime
        illum voluptatibus ipsam! Illum eaque quo iste.
      </Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  about: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22,
  },
})
