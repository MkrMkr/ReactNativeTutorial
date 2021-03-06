import React, { Component } from "react";
import { SafeAreaView, Button, TextInput, View, Text } from "react-native";
import styles from "./Home.component.style";
import TextArea from "../TextArea/TextArea.component";
import CustomButton from "../Button/CustomButton.component";

class Home extends Component {
  state = {
    title: "" //adding the state here temporarily for illustration purposes
  };

  goToGeoServAction = () => {
    this.props.navigation.navigate("ReactNativeGeoServ");
  };

  setTitle = title => this.setState({ title }); //TODO: Ogarnąc tę konstrukcję
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.titleHeading}> Note Title</Text>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={this.setTitle}
            value={this.state.title}
          />
          <Text style={styles.textAreaTitle}>
            {" "}
            Please enter your note here{" "}
          </Text>
          <TextArea style={styles.textArea} />

          <View style={{ flexDirection: "column" }}>
            <Button
              title="react-native-location"
              onPress={() =>
                this.props.navigation.navigate("ReactNativeLocation")
              }
            />
            <CustomButton onPress={() => this.goToGeoServAction()} />
            <Button
              title="fused (android), default (ios)"
              onPress={() => this.props.navigation.navigate("FusedGeolocation")}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
