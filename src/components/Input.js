import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Input = (props) => (
  <View style={[styles.mainContainer, props.style]}>
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      style={styles.input}
    />
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.checkBox}>
      <Text style={styles.checkBoxText}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '3%',
  },
  input: {
    width: '90%',
    height: '100%',
    backgroundColor: 'gray',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingLeft: 10,
  },
  checkBox: {
    backgroundColor: '#4398',
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Input;
