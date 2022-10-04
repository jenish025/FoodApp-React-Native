import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-navigation";
import FoodListCard from "../Componets/FoodListCard";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addCartItem } from "../redux/action/UserLocatin";

const RestaurantScreen = (props: any) => {
  const Navigation: any = useNavigation();
  const onTapFood = (item: any) => {
    Navigation.navigate("FoodDetail", { item: item });
  };

  return (
    <SafeAreaView style={{ margin: 2, flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../LocalAppData/img/4.jpeg")}
        />
      </View>
      <View style={styles.titlecontainer}>
        <Text style={{ fontSize: 25 }}>
          {props?.route?.params?.item?.title}
        </Text>
      </View>
      <View style={styles.ratingcontainer}>
        <Text style={{ fontSize: 18 }}>
          Phone:{props?.route?.params?.item?.number}
        </Text>
        <Text style={{ fontSize: 18 }}>
          Rating:{props?.route?.params?.item?.rating}
        </Text>
      </View>

      <ScrollView style={styles.foodlist}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={props?.route?.params.item?.foodList}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <FoodListCard item={item} onTap={onTapFood} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    cartItem: state,
  };
};

export default connect(mapStatetoProps, null)(RestaurantScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 320,
    borderRadius: 10,
  },
  titlecontainer: {
    margin: 5,
  },
  ratingcontainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  foodlist: {
    marginTop: 10,
  },
});
