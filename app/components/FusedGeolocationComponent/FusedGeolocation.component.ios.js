import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FusedGeolocation extends Component {
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
        console.log(
          "New position in Geolocation component: " +
            position.coords.latitude +
            "," +
            position.coords.longitude
        );
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp
        });
        console.log(
          "geolocation comp latitude: " +
            this.latitude +
            " longitude: " +
            this.longitude
        );
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 30000 }
    );
  }

  render() {
    return (
      <View>
        <Text>---Fused geolocation component general---</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
