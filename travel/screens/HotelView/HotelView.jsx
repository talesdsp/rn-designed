import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { colors } from "../../constants"
import { About, Adress, Amenities, Bookmark, Extras, Header, Stats } from "./components/"

const HotelView = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Header />

        <View>
          <Bookmark />
          <About />
          <Stats />
          <Amenities />
          <Adress />
          <Extras />
        </View>
      </View>
    </>
  )
}

export default HotelView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
})
