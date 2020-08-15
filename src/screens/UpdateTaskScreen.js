import React, {useState} from 'react';
import {Text, SafeAreaView, View, StyleSheet, Platform} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import DeleteButton from '../components/DeleteButton';


function UpdateTask() {
  
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Update Task</Text>
      </View>
      <View style={styles.innerView}>
        <FormInput style={{marginTop: '5%'}} placeholder={'Task'} />
        <FormInput style={{marginTop: '5%'}} placeholder={'Description'} />
        <FormInput style={{marginTop: '5%'}} placeholder={'Date (DD.MM.YYYY)'} />
        <FormButton
          text={'UPDATE TASK'}
          style={{marginTop: '5%'}}
          onPress={() => {
            let arr = data.slice();
            let obj = {
              id: data.length,
              task,
            };
            arr.push(obj);

            setData(arr);
          }}
        />
        <DeleteButton
          text={'DELETE TASK'}
          style={{marginTop: '5%'}}
          onPress={() => {
            console.log('Task Deleted.')
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#c966d4',
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#c966d4',
  },
  innerView: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 6,
    elevation: 30,
  },
});

export default UpdateTask;
