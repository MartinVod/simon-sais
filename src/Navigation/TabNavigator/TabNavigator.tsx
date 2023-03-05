import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from '../HomeNavigator/HomeNavigator';
import {Scoreboard} from '~/Screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeNavigator">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gamepad" color={color} size={size} />
          ),
          header: () => null,
        }}
        name="Play Simon"
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="scoreboard" color={color} size={size} />
          ),
          header: () => null,
        }}
        name="Score Board"
        component={Scoreboard}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
