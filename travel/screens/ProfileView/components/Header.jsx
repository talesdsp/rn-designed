import { Entypo, Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, gs } from "../../../constants"

const Header = ({ user }) => {
  const name = user.name.first + " " + user.name.last
  return (
    <LinearGradient colors={[colors.orange, colors.pink]} start={[0, 0]} end={[1, 1]}>
      <View style={{ marginHorizontal: 32, marginVertical: 64 }}>
        <View style={gs.rowBetween}>
          <Ionicons name="md-arrow-back" color={colors.text} size={32} />
          <Entypo name="dots-three-vertical" color={colors.text} size={24} />
        </View>

        <View style={styles.imageContainer}>
          <View>
            <View style={styles.check}>
              <Ionicons name="md-checkmark" size={20} color={colors.pink} />
            </View>

            <Image
              source={{ uri: user.picture.large }}
              style={{ width: 100, height: 100, borderRadius: 32 }}
            />
          </View>
        </View>

        <View style={[gs.center, { marginVertical: 12 }]}>
          <Text style={gs.title}>{name}</Text>
          <Text style={[gs.subTitle, { marginTop: 8 }]}>Traveler/Blogger</Text>

          <TouchableOpacity style={styles.follow}>
            <Entypo name="plus" size={20} color="rgba(255,255,255,0.6)" />

            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create({
  imageContainer: {
    ...gs.center,
    marginTop: 16,
    shadowColor: colors.darkBg,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.5,
  },
  check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    shadowColor: colors.darkBg,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    shadowOpacity: 0.3,
    position: "absolute",
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
  },
  followText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
    marginLeft: 4,
  },
})
