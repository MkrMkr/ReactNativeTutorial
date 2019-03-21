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
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            var locationsString = JSON.stringify(locations);
            alert(locationsString);
            var myArray = JSON.parse(locationsString);
            var location = myArray[0];

            this.setState({
              latitude: location.latitude,
              longitude: location.longitude,
              timestamp: location.timestamp
            });

            /* Example location returned
            {
              speed: -1,
              longitude: -0.1337,
              latitude: 51.50998,
              accuracy: 5,
              heading: -1,
              altitude: 0,
              altitudeAccuracy: -1
              floor: 0
              timestamp: 1446007304457.029
            }
            */
          }
        );
      }
    });
  }

  updateStateWithNewPosition(position) {
    var coordsResultModel = this.parseCoords(position);
    this.updateState(coordsResultModel, position);
  }

  parseCoords(position) {
    var wholeJsonString = JSON.stringify(position);
    var wholeModel = JSON.parse(wholeJsonString);
    var coordsResulString = JSON.stringify(wholeModel.coords);
    var coordsResultModel = JSON.parse(coordsResulString);
    return coordsResultModel;
  }

  updateState(coordsResultModel, position) {
    this.setState({
      latitude: coordsResultModel.latitude,
      longitude: coordsResultModel.longitude,
      timestamp: position.timestamp
    });
  }

  render() {
    return (
      <View>
        <Text>
          --------react-native-geolocation-service +
          react-native-location--------
        </Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
