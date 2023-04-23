import { Dimensions, StyleSheet } from "react-native";

let width = Dimensions.get("window").width;

export const SearchHistoryStyles = {
  main: {
    alignItems: "center",
  },
  searchHistoryView: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    padding: 5,
  },
};
