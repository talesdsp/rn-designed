import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import HotelView from "./screens/HotelView/HotelView"
import ProfileView from "./screens/ProfileView/ProfileView"

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="hotel" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="hotel" component={HotelView} />
        <Stack.Screen name="profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
