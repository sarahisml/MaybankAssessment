import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchHistoryContainer from "../containers/SearchHistoryContainer";

class MapInput extends React.Component {
  state = {
    searchHistory: [],
  };

  addNewSearch = (data) => {
    this.setState((prevState) => ({
      searchHistory: [...prevState.searchHistory, data],
    }));
  };

  render() {
    return (
      <View style={{ flex: 5 }} paddingBottom={6}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={true}
          returnKeyType={"search"} // Can be left out for default return key
          listViewDisplayed={false} // true/false/undefined
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            this.props.notifyChange(details.geometry.location);
            this.addNewSearch(data.description);
          }}
          query={{
            key: "AIzaSyB-MhuE58Nrxp3MxQBG24St7WPSXLZ4uB0",
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
        />
        <View style={{ flex: 1 }}>
          <SearchHistoryContainer location={this.state.searchHistory} />
        </View>
      </View>
    );
  }
}
export default MapInput;
