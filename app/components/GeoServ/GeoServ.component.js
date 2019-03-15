import React, { Component } from "react";
import { PermissionsAndroid, View, Text } from "react-native";
import Geolocation from "react-native-geolocation-service";

export default class GeoServ extends Component {
  async componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    const hasLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "App needs to access your location",
        message:
          "App needs access to your location " +
          "so we can let our app be even more awesome."
      }
    );
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  render() {
    const { ...extraProps } = this.props; // TODO: co te 3 kropki tu znacza? to jest jakas tablica czy coś?
    return <Text>Abcd</Text>;
  }
}
