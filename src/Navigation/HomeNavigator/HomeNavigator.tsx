import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GameScreen, GameOverScreen} from '~/Screens';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  GameScreen: undefined;
  GameOverScreen: {score: number};
};

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="GameScreen">
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="GameOverScreen"
        //@ts-ignore
        component={GameOverScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
