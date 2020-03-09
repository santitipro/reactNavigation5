import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import RootNavigator from './src/navigation/';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default App;
