import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, StyleSheet, Platform} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {connect, useDispatch} from 'react-redux';
import {UPDATE_TASKS} from '../actions/types';


function AddTask(props) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [dsc, setDsc] = useState();
  const [date, setDate] = useState();

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Task</Text>
      </View>
      <View style={styles.innerView}>
        <FormInput
          style={{marginTop: '5%'}}
          value={title}
          placeholder={'Task'}
          onChangeText={(value) => setTitle(value)}
        />
        <FormInput
          style={{marginTop: '5%'}}
          value={dsc}
          placeholder={'Description'}
          onChangeText={(value) => setDsc(value)}
        />
        <FormInput
          style={{marginTop: '5%'}}
          value={date}
          placeholder={'Date (DD.MM.YYYY)'}
          onChangeText={(value) => setDate(value)}
        />
        <FormButton
          text={'ADD TASK'}
          style={{marginTop: '5%'}}
          onPress={() => {
            let obj = {
              title,
              dsc,
              date,
            };
            dispatch({type: UPDATE_TASKS, payload: obj});
            props.navigation.pop();
            console.log('Çıkan obj:', obj);
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

const mapStateToProps = ({taskResponse}) => {
  const {tasks} = taskResponse;
  return {tasks};
};

export default connect(mapStateToProps, {})(AddTask);
