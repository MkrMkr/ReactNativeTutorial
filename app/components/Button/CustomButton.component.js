import React, { Component } from "react";
import { TouchableHighlight, Alert,StyleSheet, Text, View } from "react-native";
import styles from "./CustomButton.component.style";

class CustomButton extends Component {
  _onPressButton(){
    Alert.alert("Custom button tapped")
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._onPressButton}>
        <Text style={styles.buttonText}>Custom Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CustomButton;
