import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./Button.component.style";
class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}> Press Me! </Text>
      </View>
    );
  }
}

export default Button;
