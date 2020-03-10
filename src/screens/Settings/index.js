import React from 'react';
import {View, Text} from 'react-native';

function Settings({navigation}) {
  return (
    <View>
      <Text>Hello world</Text>
      <Text onPress={() => navigation.navigate('Home')}>Go Home</Text>
    </View>
  );
}

export default Settings;
