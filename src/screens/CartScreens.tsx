import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { addCartItem } from "../redux/action/UserLocatin";
import FoodListCard from "../Componets/FoodListCard";

const screenWidth = Dimensions.get("screen").width;

const CartScreens = (props: any) => {
  const { cartItem } = props;
  const { cart } = cartItem;
  console.log(cart);
  const [totalAmountPay, setTotalAmountPay] = useState(0);

  const onTapFood = () => {
    console.log("work");
  };

  const totalAmmount = () => {
    let total: any = 0;
    cart.map((data: any) => {
      total += JSON.parse(data?.foodPrice) * data?.unit;
    });
    setTotalAmountPay(total);
  };

  useEffect(() => {
    totalAmmount();
  }, [cartItem]);

  return (
    <SafeAreaView style={{ marginTop: 15, height: "100%" }}>
      {cart.length > 0 ? (
        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={cart}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <FoodListCard
                item={item}
                onTap={onTapFood}
                addCartItem={props.addCartItem}
              />
            )}
          />
          <View style={styles.BillContainer}>
            <Text style={styles.billText}>Total Amount To Pay </Text>
            <Text style={styles.billText}>{totalAmountPay} </Text>
          </View>
          <TouchableOpacity style={styles.OrderButton}>
            <Text style={{ fontSize: 25 }}>OrderNow</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.emptyCartText}>
          <Text style={{ fontSize: 35 }}>Cart is Empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
const mapStatetoProps = (state: any) => {
  return {
    cartItem: state?.CartUpdateReducer,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    addCartItem: (cart: any) => dispatch(addCartItem(cart)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CartScreens);

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#babac0",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 8,
  },
  imgcontainer: {
    width: screenWidth - 280,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  itemcontainer: {
    width: screenWidth - 210,
  },
  buycontainer: {
    width: "20%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "orange",
  },
  addremovecontainer: {
    flexDirection: "row",
  },

  addRemove: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
  },
  emptyCartText: {
    alignItems: "center",
  },
  BillContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#17eb9d",
    height: 35,
    padding: 5,
    borderRadius: 10,
  },
  billText: {
    fontSize: 20,
  },
  OrderButton: {
    alignItems: "center",
    backgroundColor: "#eb3868",
    borderRadius: 50,
    height: 50,
    padding: 12,
  },
});
