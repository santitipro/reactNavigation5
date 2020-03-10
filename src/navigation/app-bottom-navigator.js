import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
