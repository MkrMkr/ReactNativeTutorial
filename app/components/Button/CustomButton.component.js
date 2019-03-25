import React, { Component } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import styles from "./CustomButton.component.style";

class CustomButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onPress}>
          <Text style={styles.buttonText}>
            react-native-geolocation-service
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CustomButton;
