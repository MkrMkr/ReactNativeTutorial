import React, { Component } from "react";
import { View, Text } from "react-native";
import RNLocation from "react-native-location";

export default class GeoServImproved extends Component {
  watchId = null;
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      timestamp: null
    };
  }

  componentDidMount() {
    RNLocation.configure({
      distanceFilter: 5.0
    });
    RNLocation.requestPermission({
      //whenInUse - czy pozwalac na dostep do lokalizacji gdy uzywam aplikacji ?
      //always - czy pozwalac na dostep do lokalizacji tylko gdy jestem w aplikacji czy nawet wtedy gdy nie uzywam aplikacji?
      ios: "always",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        this._startUpdatingLocation();
      }
    });
  }

  _startUpdatingLocation = () => {
    this.locationSubscription = RNLocation.subscribeToLocationUpdates(
      locations => {
        var location = this.parseLocation(locations);
        alert(
          "latitude: " + location.latitude + " , longitude" + location.longitude
        );
        this.updateState(location);
      }
    );
  };

  _stopUpdatingLocation = () => {
    this.locationSubscription && this.locationSubscription(); //??
    this.setState({
      latitude: "",
      longitude: ""
    });
  };

  updateState(location) {
    this.setState({
      latitude: location.latitude,
      longitude: location.longitude,
      timestamp: location.timestamp
    });
  }

  parseLocation(locations) {
    var locationsString = JSON.stringify(locations);
    var myArray = JSON.parse(locationsString);
    var location = myArray[0];
    return location;
  }

  updateStateWithNewPosition(position) {
    var coordsResultModel = this.parseCoords(position);
    this.updateState(coordsResultModel, position);
  }

  componentWillUnmount() {
    this._stopUpdatingLocation();
  }

  render() {
    return (
      <View>
        <Text>--------react-native-location--------</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
