import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import TabNavigation from "./TabNavigation";
import FoodeDetailedScreen from "../screens/FoodeDetailedScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        defaultScreenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="FoodDetail" component={FoodeDetailedScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantScreen} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
