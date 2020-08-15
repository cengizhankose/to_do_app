import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Input = (props) => (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      style={[styles.input,props.style]}
    />
);

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: '8%',
    borderBottomWidth:1,
    paddingLeft: 10,
  }
});

export default Input;
