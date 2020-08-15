import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const AddTaskButton = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[styles.button, props.style]}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '15%',
    height: '9%',
    right: '5%',
    bottom: '4%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c966d4',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default AddTaskButton;
