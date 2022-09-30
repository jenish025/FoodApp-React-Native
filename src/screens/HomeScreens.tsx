import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Componets/SearchBar";
import CategoryCard from "../Componets/CategoryCard";
import { FlatList } from "react-native-gesture-handler";
import { category } from "../LocalAppData/category";
import { RestaurantData } from "../LocalAppData/category";
import { TopFoodData } from "../LocalAppData/category";
import RestaurantCard from "../Componets/RestaurantCard";

interface HomeScreensProps {
  userLocation: any;
}

const screenWidth = Dimensions.get("screen").width;
const HomeScreens: React.FC<HomeScreensProps> = (props) => {
  const { userLocation } = props;
  const [UserAddress, setUserAddress] = useState<string>();

  useEffect(() => {
    const { userLocationReducer } = userLocation;
    setUserAddress(
      `${userLocationReducer?.name},${userLocationReducer?.street},${userLocationReducer?.postalCode},${userLocationReducer?.country}`
    );
  }, [userLocation.userLocationReducer]);

  const onTapCategoryItem = () => {
    alert("foodList");
  };

  const onTapFoodItemItem = (item: any) => {
    alert("food");
  };
  const onTapRestaurantItem = (item: any) => {
    alert("list");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.addressTextContainer}>
          <Text>{UserAddress}</Text>
          <Text>Edit</Text>
        </View>
        <View style={styles.searchBar}>
          <SearchBar />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onTap={onTapCategoryItem}
                keyExtractor={(item: any) => item.id}
              />
            )}
          />
          <Text style={{ fontSize: 25, margin: 8, color: "red" }}>
            Top Restaurant
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={RestaurantData}
            renderItem={({ item }) => (
              <RestaurantCard
                item={item}
                onTap={onTapRestaurantItem}
                keyExtractor={(item: any) => item.id}
              />
            )}
          />
          <Text style={{ fontSize: 25, margin: 8, color: "red" }}>
            Top Food
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TopFoodData}
            renderItem={({ item }) => (
              <RestaurantCard
                item={item}
                onTap={onTapFoodItemItem}
                keyExtractor={(item: any) => item.id}
              />
            )}
          />
        </ScrollView>
      </View>
      {/* <View style={styles.footer}></View> */}
    </SafeAreaView>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    userLocation: state,
  };
};

export default connect(mapStatetoProps, null)(HomeScreens);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "rgb(206, 206, 206,1)",
  },
  navigation: {
    flex: 2,
  },
  searchBar: {
    flex: 1,
  },
  body: {
    flex: 15,
  },
  footer: {
    flex: 1,
  },
  addressTextContainer: {
    width: screenWidth - 31,
    flexWrap: "wrap",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
