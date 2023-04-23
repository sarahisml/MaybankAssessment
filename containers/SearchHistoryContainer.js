import React from "react";
import { View, Text, StyleSheet, FlatList, Item } from "react-native";
import { Input, List, Icon } from "antd";

class searchHistoryContainer extends React.Component {
  render() {
    let histories = this.props.location;

    const Item = ({ title }) => (
      <View>
        <Text>{title}</Text>
      </View>
    );
    return (
      <View>
        <Text style={styles.textContainer}>Search History</Text>
        <FlatList
          style={styles.textContainer}
          data={histories}
          renderItem={({ item }) => <Item title={item} />}
        />
      </View>
    );
  }
}

export default searchHistoryContainer;

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 10,
  },
});
