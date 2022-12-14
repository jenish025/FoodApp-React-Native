import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const RestaurantCard = (props: any) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props?.onTap(item)}
    >
      <Image style={styles.cardImg} source={item.img} />
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
  cardImg: {
    borderRadius: 15,
    height: 250,
  },
});
