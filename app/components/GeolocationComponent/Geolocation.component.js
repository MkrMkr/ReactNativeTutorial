import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitute: null,
      timestamp: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitute: position.coords.longitude,
          timestamp: position.timestamp
        });
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
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
