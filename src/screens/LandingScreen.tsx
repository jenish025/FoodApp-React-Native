import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const screenWidth = Dimensions.get("screen").width;

const LandingScreen = (props: any) => {
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
  const [errorMsg, setErrorMsg] = useState("");
  const [displayAddress, setDisplayAddress] = useState("Wating for Loction");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponce: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of addressResponce) {
          setAddress(item);
          let currentAddress = `${item?.name},${item?.street},${item?.postalCode},${item?.country}`;
          setDisplayAddress(currentAddress);
          if (currentAddress.length > 0) {
            setTimeout(() => {
              props?.navigation.navigate("homeStack");
            }, 2000);
          }
          return;
        }
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text></Text>
      </View>
      <View style={styles.body}>
        <Image
          source={require("../../assets/images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Food Delivery Address</Text>
        </View>
        <Text style={styles.currentLoactionTitle}>{displayAddress}</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryIcon: {
    height: 120,
    width: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 5,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  currentLoactionTitle: {
    fontSize: 15,
    fontWeight: "300",
  },
  footer: {
    flex: 1,
  },
});
