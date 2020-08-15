import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import AddTaskButton from '../components/AddTaskButton';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { connect } from 'react-redux';

function HomeScreen(props) {
  const [task, setTask] = useState('');

  const [data, setData] = useState([]);

  useEffect(()=>{
    console.log("homescreen start data :",props.route.params?.obj);
    if(props.route.params?.obj){
      let arr = data.slice()
      arr.push(props.route.params?.obj)
      setData(arr)
    }
  },[props.route.params?.obj])


  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Update');
      }}
      style={{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
      }}>
      <Text
        style={{
          fontSize: 22,
        }}>
        {item.task}
      </Text>
      <Text
        style={{
          fontSize: 12,
          marginTop:'3%'
        }}>
        {item.dsc}
      </Text>
      <Text
        style={{
          fontSize: 12,
          marginTop:'3%',
          color:'gray',
          right: '5%',
          bottom: '4%',
          position: 'absolute',

        }}>
        Dateline: {item.date}
      </Text>
    </TouchableOpacity>
  );

  console.log("Buradaki data :", props.taskResponse);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tasks</Text>
      </View>
      <View style={styles.innerView}>
        <FlatList
          data={props.tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <AddTaskButton
          text={'ADD TASK'}
          onPress={() => {
            props.navigation.navigate('Add');
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
    backgroundColor: '#c966d4',
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
    color: 'white',
  },
  innerView: {
    backgroundColor: 'white',
    flex: 6,
    elevation: 30,
  },
});

const mapStateToProps = ({taskResponse}) => {
  const {tasks} = taskResponse;
  return {tasks};
};

export default connect(mapStateToProps,{})(HomeScreen);
