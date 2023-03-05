import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from '../HomeNavigator/HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeNavigator">
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
