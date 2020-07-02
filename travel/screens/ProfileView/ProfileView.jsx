import React, { useEffect, useState } from "react"
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native"
import { colors, gs } from "../../constants"
import { About, Header, Location, Photos, Stats } from "./components"

const { height } = Dimensions.get("window")

const ProfileView = ({ navigation }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      try {
        let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
        let results = await res.json()

        setUser(results.results[0])
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    return (
      <View style={[gs.center, styles.container, { height: height }]}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header user={user} />
        <Stats />
        <About />
        <Location />
        <Photos />
      </View>
    </ScrollView>
  )
}

export default ProfileView

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
})
