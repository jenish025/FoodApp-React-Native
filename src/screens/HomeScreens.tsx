import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Componets/SearchBar";
import CategoryCard from "../Componets/CategoryCard";
import { FlatList } from "react-native-gesture-handler";
import { category } from "../LocalAppData/category";
import { TopFoodData } from "../LocalAppData/category";
import RestaurantCard from "../Componets/RestaurantCard";
import { useNavigation } from "@react-navigation/native";

interface HomeScreensProps {
  userLocation: any;
  foodData: any;
  // navigation: any;
}

const screenWidth = Dimensions.get("screen").width;
const HomeScreens: React.FC<HomeScreensProps> = (props) => {
  const Navigation: any = useNavigation();
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
    Navigation.navigate("FoodDetail", { item: item });
  };
  const onTapRestaurantItem = (item: any) => {
    Navigation.navigate("RestaurantDetail", { item: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.addressTextContainer}>
          <Text style={{ width: "90%" }}>{UserAddress}</Text>
          <Text style={{ width: "10%" }}>Edit</Text>
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
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <CategoryCard item={item} onTap={onTapCategoryItem} />
            )}
          />
          <Text style={{ fontSize: 25, margin: 8, color: "red" }}>
            Top Restaurant
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props?.foodData}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapRestaurantItem} />
            )}
          />
          <Text style={{ fontSize: 25, margin: 8, color: "red" }}>
            Top Food
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TopFoodData}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapFoodItemItem} />
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    userLocation: state,
    foodData: state?.AllFoodListReducer,
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
    flex: 0,
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
