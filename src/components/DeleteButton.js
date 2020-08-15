import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FormButton = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[styles.button, props.style]}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 3,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default FormButton;
