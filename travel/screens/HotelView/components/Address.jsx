import { Entypo } from "@expo/vector-icons"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, gs } from "../../../constants"

const Adress = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#000" }}>
        <Image source={require("../../../assets/images/map.png")} style={{ height: 200 }} />
      </View>

      <View style={styles.addressContainer}>
        <View style={{ marginLeft: 8, marginTop: 24 }}>
          <Text style={gs.sectionTitle}>Address</Text>
          <Text
            style={styles.address}
          >{`1529 Taylor Street, New York\n100011, United States`}</Text>

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity onPress={() => {}} style={styles.checkButton}>
              <Text style={gs.smallText}>Check it</Text>
              <Entypo name="chevron-right" size={12} color="#fff" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Adress

const styles = StyleSheet.create({
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    flexDirection: "row",
  },
})
