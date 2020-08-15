import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddTaskScreen from './screens/AddTaskScreen';
import HomeScreen from './screens/HomeScreen';
import UpdateTaskScreen from './screens/UpdateTaskScreen';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateTaskScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddTaskScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
