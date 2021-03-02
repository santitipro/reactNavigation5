import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@taxdown/piccolo/native';

function Home({navigation}) {
  return (
    <View>
      <Text>Hello world</Text>
      <Button title="epa" onClick={() => {}} />
      <Text onPress={() => navigation.navigate('Auth')}>LOGOUT</Text>
    </View>
  );
}

export default Home;
