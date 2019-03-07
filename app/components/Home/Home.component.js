import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import PropTypes from "prop-types"; // TODO: nieuzywany import?
import styles from "./Home.component.style";
import TextArea from "../TextArea/TextArea.component";
import Button from "../Button/Button.component";

class Home extends Component {
  state = {
    title: "" //adding the state here temporarily for illustration purposes
  };
  setTitle = title => this.setState({ title }); //TODO: Ogarnąc tę konstrukcję
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <Button />
        <TextInput
          style={styles.titleTextInput}
          onChangeText={this.setTitle}
          value={this.state.title}
        />
        <Text style={styles.textAreaTitle}> Please enter your note here </Text>
        <TextArea style={styles.textArea} />
      </View>
    );
  }
}

export default Home;
