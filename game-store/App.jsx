import { Entypo } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import HomeScreen from "./screens/HomeScreen"
import LiveScreen from "./screens/LiveScreen"
import ProfileScreen from "./screens/ProfileScreen"

const AppStack = createStackNavigator()
const TabNav = createBottomTabNavigator()

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 12,
  },
}

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName =
            {
              HomeScreen: "home",
              LiveScreen: "game-controller",
              ProfileScreen: "user",
            }[route.name] || "home"

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#fff" />
            </TabBarIconContainer>
          )
        },
      })}
    >
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="App" component={TabNavScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  )
}

const TabBarIconContainer = styled.View`
  background-color: ${({ focused }) => (focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
`
