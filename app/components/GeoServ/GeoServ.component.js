import React, { Component } from "react";
import { Platform, PermissionsAndroid, View, Text } from "react-native";
import Geolocation from "react-native-geolocation-service";

export default class GeoServ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      timestamp: null
    };
  }

  async componentDidMount() {
    if (await this.requestPermissionsIfNeeded()) {
      Geolocation.getCurrentPosition(
        position => {
          console.log("GeoServ component position" + JSON.stringify(position));
          var wholeJsonString = JSON.stringify(position);
          var wholeModel = JSON.parse(wholeJsonString);
          var coordsResulString = JSON.stringify(wholeModel.coords);
          var coordsResultModel = JSON.parse(coordsResulString);
          this.setState({
            latitude: coordsResultModel.latitude,
            longitude: coordsResultModel.longitude,
            timestamp: position.timestamp
          });
        },
        error => {
          // See error code charts below.
          console.log("GeoServ component error" + error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      Geolocation.watchPosition(latestloc => {
        console.log("latestloc:" + JSON.stringify(latestloc));
      });
    }
  }

  async requestPermissionsIfNeeded() {
    var hasLocationPermission = true;
    if (Platform.OS === "android") {
      hasLocationPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "App needs to access your location",
          message:
            "App needs access to your location " +
            "so we can let our app be even more awesome."
        }
      );
    }
    return hasLocationPermission;
  }

  render() {
    return (
      <View>
        <Text>--------GeoServ component android---------</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
