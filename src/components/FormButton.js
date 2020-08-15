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
    backgroundColor: '#c966d4',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default FormButton;
