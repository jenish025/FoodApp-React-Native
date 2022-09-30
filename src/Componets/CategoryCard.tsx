import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = (props: any) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props?.onTap(item)}
    >
      <Image
        style={styles.categoryImg}
        source={require("../LocalAppData/img/2.jpeg")}
      />
      <Text style={styles.textTitele}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    width: 150,
    borderRadius: 15,
    margin: 7,
  },
  categoryImg: {
    height: 130,
    borderRadius: 15,
    width: 150,
  },
  textTitele: {
    fontSize: 18,
  },
});
