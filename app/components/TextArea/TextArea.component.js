import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types'; // TODO: nieużywany import?
import styles from './TextArea.component.style';

class TextArea extends Component {
  state = {
    text: '',
  };
  render() {
    const {...extraProps} = this.props; // TODO: co te 3 kropki tu znacza? to jest jakas tablica czy coś?
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, extraProps.style]}
        multiline={true}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
export default TextArea;
