import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme, Utils } from "expo-ui-kit";
import React from "react";
import Home from "../screens/Home";
import Signup from "../screens/Signup";

export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTitle: null,
            headerTintColor: Utils.rgba(theme.COLORS.gray, 0.4),
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
