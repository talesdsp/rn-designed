import { AntDesign, Entypo } from "@expo/vector-icons"
import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { gs } from "../../../constants"

const Header = ({ navigation }) => {
  return (
    <>
      <View>
        <Image
          source={require("../../../assets/images/resort.jpg")}
          style={{ width: "100%", height: Dimensions.get("window").height / 2 }}
        />
        <View style={styles.topButtons}>
          <AntDesign
            name="close"
            size={24}
            color="#fff"
            onPress={() => navigation.navigate("profile")}
          />

          <View style={gs.rowCenter}>
            <AntDesign name="save" size={24} style={styles.topButtonRight} />

            <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />

            <Entypo name="dots-three-vertical" size={24} style={styles.topButtonRight} />
          </View>
        </View>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 55,
    left: 32,
    right: 32,
  },
  topButtonRight: {
    marginLeft: 12,
    color: "#fff",
  },
})
