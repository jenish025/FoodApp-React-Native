import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

// interface SearchProps {
//   onTextChanges: Function;
// }

const SearchBar: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchImg}
        source={require("../../assets/images/search.png")}
      />
      <TextInput
        style={styles.inputText}
        // onChangeText={onChange}
        // value={value}
        placeholder="search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  searchImg: {
    height: 25,
    width: 25,
  },
  inputText: {
    width: "90%",
    marginLeft: 5,
    fontSize: 16,
  },
});
