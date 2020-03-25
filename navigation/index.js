import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Vpn from "../screens/Vpn";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="VPN" component={Vpn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
