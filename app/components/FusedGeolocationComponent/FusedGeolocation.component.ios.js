import React, { Component } from "react";
import { PermissionsAndroid, View, Text } from "react-native";


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
    console.log("Coś działa")
  }

  render() {
    return (
      <View>
        <Text>Latitude fused: {this.state.latitude}</Text>
        <Text>Longitude fused: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
