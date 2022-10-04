import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../redux/action/UserLocatin";

const screenWidth = Dimensions.get("screen").width;
const FoodListCard = (props: any) => {
  const { item, cartItem } = props;
  console.log(cartItem?.CartUpdateReducer.cart);

  const buyItem = (item: any) => {
    props.addCartItem(item);
  };

  const onAdd = () => {
    console.log("add");
  };

  const onRemove = () => {
    console.log("remove");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props?.onTap(item)}
      >
        <View style={styles.imgcontainer}>
          <Image
            style={styles.img}
            source={require("../LocalAppData/img/5.jpeg")}
          />
        </View>
        <View style={styles.itemcontainer}>
          <Text style={{ fontSize: 22 }}>{item?.foodName}</Text>
          {/* <Text>Dissadhkashdkashdkjhsakjdha</Text> */}
          <Text style={{ fontSize: 17, marginTop: 8 }}>${item?.foodPrice}</Text>
        </View>

        {cartItem?.CartUpdateReducer.cart.length > 0 ? (
          <View style={styles.addremovecontainer}>
            <TouchableOpacity onPress={onRemove} style={styles.addRemove}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 25, margin: 5 }}>{item.unit}</Text>
            <TouchableOpacity onPress={onAdd} style={styles.addRemove}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.buycontainer}
            onPress={() => buyItem(item)}
          >
            <Text style={{ fontSize: 17 }}>Add</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(FoodListCard);

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
    width: "26%",
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  itemcontainer: {
    width: "55%",
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
});
