import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import BottomNavigator from './app-bottom-navigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App Bottom Navigator" component={BottomNavigator} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
