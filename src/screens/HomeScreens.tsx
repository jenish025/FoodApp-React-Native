import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>HomeScreen</Text>
      </View>
      <View style={styles.body}>
        <Text>LandingScreen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(206, 206, 206,1)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  footer: {
    flex: 1,
  },
});
