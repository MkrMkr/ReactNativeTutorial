import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import PropTypes from "prop-types"; // TODO: nieuzywany import?
import styles from "./Home.component.style";
import TextArea from "../TextArea/TextArea.component";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textAreaTitle}> Please enter your note here </Text>
        <TextArea style={styles.textArea} />
      </View>
    );
  }
}

export default Home;
