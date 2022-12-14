import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { connect } from "react-redux";
import { addAllFoodList, addLocation } from "../redux/action/UserLocatin";
import { useNavigation } from "@react-navigation/native";
import { RestaurantData } from "../LocalAppData/category";

const screenWidth = Dimensions.get("screen").width;
const LandingScreen = (props: any) => {
  const Navigation: any = useNavigation();
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const [displayAddress, setDisplayAddress] =
    useState<string>("Wating for Loction");

  useEffect(() => {
    props?.addAllFoodList(RestaurantData);
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
          props.addLocation(item);

          let currentAddress = `${item?.name},${item?.street},${item?.postalCode},${item?.country}`;
          setDisplayAddress(currentAddress);

          if (currentAddress.length > 0) {
            setTimeout(() => {
              Navigation.navigate("HomeStack", { test: "test" });
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

const mapDispatchtoProps = (dispatch: any) => {
  return {
    addLocation: (location: any) => dispatch(addLocation(location)),
    addAllFoodList: (foodList: any) => dispatch(addAllFoodList(foodList)),
  };
};

export default connect(null, mapDispatchtoProps)(LandingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 10,
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
    flex: 0,
  },
});
