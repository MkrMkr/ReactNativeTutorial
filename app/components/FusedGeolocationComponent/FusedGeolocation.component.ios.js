import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FusedGeolocation extends Component {
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
    navigator.geolocation.getCurrentPosition(
      position => {
        alert(
          "Default RN geolocation (used for iOS), getCurrentPosition (success)"
        );
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp
        });
      },
      error => {
        "Default RN geolocation (used for iOS), getCurrentPosition (error)";
      },
      { enableHighAccuracy: true, timeout: 30000 }
    );
    this.watchId = navigator.geolocation.watchPosition(newPosition => {
      alert("Default RN geolocation (used for iOS), watchPosition");
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>---RN default geolocation---</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
