import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreens = () => {
  const UserLocation: any = useSelector((state) => state);
  const [UserAddress, setUserAddress] = useState<string>();
  useEffect(() => {
    const { userLocationReducer } = UserLocation;
    setUserAddress(
      `${userLocationReducer?.name},${userLocationReducer?.street},${userLocationReducer?.postalCode},${userLocationReducer?.country}`
    );
  }, [UserLocation.userLocationReducer]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.addressTextContainer}>
          <Text>{UserAddress}</Text>
          <Text>Edit</Text>
        </View>
        <Text></Text>
      </View>
      <View style={styles.body}>
        <Text>LandingScreen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
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
  addressTextContainer: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
