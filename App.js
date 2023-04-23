import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import MapContainer from "./containers/MapContainer";
import MapInput from "./components/MapInput";

import Constants from "expo-constants";
import MapView from "react-native-maps";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
