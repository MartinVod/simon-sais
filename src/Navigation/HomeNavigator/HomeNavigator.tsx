import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GameScreen} from '~/Screens';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Game: undefined;
};

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
