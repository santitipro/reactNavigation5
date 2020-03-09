import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="App" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
