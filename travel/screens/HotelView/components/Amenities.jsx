import { Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors, gs } from "../../../constants"

const Amenities = () => {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Amenities</Text>

      <View style={styles.amenitiesContainer}>
        <Amenity view={Feather} name="wifi" text="WI-FI" />

        <Amenity view={Ionicons} name="md-restaurant" text="Hotel Restaurant" />

        <Amenity view={FontAwesome5} size={20} name="swimmer" text="Swimming Pools" />

        <Amenity view={Entypo} name="drink" text="Bar" />

        <Amenity view={Ionicons} name="ios-car" text="Parking Spot" />

        <Amenity view={Feather} name="speaker" text="Night Club" />
      </View>
    </View>
  )
}

export default Amenities

const styles = StyleSheet.create({
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: "wrap",
  },
  amenityContainer: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: "#444",
  },
  amenityName: {
    color: colors.lightHl,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
})

const Amenity = (props) => (
  <View style={styles.amenityContainer}>
    <View style={styles.amenity}>
      <props.view name={props.name} size={props.size || 24} color={colors.lightHl} />
    </View>

    <Text style={styles.amenityName}>{props.text}</Text>
  </View>
)
