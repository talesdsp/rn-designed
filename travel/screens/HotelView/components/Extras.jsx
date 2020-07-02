import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, gs } from "../../../constants"

const Extras = () => {
  const extras = [
    "Payment at Checkout",
    "Wi-fi Network is off by 12:00pm",
    "No swimming after 10:00pm",
  ]

  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Before you go</Text>

      <View style={styles.list}>
        {extras.map((extra, key) => (
          <Text style={styles.listItem} key={key}>
            &mdash; {extra}
          </Text>
        ))}
      </View>

      <View style={{ marginTop: 32, marginBottom: -50 }}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Check-in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Extras

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64,
  },
  list: {
    marginTop: 16,
    marginLeft: 8,
  },
  listItem: {
    color: colors.textSec,
    marginVertical: 8,
  },
  filterButton: {
    ...gs.button,
    paddingVertical: 16,
  },
})
