import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { colors } from "../../constants"
import { About, Adress, Amenities, Bookmark, Extras, Header, Stats } from "./components/"

const HotelView = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Header navigation={navigation} />

        <View>
          <Bookmark />
          <About />
          <Stats />
          <Amenities />
          <Adress />
          <Extras />
        </View>
      </View>
    </ScrollView>
  )
}

export default HotelView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
})
