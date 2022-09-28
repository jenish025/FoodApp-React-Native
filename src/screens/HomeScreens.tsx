import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreens = () => {
  const [userLocation, setUserLocation] = useState({
    LocationName: "",
    LocationStreet: "",
    LocationPostalCode: "",
    LocationCountry: "",
  });
  useEffect(() => {
    (async () => {
      const LocationName: any = await AsyncStorage.getItem("LocationName");
      const LocationStreet: any = await AsyncStorage.getItem("LocationStreet");
      const LocationPostalCode: any = await AsyncStorage.getItem(
        "LocationPostalCode"
      );
      const LocationCountry: any = await AsyncStorage.getItem(
        "LocationCountry"
      );
      setUserLocation({
        LocationName: LocationName,
        LocationStreet: LocationStreet,
        LocationPostalCode: LocationPostalCode,
        LocationCountry: LocationCountry,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>
          {userLocation?.LocationName},{userLocation?.LocationStreet},
          {userLocation?.LocationPostalCode},{userLocation?.LocationCountry}
        </Text>
        <Text></Text>
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
