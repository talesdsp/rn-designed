import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { colors } from "../../styles"

const HotelView = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
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
