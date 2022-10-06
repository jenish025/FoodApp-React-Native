import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// interface FoodDetaildeProps {
//   item: any;
//   navigation: any;
//   route: any;
// }

const FoodeDetailedScreen: React.FC<any> = (props) => {
  const { route } = props;
  const { params } = route;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={params?.item?.img} />
      <Text style={{ fontSize: 35, margin: 10 }}>{params?.item?.foodName}</Text>
      <Text style={{ fontSize: 25, margin: 10 }}>
        {params?.item?.foodDescription}
      </Text>
      <Text style={{ fontSize: 20, margin: 10 }}>
        ${params?.item?.foodPrice}
      </Text>
    </View>
  );
};

export default FoodeDetailedScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  img: {
    height: 300,
    width: "100%",
  },
});
