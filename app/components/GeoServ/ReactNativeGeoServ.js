import React, { Component } from "react";
import { Platform, PermissionsAndroid, View, Text } from "react-native";
import Geolocation from "react-native-geolocation-service";

export default class ReactNariveGeoServ extends Component {
  watchId = null;
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
          alert("getCurrentPosition (success) " + JSON.stringify(position));
          this.updateStateWithNewPosition(position);
        },
        error => {
          //Wywoła się np. gdy weszliśmy na ekran z pobieraniem lokalizacji
          //z wyłączonym gpsem (watchPosition nie wywołuje się wtedy)
          alert("getCurrentPosition (error) " + JSON.stringify(error));
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      //Wywoływana przy kazdej zmianie pozycji gps w tym np. wtedy
      //gdy gps był wyłączony, weszliśmy w miejsce aplikacji z pobieraniem lokalizacji,
      // pojawil się systemowy dialog pytania o pozycję a następnie kliknelismy ok.
      this.watchId = Geolocation.watchPosition(latestloc => {
        alert("watchPosition " + JSON.stringify(latestloc));
        this.updateStateWithNewPosition(latestloc);
      });
    }
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

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View>
        <Text>--------react-native-geolocation-service--------</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timestamp: {this.state.timestamp}</Text>
      </View>
    );
  }
}
