import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartScreens from "../screens/CartScreens";
import OffersScreens from "../screens/OffersScreens";
import AccountScreens from "../screens/AccountScreens";
import HomeScreens from "../screens/HomeScreens";

const TabNavigation = () => {
  const tab: any = createBottomTabNavigator();

  return (
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen name="Home" component={HomeScreens} Options={{}} />
      <tab.Screen name="Cart" component={CartScreens} />
      <tab.Screen name="Offers" component={OffersScreens} />
      <tab.Screen name="Account" component={AccountScreens} />
    </tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
