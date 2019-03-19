import React, { Component } from "react";
import { Button, TextInput, View, Text } from "react-native";
import styles from "./Home.component.style";
import TextArea from "../TextArea/TextArea.component";
import CustomButton from "../Button/CustomButton.component";
import FusedGeolocation from "../FusedGeolocationComponent/FusedGeolocation.component";
import GeoServ from "../GeoServ/GeoServ.component";

class Home extends Component {
  state = {
    title: "" //adding the state here temporarily for illustration purposes
  };

  constructor(props) {
    super(props);
    this.goToGeoServAction = this.goToGeoServAction.bind(this);
  }

  goToGeoServAction() {
    alert("works!");
  }

  setTitle = title => this.setState({ title }); //TODO: Ogarnąc tę konstrukcję
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={this.setTitle}
          value={this.state.title}
        />
        <Text style={styles.textAreaTitle}> Please enter your note here </Text>
        <TextArea style={styles.textArea} />
        <GeoServ />
        <FusedGeolocation />
        <View style={{ flexDirection: "row" }}>
          <CustomButton onPress={() => this.goToGeoServAction()} />
          <Button
            title="Go to FusedGeolocation sample"
            onPress={() => this.props.navigation.navigate("FusedGeolocation")}
          />
        </View>
      </View>
    );
  }
}

export default Home;
