import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { gs } from "../../../constants"

const photos = [
  require("../../../assets/images/photo-1.jpg"),
  require("../../../assets/images/photo-2.jpg"),
  require("../../../assets/images/photo-3.jpg"),
  require("../../../assets/images/photo-4.jpg"),
  require("../../../assets/images/photo-5.jpg"),
  require("../../../assets/images/photo-6.jpg"),
  require("../../../assets/images/resort.jpg"),
]

const Photos = () => {
  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My Photos</Text>

      <View style={styles.photosContainer}>
        {photos.map((photo, key) => (
          <Image key={key} source={photo} style={[styles.photo]} />
        ))}
      </View>
    </View>
  )
}

export default Photos

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  photo: {
    width: 104,
    height: 104,
    marginBottom: 12,
    borderRadius: 8,
  },
})
