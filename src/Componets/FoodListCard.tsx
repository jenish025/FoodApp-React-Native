import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const screenWidth = Dimensions.get("screen").width;
const FoodListCard = (props: any) => {
  const { item, cartItem } = props;

  const onAdd = (data: any) => {
    item.unit = data.unit + 1;
    props.addCartItem(item);
  };

  const onRemove = (data: any) => {
    item.unit = data.unit - 1;
    props.addCartItem(item);
  };

  useEffect(() => {}, [cartItem]);

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
          <Text style={{ fontSize: 17, marginTop: 8 }}>${item?.foodPrice}</Text>
        </View>

        {item.unit > 0 ? (
          <View style={styles.addremovecontainer}>
            <TouchableOpacity
              onPress={() => onRemove(item)}
              style={styles.addRemove}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 25, margin: 5 }}>{item.unit || 0}</Text>
            <TouchableOpacity
              onPress={() => onAdd(item)}
              style={styles.addRemove}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.buycontainer}
            onPress={() => onAdd(item)}
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
    cartItem: state?.AllFoodListReducer,
  };
};

export default connect(mapStatetoProps, null)(FoodListCard);

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
});
