import React, { Component } from "react";
import { PermissionsAndroid, View, Text } from "react-native";
import FusedLocation from "react-native-fused-location";

export default class FusedGeolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitute: null,
      timestamp: null
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    console.log(
      "-------------------------------------------------------------------"
    );
    const granted = await this.requestPermissions();
    if (granted) {
      FusedLocation.setLocationPriority(FusedLocation.Constants.HIGH_ACCURACY);

      // Get location once.
      const location = await FusedLocation.getFusedLocation();
      this.setState({
        latitude: location.latitude,
        longitude: location.longitude,
        timestamp: location.timestamp
      });

      // Set options.
      FusedLocation.setLocationPriority(FusedLocation.Constants.BALANCED);
      FusedLocation.setLocationInterval(20000);
      FusedLocation.setFastestLocationInterval(15000);
      FusedLocation.setSmallestDisplacement(10);

      // Keep getting updated location.
      FusedLocation.startLocationUpdates();

      // Place listeners.
      this.subscription = FusedLocation.on("fusedLocation", location => {
        /* location = {
           latitude: 14.2323,
           longitude: -2.2323,
           speed: 0,
           altitude: 0,
           heading: 10,
           provider: 'fused',
           accuracy: 30,
           bearing: 0,
           mocked: false,
           timestamp: '1513190221416'
         }
         */
        console.log(
          "latitude: " + location.latitude + "longitude: " + location.longitude
        );
        this.setState({
          latitude: location.latitude,
          longitude: location.longitude,
          timestamp: location.timestamp
        });
      });

      // Optional
      this.errSubscription = FusedLocation.on("fusedLocationError", error => {
        console.warn(error);
      });
    }
  }

  async requestPermissions() {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "App needs to access your location",
        message:
          "App needs access to your location " +
          "so we can let our app be even more awesome."
      }
    );
  }

  render() {
    console.log("render!!!");
    return (
      <View>
        <Text>--------Fused geolocation component android---------</Text>
        <Text>Latitude fused: {this.state.latitude}</Text>
        <Text>Longitude fused: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
