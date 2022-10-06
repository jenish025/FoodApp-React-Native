import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import FoodListCard from "../Componets/FoodListCard";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addCartItem } from "../redux/action/UserLocatin";

const RestaurantScreen = (props: any) => {
  const Navigation: any = useNavigation();
  const [foodListData, setFoodListData] = useState(
    props?.route?.params.item?.foodList
  );

  const onTapFood = (item: any) => {
    Navigation.navigate("FoodDetail", { item: item });
  };

  return (
    <SafeAreaView style={{ margin: 2, flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.img} source={props?.route?.params?.item?.img} />
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

      <FlatList
        style={styles.foodlist}
        showsHorizontalScrollIndicator={false}
        data={foodListData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <FoodListCard
            item={item}
            onTap={onTapFood}
            addCartItem={props.addCartItem}
            setFoodListData={setFoodListData}
            foodListData={foodListData}
          />
        )}
      />
    </SafeAreaView>
  );
};

const mapStatetoProps = (state: any) => {
  return {
    cartItem: state,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    addCartItem: (cart: any) => dispatch(addCartItem(cart)),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(RestaurantScreen);

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
